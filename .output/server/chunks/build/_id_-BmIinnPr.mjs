import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { j as json } from './informationSheetsMocked-ImCRlVkb.mjs';
import { _ as _export_sfc, u as useRoute } from './server.mjs';
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const sheets = json.sheets;
    const currentSheet = sheets.filter(
      (sheet) => sheet.id === Number(route.params.id)
    )[0];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({
        id: "main",
        class: "information-sheet"
      }, _attrs))} data-v-cd7d92e3><h1 class="information-sheet__title" data-v-cd7d92e3>${ssrInterpolate(unref(currentSheet).title)}</h1><div class="information-sheet__pdf-container" data-v-cd7d92e3><iframe${ssrRenderAttr("src", unref(currentSheet).pdfUrl + "#zoom=FitH")} frameborder="0" data-v-cd7d92e3></iframe></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resources/information-sheets/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cd7d92e3"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-BmIinnPr.mjs.map
