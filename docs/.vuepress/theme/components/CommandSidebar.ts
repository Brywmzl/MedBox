import { Fragment, computed, defineComponent, h, nextTick, onBeforeUnmount, ref, watch } from "vue";
import { usePageData, usePageFrontmatter, useRouteLocale, withBase } from "@vuepress/client";
import commandIndex from "../../command-index.json";

type CommandItem = {
  title: string;
  label?: string;
  tags?: string[];
  link: string;
  icon: string;
};

type NormalizedCommandItem = {
  title: string;
  label: string;
  tags: string[];
  link: string;
  icon: string;
  normalizedTags: string[];
  normalizedSearchText: string;
};

const normalizeText = (value: unknown): string => (typeof value === "string" ? value.trim() : "");
const normalizeKey = (value: unknown): string => normalizeText(value).toLowerCase();

const normalizeTags = (value: unknown): string[] => {
  if (!Array.isArray(value)) return [];

  return Array.from(new Set(value.map((item) => normalizeText(item)).filter(Boolean)));
};

const PREFERRED_COMMAND_TAGS = [
  "点",
  "曲线",
  "曲面",
  "标注",
  "选择",
  "变换",
  "物件",
  "图层",
  "文字",
  "分组",
  "工具",
  "统计",
  "分析",
];

const sortByLabel = (left: string, right: string): number =>
  left.localeCompare(right, "zh-Hans-CN", { numeric: true, sensitivity: "base" });

const commandItems = (commandIndex as CommandItem[])
  .map<NormalizedCommandItem>((item) => {
    const title = normalizeText(item.title);
    const label = normalizeText(item.label || item.title);
    const link = normalizeText(item.link);
    const icon = normalizeText(item.icon);
    const tags = normalizeTags(item.tags);

    return {
      title,
      label,
      tags,
      link,
      icon,
      normalizedTags: tags.map((tag) => normalizeKey(tag)),
      normalizedSearchText: `${label} ${title} ${tags.join(" ")}`.toLowerCase(),
    };
  })
  .filter((item) => Boolean(item.title) && Boolean(item.link))
  .sort((left, right) => sortByLabel(left.title, right.title));

const commandPagePaths = new Set(
  commandItems.flatMap((item) => [item.link, `${item.link}.html`, `${item.link}/`])
);

const COMMAND_SIDEBAR_CLASS = "has-command-sidebar";
const COMMAND_SIDEBAR_COLLAPSED_CLASS = "is-command-sidebar-collapsed";
const COMMAND_SIDEBAR_RESIZING_CLASS = "is-resizing-command-sidebar";
const COMMAND_SIDEBAR_STATE_KEY = "medbox-command-sidebar-state";
const COMMAND_SIDEBAR_PANEL_ID = "medbox-command-sidebar";
const COMMAND_SIDEBAR_MOBILE_OFFSET_KEY = "--command-sidebar-mobile-offset";
const COMMAND_SIDEBAR_MIN_WIDTH = 280;
const COMMAND_SIDEBAR_MAX_WIDTH = 640;
const COMMAND_FILTERS = [
  { key: "all", label: "All" },
  ...Array.from(new Set([...PREFERRED_COMMAND_TAGS, ...commandItems.flatMap((item) => item.tags)]))
    .sort((left, right) => {
      const leftIndex = PREFERRED_COMMAND_TAGS.indexOf(left);
      const rightIndex = PREFERRED_COMMAND_TAGS.indexOf(right);

      if (leftIndex !== -1 && rightIndex !== -1) return leftIndex - rightIndex;
      if (leftIndex !== -1) return -1;
      if (rightIndex !== -1) return 1;

      return sortByLabel(left, right);
    })
    .map((tag) => ({ key: tag, label: tag })),
];

const matchFilter = (item: NormalizedCommandItem, filterKey: string): boolean => {
  if (filterKey === "all") return true;

  return item.normalizedTags.includes(normalizeKey(filterKey));
};

