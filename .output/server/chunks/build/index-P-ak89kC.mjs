import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { j as json } from './informationSheetsMocked-ImCRlVkb.mjs';
import { G as GenericCard } from './GenericCard-bkU1g_Qt.mjs';
import { useHead } from '@vueuse/head';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Information Sheets | Dicapta\u2019s Accessibility Insights",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Access Dicapta\u2019s Information Sheets on sensory disabilities, Latinos with disabilities, accessible screenings, and more. Explore data and guidelines for inclusivity today!"
        }
      ]
    });
    const sheets = json.sheets;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({
        id: "main",
        class: "information-sheets"
      }, _attrs))} data-v-83b6bb86><div class="information-sheets__header" data-v-83b6bb86><h1 data-v-83b6bb86>Information Sheets</h1></div><div class="information-sheets__content" data-v-83b6bb86><!--[-->`);
      ssrRenderList(unref(sheets), (sheet) => {
        _push(ssrRenderComponent(GenericCard, {
          key: sheet.id,
          title: sheet.title,
          imgUrl: sheet.imgUrl,
          href: `/resources/information-sheets/${sheet.id}`
        }, null, _parent));
      });
      _push(`<!--]--></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resources/information-sheets/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-83b6bb86"]]);

export { index as default };
//# sourceMappingURL=index-P-ak89kC.mjs.map
