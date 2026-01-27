import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './server.mjs';

const _imports_0 = publicAssetsURL("/assets/images/material-icons/arrow-back.svg");
const _imports_1 = publicAssetsURL("/assets/images/material-icons/arrow-forward.svg");
const _sfc_main = {
  __name: "Paginator",
  __ssrInlineRender: true,
  props: {
    totalElements: {
      type: Number,
      default: 0
    },
    elementsPerPage: {
      type: Number,
      default: 0
    }
  },
  emits: ["page-changed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const currentPage = ref(1);
    const totalPages = computed(() => {
      return Math.ceil(props.totalElements / props.elementsPerPage) || 1;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "paginator" }, _attrs))} data-v-ab15076d><button${ssrIncludeBooleanAttr(currentPage.value === 1) ? " disabled" : ""} class="paginator__arrow-button" data-v-ab15076d><img${ssrRenderAttr("src", _imports_0)} alt="back arrow" data-v-ab15076d></button><!--[-->`);
      ssrRenderList(totalPages.value, (pageNum) => {
        _push(`<button class="${ssrRenderClass([
          "paginator__page-number",
          currentPage.value === pageNum ? "active" : ""
        ])}" data-v-ab15076d>${ssrInterpolate(pageNum)}</button>`);
      });
      _push(`<!--]--><button${ssrIncludeBooleanAttr(currentPage.value === totalPages.value) ? " disabled" : ""} class="paginator__arrow-button" data-v-ab15076d><img${ssrRenderAttr("src", _imports_1)} alt="forward arrow" data-v-ab15076d></button></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Paginator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Paginator = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ab15076d"]]);

export { Paginator as P };
//# sourceMappingURL=Paginator-BtA3o6Hg.mjs.map