const sharedKeyword = ref("");
const sharedActiveFilter = ref("all");
const sharedSidebarWidth = ref<number | null>(null);
const sharedSidebarCollapsed = ref(false);
let hasRestoredSidebarState = false;

const resolveSidebarWidthBounds = (): { min: number; max: number } => {
  if (typeof window === "undefined") {
    return {
      min: COMMAND_SIDEBAR_MIN_WIDTH,
      max: COMMAND_SIDEBAR_MAX_WIDTH,
    };
  }

  return {
    min: COMMAND_SIDEBAR_MIN_WIDTH,
    max: Math.max(
      COMMAND_SIDEBAR_MIN_WIDTH,
      Math.min(COMMAND_SIDEBAR_MAX_WIDTH, Math.floor(window.innerWidth * 0.45))
    ),
  };
};

const clampSidebarWidth = (value: number): number => {
  const { min, max } = resolveSidebarWidthBounds();

  return Math.min(max, Math.max(min, Math.round(value)));
};

const restoreSidebarState = (): void => {
  if (hasRestoredSidebarState || typeof window === "undefined") return;

  hasRestoredSidebarState = true;

  try {
    const rawState = window.sessionStorage.getItem(COMMAND_SIDEBAR_STATE_KEY);

    if (!rawState) return;

    const parsedState = JSON.parse(rawState) as {
      filter?: string;
      keyword?: string;
      width?: number;
      collapsed?: boolean;
    };

    if (typeof parsedState.keyword === "string") sharedKeyword.value = parsedState.keyword;
    if (typeof parsedState.filter === "string" && COMMAND_FILTERS.some((item) => item.key === parsedState.filter)) {
      sharedActiveFilter.value = parsedState.filter;
    }
    if (typeof parsedState.width === "number" && Number.isFinite(parsedState.width)) {
      sharedSidebarWidth.value = clampSidebarWidth(parsedState.width);
    }
  } catch {
    window.sessionStorage.removeItem(COMMAND_SIDEBAR_STATE_KEY);
  }
};

const persistSidebarState = (): void => {
  if (typeof window === "undefined") return;

  window.sessionStorage.setItem(
    COMMAND_SIDEBAR_STATE_KEY,
    JSON.stringify({
      keyword: sharedKeyword.value,
      filter: sharedActiveFilter.value,
      width: sharedSidebarWidth.value,
      collapsed: sharedSidebarCollapsed.value,
    })
  );
};

