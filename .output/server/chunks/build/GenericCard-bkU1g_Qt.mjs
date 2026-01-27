import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "GenericCard",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    imgUrl: {
      type: String,
      default: ""
    },
    href: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: __props.href,
        class: "generic-card",
        target: "_blank",
        rel: "noopener noreferrer"
      }, _attrs))} data-v-9dc61267><div class="generic-card__text-container" data-v-9dc61267><h2 class="generic-card__title" data-v-9dc61267>${ssrInterpolate(__props.title)}</h2>`);
      if (__props.text) {
        _push(`<p class="generic-card__text" data-v-9dc61267>${ssrInterpolate(__props.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><img${ssrRenderAttr("src", __props.imgUrl)} alt="" data-v-9dc61267></a>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GenericCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const GenericCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9dc61267"]]);

export { GenericCard as G };
//# sourceMappingURL=GenericCard-bkU1g_Qt.mjs.map
