import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "RowWithIconsAndText",
  __ssrInlineRender: true,
  props: {
    elements: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.every(
          (element) => (typeof element.imageUrl === "string" && typeof element.imageAlt === "string" || typeof element.icon) && typeof element.title === "string" && typeof element.text === "string"
        );
      }
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "row-component__container" }, _attrs))} data-v-3b496920><div class="row-component" data-v-3b496920><!--[-->`);
      ssrRenderList(__props.elements, (element) => {
        _push(`<div class="row-component__item" data-v-3b496920>`);
        if (element.imageUrl) {
          _push(`<div class="row-component__image-container" data-v-3b496920><img class="row-component__image"${ssrRenderAttr("src", element.imageUrl)}${ssrRenderAttr("alt", element.imageAlt)} data-v-3b496920></div>`);
        } else {
          _push(`<span class="${ssrRenderClass([element.icon, "lnr"])}" data-v-3b496920></span>`);
        }
        _push(`<p class="row-component__title" data-v-3b496920>${ssrInterpolate(element.title)}</p><p class="row-component__text" data-v-3b496920>${ssrInterpolate(element.text)}</p></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RowWithIconsAndText.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RowWithIconsAndText = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3b496920"]]);

export { RowWithIconsAndText as R };
//# sourceMappingURL=RowWithIconsAndText-BgkV3c5G.mjs.map
