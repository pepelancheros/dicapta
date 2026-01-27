import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "ArticleCard",
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
    publishDate: {
      type: String,
      default: ""
    },
    imgUrl: {
      type: String,
      default: ""
    },
    imgAlt: {
      type: String,
      default: ""
    },
    link: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        class: "article-card",
        href: __props.link
      }, _attrs))} data-v-69e9b96d><div class="article-card__img-container" data-v-69e9b96d><img${ssrRenderAttr("src", __props.imgUrl)}${ssrRenderAttr("alt", __props.imgAlt)} data-v-69e9b96d></div><div class="article-card__content" data-v-69e9b96d><h2 data-v-69e9b96d>${ssrInterpolate(__props.title)}</h2>`);
      if (__props.text) {
        _push(`<p class="article-card__text" data-v-69e9b96d>${ssrInterpolate(__props.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.publishDate) {
        _push(`<span class="article-card__publish-date" data-v-69e9b96d>Published: ${ssrInterpolate(__props.publishDate)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></a>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ArticleCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ArticleCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-69e9b96d"]]);

export { ArticleCard as A };
//# sourceMappingURL=ArticleCard-BfyglyTe.mjs.map
