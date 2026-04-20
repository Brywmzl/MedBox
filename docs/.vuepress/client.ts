import { defineClientConfig, usePageData } from "@vuepress/client";
import { defineComponent, h } from "vue";
import hopeThemeClientConfig from "./.temp/theme-hope/config.js";
import CommandSidebar from "./theme/components/CommandSidebar";
import PageTitleEnhancer from "./theme/components/PageTitleEnhancer";

const HopeLayout = hopeThemeClientConfig.layouts?.Layout;

const setupServiceWorkerUpdates = (): void => {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
    return;
  }

  let hasReloaded = false;

  const activateWaitingWorker = (worker: ServiceWorker | null | undefined): void => {
    if (worker?.state === "installed") {
      worker.postMessage({ type: "SKIP_WAITING" });
    }
  };

  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (hasReloaded) {
      return;
    }

    hasReloaded = true;
    window.location.reload();
  });

  void navigator.serviceWorker.getRegistration().then((registration) => {
    if (!registration) {
      return;
    }

    activateWaitingWorker(registration.waiting);

    registration.addEventListener("updatefound", () => {
      const worker = registration.installing;

      if (!worker) {
        return;
      }

      worker.addEventListener("statechange", () => {
        if (worker.state === "installed" && navigator.serviceWorker.controller) {
          activateWaitingWorker(worker);
        }
      });
    });

    void registration.update();
  });
};

const RouteAwareCommandSidebar = defineComponent({
  name: "RouteAwareCommandSidebar",
  setup() {
    const pageData = usePageData();

    return () => h(CommandSidebar, { key: pageData.value.path });
  },
});

const RouteAwareLayout = defineComponent({
  name: "RouteAwareLayout",
  setup(_, { attrs, slots }) {
    const pageData = usePageData();

    return () => h(HopeLayout, { ...attrs, key: pageData.value.path }, slots);
  },
});

export default defineClientConfig({
  setup() {
    setupServiceWorkerUpdates();
  },
  rootComponents: [
    () => h(RouteAwareCommandSidebar),
    () => h(PageTitleEnhancer),
  ],
  layouts: {
    Layout: RouteAwareLayout,
  },
});
