import { defineClientConfig, usePageData } from "@vuepress/client";
import { defineComponent, h } from "vue";
import hopeThemeClientConfig from "./.temp/theme-hope/config.js";
import CommandSidebar from "./theme/components/CommandSidebar";

const HopeLayout = hopeThemeClientConfig.layouts?.Layout;

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
  rootComponents: [
    () => h(RouteAwareCommandSidebar),
  ],
  layouts: {
    Layout: RouteAwareLayout,
  },
});
