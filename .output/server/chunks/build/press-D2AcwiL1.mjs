import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
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

const kit = [
  {
    title: "DICAPTA",
    subtitle: "Boilerplate",
    imgUrl: "/assets/images/cover_dicapta_boilerplate.png",
    href: "/assets/pdf/dicapta-boilerplate.pdf"
  },
  {
    title: "DICAPTA",
    subtitle: "Logo - Transparent / Large",
    imgUrl: "/assets/logo.png",
    href: "/assets/logo.png"
  },
  {
    title: "ALL4ACCESS",
    subtitle: "Logo - Transparent / Large",
    imgUrl: "/assets/images/logos/all-4-access-hd.png",
    href: "/assets/images/logos/all-4-access-hd.png"
  },
  {
    title: "ALL4ACCESS",
    subtitle: "Efforless Universal Access",
    imgUrl: "/assets/images/pdf-images/all4access-eua.png",
    href: "/assets/pdf/all4access-eua.pdf"
  },
  {
    title: "GoCC4ALL",
    subtitle: "Logo - Transparent / Small",
    imgUrl: "/assets/images/logos/gocc4all.png",
    href: "/assets/images/logos/gocc4all.png"
  },
  {
    title: "GoCC4ALL",
    subtitle: "Emergency Information",
    imgUrl: "/assets/images/pdf-images/gocc4all-emergency-information-at-your-fingertips.png",
    href: "/assets/pdf/gocc4all-emergency-information-at-your-fingertips.pdf"
  }
];
const json = {
  kit
};
const _sfc_main = {
  __name: "press",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Dicapta Press Kit | Media Resources & Accessibility Information",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Access Dicapta's press kit for media resources, company information, and insights on our innovative accessibility solutions for inclusive media."
        }
      ]
    });
    const pressKit = json.kit;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({
        id: "main",
        class: "press"
      }, _attrs))} data-v-d6bd4771><div class="press__header" data-v-d6bd4771><h1 data-v-d6bd4771>Press Kit</h1></div><div class="press__content" data-v-d6bd4771><!--[-->`);
      ssrRenderList(unref(pressKit), (element, index) => {
        _push(ssrRenderComponent(GenericCard, {
          class: "press__card",
          key: index,
          title: element.title,
          text: element.subtitle,
          imgUrl: element.imgUrl,
          href: element.href
        }, null, _parent));
      });
      _push(`<!--]--></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/press.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const press = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d6bd4771"]]);

export { press as default };
//# sourceMappingURL=press-D2AcwiL1.mjs.map
