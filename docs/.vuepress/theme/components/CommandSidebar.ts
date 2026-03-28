import { computed, defineComponent, h, ref } from "vue";
import { usePageFrontmatter, useRouteLocale } from "vuepress/client";
import { useRoute, useRouter } from "vue-router";
import commandIndex from "../../command-index.json";

type CommandItem = {
  title: string;
  category: string;
  link: string;
  icon: string;
};

const commandItems = commandIndex as CommandItem[];

export default defineComponent({
  name: "CommandSidebar",
  setup() {
    const keyword = ref("");
    const route = useRoute();
    const router = useRouter();
    const frontmatter = usePageFrontmatter();
    const routeLocale = useRouteLocale();

    const enabled = computed(() => {
      const path = route.path;
      const locale = routeLocale.value || "/";
      const guidePrefix = `${locale}guide/`;

      if (!path.startsWith(guidePrefix)) return false;
      if (path === guidePrefix || path === `${guidePrefix}README.html`) return false;

      return frontmatter.value.home !== true;
    });

    const filteredItems = computed(() => {
      const value = keyword.value.trim().toLowerCase();

      if (!value) return commandItems;

      return commandItems.filter((item) =>
        item.title.toLowerCase().includes(value) || item.category.toLowerCase().includes(value)
      );
    });

    const navigate = (link: string) => {
      void router.push(link);
    };

    return () => {
      if (!enabled.value) return null;

      return h("aside", { class: "command-sidebar-panel" }, [
        h("div", { class: "command-sidebar-search" }, [
          h("span", { class: "command-sidebar-search-icon", "aria-hidden": "true" }),
          h("input", {
            class: "command-sidebar-input",
            type: "search",
            value: keyword.value,
            placeholder: "搜索命令",
            onInput: (event: Event) => {
              keyword.value = (event.target as HTMLInputElement).value;
            },
          }),
        ]),
        h(
          "div",
          { class: "command-sidebar-list" },
          filteredItems.value.map((item) => {
            const active = route.path === item.link || route.path === `${item.link}.html`;

            return h(
              "button",
              {
                type: "button",
                class: ["command-sidebar-item", { active }],
                onClick: () => navigate(item.link),
              },
              [
                h("img", {
                  class: "command-sidebar-item-icon",
                  src: item.icon,
                  alt: item.title,
                }),
                h("span", { class: "command-sidebar-item-text" }, item.title),
              ]
            );
          })
        ),
      ]);
    };
  },
});
