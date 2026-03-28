import { useRouteLocale, useSiteLocaleData, withBase } from "@vuepress/client";
import { computed, defineComponent, h } from "vue";
import { VPLink } from "vuepress-shared/client";
import { useThemeLocaleData } from "vuepress-theme-hope/client";

export default defineComponent({
  name: "NavbarBrand",
  setup() {
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();

    const siteBrandLink = computed(() => themeLocale.value.home || routeLocale.value);
    const siteTitle = computed(() => siteLocale.value.title);
    const siteBrandLogo = computed(() => themeLocale.value.logo ? withBase(themeLocale.value.logo) : null);
    const siteBrandLogoDark = computed(() => themeLocale.value.logoDark ? withBase(themeLocale.value.logoDark) : null);

    return () =>
      h(VPLink, { to: siteBrandLink.value, class: "vp-brand" }, () => [
        siteBrandLogo.value
          ? h("img", {
              class: ["vp-nav-logo", { light: Boolean(siteBrandLogoDark.value) }],
              src: siteBrandLogo.value,
              alt: siteTitle.value,
            })
          : null,
        siteBrandLogoDark.value
          ? h("img", {
              class: ["vp-nav-logo", "dark"],
              src: siteBrandLogoDark.value,
              alt: siteTitle.value,
            })
          : null,
        h("img", {
          class: "vp-site-name-image",
          src: withBase("/media/font-brand-light.svg"),
          alt: siteTitle.value,
        }),
      ]);
  },
});
