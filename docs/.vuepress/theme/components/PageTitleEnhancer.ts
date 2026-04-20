import { defineComponent, watch, onBeforeUnmount, onMounted, nextTick } from "vue";
import { usePageData, usePageFrontmatter } from "@vuepress/client";
import { sharedActiveFilter } from "./CommandSidebar";

/**
 * Root component that enhances the page title on command pages.
 * Injects the command name as a subtitle inside `.vp-page-title h1`,
 * wrapping both the title text and subtitle in a structured container.
 *
 * Also intercepts clicks on `.page-tag-item` in the article content
 * and syncs the sidebar tag filter accordingly.
 *
 * Result DOM:
 *   <h1>
 *     <img class="icon" ...>           ← theme icon
 *     <span class="cmd-title-group">
 *       <span class="cmd-title-main">选取图块</span>
 *       <span class="cmd-title-sub">B_SelBlock</span>
 *     </span>
 *   </h1>
 */
export default defineComponent({
  name: "PageTitleEnhancer",
  setup() {
    const pageData = usePageData();
    const frontmatter = usePageFrontmatter<{ cmd?: string }>();
    let cleanup: (() => void) | null = null;
    let tagClickCleanup: (() => void) | null = null;

    const enhance = (): void => {
      cleanup?.();
      cleanup = null;

      if (typeof document === "undefined") return;

      const cmd = frontmatter.value.cmd;
      if (!cmd) return;

      const h1 = document.querySelector(".vp-page-title h1");
      if (!h1) return;

      // Already enhanced — skip
      if (h1.querySelector(".cmd-title-group")) return;

      // Collect raw text nodes (the page title text)
      const textNodes = Array.from(h1.childNodes).filter(
        (node) => node.nodeType === Node.TEXT_NODE && (node.textContent ?? "").trim()
      );

      if (textNodes.length === 0) return;

      // Build wrapper group
      const group = document.createElement("span");
      group.className = "cmd-title-group";

      const mainTitle = document.createElement("span");
      mainTitle.className = "cmd-title-main";
      mainTitle.textContent = textNodes.map((n) => (n.textContent ?? "").trim()).join(" ");
      group.appendChild(mainTitle);

      const subtitle = document.createElement("span");
      subtitle.className = "cmd-title-sub";
      subtitle.textContent = cmd;
      group.appendChild(subtitle);

      // Replace text nodes with the group
      textNodes.forEach((node) => node.remove());
      h1.appendChild(group);

      cleanup = () => {
        // Restore original text nodes
        if (group.parentNode === h1) {
          const restoredText = document.createTextNode(mainTitle.textContent ?? "");
          h1.insertBefore(restoredText, group);
          group.remove();
        }
      };
    };

    // Delegated click handler for article tag items → sidebar filter sync
    const handleTagClick = (event: MouseEvent): void => {
      const target = event.target as HTMLElement;
      const tagItem = target.closest?.(".page-tag-item");
      if (!tagItem) return;

      const tagText = (tagItem.textContent ?? "").trim();
      if (!tagText) return;

      // Prevent the theme's default tag navigation
      event.preventDefault();
      event.stopPropagation();

      // Set the sidebar filter to match this tag
      sharedActiveFilter.value = tagText;

      // Scroll to sidebar top for visibility
      const sidebar = document.getElementById("medbox-command-sidebar");
      if (sidebar) {
        sidebar.scrollTop = 0;
      }
    };

    watch(
      () => pageData.value.path,
      () => {
        // Only run enhancement in a browser environment
        if (typeof window !== "undefined") {
          void nextTick(() => {
            // Small delay to ensure DOM is fully rendered after route change
            window.requestAnimationFrame(enhance);
          });
        }
      },
      { immediate: true }
    );

    onMounted(() => {
      if (typeof document !== "undefined") {
        document.addEventListener("click", handleTagClick, true);
        tagClickCleanup = () => {
          document.removeEventListener("click", handleTagClick, true);
        };
      }
    });

    onBeforeUnmount(() => {
      cleanup?.();
      tagClickCleanup?.();
    });

    return () => null;
  },
});
