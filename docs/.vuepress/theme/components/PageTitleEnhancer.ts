import { defineComponent, watch, onBeforeUnmount, nextTick } from "vue";
import { usePageData, usePageFrontmatter } from "@vuepress/client";

/**
 * Root component that enhances the page title on command pages.
 * Injects the command name as a subtitle inside `.vp-page-title h1`,
 * wrapping both the title text and subtitle in a structured container.
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

    onBeforeUnmount(() => {
      cleanup?.();
    });

    return () => null;
  },
});
