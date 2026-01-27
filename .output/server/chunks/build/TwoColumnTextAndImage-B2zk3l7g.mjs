import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "TwoColumnTextAndImage",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: ""
    },
    buttonText: {
      type: String,
      default: ""
    },
    buttonUrl: {
      type: String,
      default: ""
    },
    imageUrl: {
      type: String,
      default: ""
    },
    imageAlt: {
      type: String,
      default: ""
    },
    imageText: {
      type: String,
      default: ""
    },
    imageFirst: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "two-columns-text-and-image" }, _attrs))} data-v-73836182><div class="${ssrRenderClass([{ "two-columns-text-and-image__text--second": __props.imageFirst }, "two-columns-text-and-image__text"])}" data-v-73836182>`);
      if (__props.title) {
        _push(`<h2 class="two-columns-text-and-image__title" data-v-73836182>${ssrInterpolate(__props.title)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      if (__props.buttonUrl && __props.buttonText) {
        _push(`<a class="button"${ssrRenderAttr("href", __props.buttonUrl)} data-v-73836182>${ssrInterpolate(__props.buttonText)}</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="two-columns-text-and-image__image-container" data-v-73836182>`);
      if (__props.imageUrl) {
        _push(`<img${ssrRenderAttr("src", __props.imageUrl)}${ssrRenderAttr("alt", __props.imageAlt)} loading="lazy" data-v-73836182>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.imageText) {
        _push(`<p data-v-73836182>${ssrInterpolate(__props.imageText)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TwoColumnTextAndImage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TwoColumnTextAndImage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-73836182"]]);

export { TwoColumnTextAndImage as T };
//# sourceMappingURL=TwoColumnTextAndImage-B2zk3l7g.mjs.map
