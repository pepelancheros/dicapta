import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { P as Paginator } from './Paginator-BtA3o6Hg.mjs';
import { L as Loading } from '../_/index.mjs';
import { useHead } from '@vueuse/head';
import { _ as _export_sfc } from './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "newsletters",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Dicapta Newsletters | Subscribe for Updates on Accessibility and Media",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Sign up for Dicapta's newsletters to receive the latest updates on accessibility innovations, new services, and industry trends. Stay informed and connected!"
        }
      ]
    });
    const isLoading = ref(false);
    const newsletters2 = ref([]);
    const currentNewsletters = ref([]);
    const monthsArray = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    function getNewslettersMonth(newsletter) {
      const date = new Date(newsletter.date);
      return monthsArray[date.getMonth()];
    }
    const handlePageChange = (page) => {
      const startIndex = (page - 1) * 9;
      const endIndex = startIndex + 9;
      currentNewsletters.value = newsletters2.value.slice(startIndex, endIndex);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({
        id: "main",
        class: "newsletters"
      }, _attrs))} data-v-1eac26e9><div class="newsletters__header" data-v-1eac26e9><h1 data-v-1eac26e9>Newsletters</h1></div><div class="newsletters__content" data-v-1eac26e9>`);
      _push(ssrRenderComponent(unref(Loading), {
        class: "loading",
        active: isLoading.value,
        "is-full-page": true,
        color: "#0f52ba",
        width: 100,
        height: 100
      }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(currentNewsletters.value, (newsletter) => {
        _push(`<a class="newsletters__card"${ssrRenderAttr("href", newsletter.pdfUrl)} target="_blank" rel="noopener noreferrer" data-v-1eac26e9><img${ssrRenderAttr("src", newsletter.imageUrl)}${ssrRenderAttr("alt", "newsletter of " + getNewslettersMonth(newsletter))} data-v-1eac26e9></a>`);
      });
      _push(`<!--]--></div><div class="newsletters__paginator-container" data-v-1eac26e9>`);
      _push(ssrRenderComponent(Paginator, {
        "total-elements": newsletters2.value.length,
        "elements-per-page": 9,
        onPageChanged: handlePageChange
      }, null, _parent));
      _push(`</div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/newsletters.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const newsletters = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1eac26e9"]]);

export { newsletters as default };
//# sourceMappingURL=newsletters-CnDfsTo0.mjs.map