export default defineComponent({
  name: "CommandSidebar",
  setup() {
    restoreSidebarState();

    const keyword = sharedKeyword;
    const activeFilter = sharedActiveFilter;
    const sidebarWidth = sharedSidebarWidth;
    const isCollapsed = sharedSidebarCollapsed;
    const pageData = usePageData();
    const frontmatter = usePageFrontmatter();
    const routeLocale = useRouteLocale();
    const panelElement = ref<HTMLElement | null>(null);
    const isResizing = ref(false);
    let panelResizeObserver: ResizeObserver | null = null;
    let removeResizeListeners: (() => void) | null = null;

    const enabled = computed(() => {
      const path = pageData.value.path;
      const locale = routeLocale.value || "/";
      const cmdsBasePath = `${locale}guide`;
      const cmdsHomePaths = new Set([
        cmdsBasePath,
        `${cmdsBasePath}/`,
        `${cmdsBasePath}.html`,
        `${cmdsBasePath}/index.html`,
        `${cmdsBasePath}/README.html`,
      ]);

      if (path !== cmdsBasePath && path !== `${cmdsBasePath}.html` && !path.startsWith(`${cmdsBasePath}/`)) return false;
      if (!cmdsHomePaths.has(path) && !commandPagePaths.has(path)) return false;

      return frontmatter.value.home !== true;
    });

    const filteredItems = computed(() => {
      const value = keyword.value.trim().toLowerCase();

      return commandItems.filter((item) => {
        if (!matchFilter(item, activeFilter.value)) return false;
        if (!value) return true;

        return item.normalizedSearchText.includes(value);
      });
    });

    const syncDocumentState = (isEnabled: boolean, collapsed: boolean): void => {
      if (typeof document === "undefined") return;

      document.documentElement.classList.toggle(COMMAND_SIDEBAR_CLASS, isEnabled);
      document.documentElement.classList.toggle(COMMAND_SIDEBAR_COLLAPSED_CLASS, isEnabled && collapsed);
    };

    const syncSidebarWidth = (value: number | null): void => {
      if (typeof document === "undefined") return;

      if (value === null) {
        document.documentElement.style.removeProperty("--command-sidebar-width");

        return;
      }

      document.documentElement.style.setProperty("--command-sidebar-width", `${clampSidebarWidth(value)}px`);
    };

    const syncMobileOffset = (): void => {
      if (typeof document === "undefined" || typeof window === "undefined") return;

      if (!enabled.value || isCollapsed.value || !panelElement.value || window.innerWidth > 719) {
        document.documentElement.style.removeProperty(COMMAND_SIDEBAR_MOBILE_OFFSET_KEY);

        return;
      }

      const height = Math.ceil(panelElement.value.getBoundingClientRect().height + 12);
      document.documentElement.style.setProperty(COMMAND_SIDEBAR_MOBILE_OFFSET_KEY, `${height}px`);
    };

    const stopResize = (): void => {
      isResizing.value = false;

      if (typeof document !== "undefined") {
        document.documentElement.classList.remove(COMMAND_SIDEBAR_RESIZING_CLASS);
      }

      removeResizeListeners?.();
      removeResizeListeners = null;
    };

    const setCollapsed = (value: boolean): void => {
      if (isCollapsed.value === value) return;

      if (value) stopResize();
      isCollapsed.value = value;

      void nextTick(() => {
        syncMobileOffset();
      });
    };

    const updateSidebarWidth = (clientX: number): void => {
      sidebarWidth.value = clampSidebarWidth(clientX);
    };

    const handleResizeStart = (event: PointerEvent): void => {
      if (typeof window === "undefined" || event.button !== 0 || isCollapsed.value) return;

      event.preventDefault();
      isResizing.value = true;
      document.documentElement.classList.add(COMMAND_SIDEBAR_RESIZING_CLASS);

      const handlePointerMove = (moveEvent: PointerEvent): void => {
        updateSidebarWidth(moveEvent.clientX);
      };

      const handlePointerUp = (): void => {
        stopResize();
      };

      removeResizeListeners = () => {
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("pointerup", handlePointerUp);
        window.removeEventListener("pointercancel", handlePointerUp);
      };

      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", handlePointerUp);
      window.addEventListener("pointercancel", handlePointerUp);

      updateSidebarWidth(event.clientX);
    };

    const handleWindowResize = (): void => {
      if (sidebarWidth.value === null) {
        syncSidebarWidth(null);
      }

      if (sidebarWidth.value !== null) syncSidebarWidth(sidebarWidth.value);
      syncMobileOffset();
    };

    watch(
      [enabled, isCollapsed],
      ([isEnabled, collapsed]) => {
        syncDocumentState(isEnabled, collapsed);
      },
      { immediate: true }
    );
    watch(sidebarWidth, syncSidebarWidth, { immediate: true });
    watch([keyword, activeFilter, sidebarWidth, isCollapsed], persistSidebarState, { immediate: true });
    watch(
      panelElement,
      (element) => {
        panelResizeObserver?.disconnect();
        panelResizeObserver = null;

        if (typeof ResizeObserver !== "undefined" && element) {
          panelResizeObserver = new ResizeObserver(() => {
            syncMobileOffset();
          });
          panelResizeObserver.observe(element);
        }

        void nextTick(() => {
          syncMobileOffset();
        });
      },
      { immediate: true }
    );
    watch(
      [enabled, filteredItems, isCollapsed],
      () => {
        void nextTick(() => {
          syncMobileOffset();
        });
      },
      { immediate: true }
    );

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleWindowResize);
    }

    onBeforeUnmount(() => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleWindowResize);
      }

      panelResizeObserver?.disconnect();
      panelResizeObserver = null;
      stopResize();
      syncDocumentState(false, false);
      if (typeof document !== "undefined") {
        document.documentElement.style.removeProperty(COMMAND_SIDEBAR_MOBILE_OFFSET_KEY);
      }
    });

    return () =>
      h(
        "aside",
          {
            id: COMMAND_SIDEBAR_PANEL_ID,
            ref: panelElement,
            class: ["command-sidebar-panel", { "is-hidden": !enabled.value, "is-collapsed": isCollapsed.value }],
            "aria-hidden": !enabled.value || isCollapsed.value ? "true" : "false",
          },
          [
            h("div", { class: "command-sidebar-controls" }, [
              h("div", { class: "command-sidebar-search" }, [
                h("span", { class: "command-sidebar-search-icon", "aria-hidden": "true" }),
                h("input", {
                  class: "command-sidebar-input",
                  type: "text",
                  value: keyword.value,
                  placeholder: "\u641c\u7d22\u547d\u4ee4",
                  autocomplete: "off",
                  spellcheck: "false",
                  onInput: (event: Event) => {
                    keyword.value = (event.target as HTMLInputElement).value;
                  },
                }),
              ]),
              h(
                "div",
                { class: "command-sidebar-filters", role: "tablist", "aria-label": "\u547d\u4ee4\u7b5b\u9009" },
                COMMAND_FILTERS.map((filterItem) =>
                  h(
                    "button",
                    {
                      type: "button",
                      class: ["command-sidebar-filter", { active: activeFilter.value === filterItem.key }],
                      "aria-pressed": activeFilter.value === filterItem.key ? "true" : "false",
                      onClick: () => {
                        activeFilter.value = filterItem.key;
                      },
                    },
                    filterItem.label
                  )
                )
              ),
            ]),
            h(
              "div",
              { class: "command-sidebar-list" },
              filteredItems.value.length > 0
                ? filteredItems.value.map((item) => {
                    const active = pageData.value.path === item.link || pageData.value.path === `${item.link}.html`;

                    return h(
                      "a",
                      {
                        class: ["command-sidebar-item", { active }],
                        href: withBase(item.link),
                        "aria-current": active ? "page" : undefined,
                      },
                      [
                        h("img", {
                          class: "command-sidebar-item-icon",
                          src: withBase(item.icon),
                          alt: "",
                          loading: "lazy",
                          decoding: "async",
                        }),
                        h("div", { class: "command-sidebar-item-text-wrapper" }, [
                          h("span", { class: "command-sidebar-item-label" }, item.label),
                          h("span", { class: "command-sidebar-item-title" }, item.title),
                        ]),
                        h("span", {
                          class: "command-sidebar-item-copy",
                          title: "复制命令",
                          onClick: (e: Event) => {
                            e.preventDefault();
                            e.stopPropagation();
                            if (typeof navigator !== "undefined" && navigator.clipboard) {
                              navigator.clipboard.writeText(item.title);
                            }
                          }
                        }, [
                          h("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            class: "command-sidebar-copy-icon"
                          }, [
                            h("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }),
                            h("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })
                          ])
                        ])
                      ]
                    );
                  })
                : [
                    h("div", { class: "command-sidebar-empty" }, [
                      h("p", { class: "command-sidebar-empty-title" }, "\u672a\u627e\u5230\u5339\u914d\u7684\u547d\u4ee4"),
                      h(
                        "p",
                        { class: "command-sidebar-empty-text" },
                        "\u8bd5\u8bd5\u66f4\u6362\u5173\u952e\u8bcd\u6216\u5207\u6362\u7b5b\u9009\u6807\u7b7e"
                      ),
                    ]),
                  ]
            ),
            h("div", {
              class: ["command-sidebar-resize-handle", { active: isResizing.value }],
              role: "separator",
              "aria-orientation": "vertical",
              "aria-label": "Adjust command list width",
              onPointerdown: handleResizeStart,
            }),
          ]
        );
  },
});
