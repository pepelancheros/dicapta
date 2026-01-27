import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "two-columns" }, _attrs))} data-v-a0a46cc7><div class="two-columns__left-column" data-v-a0a46cc7>`);
  ssrRenderSlot(_ctx.$slots, "left-column", {}, null, _push, _parent);
  _push(`</div><div class="two-columns__right-column" data-v-a0a46cc7>`);
  ssrRenderSlot(_ctx.$slots, "right-column", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TwoColumns.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TwoColumns = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a0a46cc7"]]);

export { TwoColumns as T };
//# sourceMappingURL=TwoColumns-BE5DFbb2.mjs.map
