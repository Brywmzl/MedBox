import { defineClientConfig } from "vuepress/client";
import { h } from "vue";
import CommandSidebar from "./theme/components/CommandSidebar";

export default defineClientConfig({
  rootComponents: [
    () => h(CommandSidebar),
  ],
});
