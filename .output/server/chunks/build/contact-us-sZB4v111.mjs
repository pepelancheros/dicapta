import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc, a as _imports_3, b as _imports_4, c as _imports_5, d as _imports_6$1, e as _imports_7 } from './server.mjs';
import { useHead } from '@vueuse/head';
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

const _imports_0 = publicAssetsURL("/assets/images/contact-us.webp");
const _imports_1 = publicAssetsURL("/assets/images/material-icons/call.svg");
const _imports_2 = publicAssetsURL("/assets/images/material-icons/mail.svg");
const _sfc_main = {
  __name: "contact-us",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Contact Dicapta | Get in Touch for Accessible Media Solutions",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Have questions or need accessibility solutions? Contact Dicapta today to learn how our audio description, dubbing, and tech services can benefit your media."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({
        id: "main",
        class: "contact"
      }, _attrs))} data-v-bb5ff82a><h1 class="contact__title" data-v-bb5ff82a> Bring your audiovisual productions to new audiences </h1><section data-v-bb5ff82a><img class="contact__main-img"${ssrRenderAttr("src", _imports_0)} alt="Cartoon: Two people brainstorm an idea using technology." width="900" height="480" data-v-bb5ff82a><p class="contact__top-text" data-v-bb5ff82a> Opening an audiovisual production to the world of individuals who are blind or deaf can extend the reach of your creations. It can also be a creative adventure. </p><p class="contact__top-text" data-v-bb5ff82a> Let us work with you in making your audiovisual production accessible. </p><p class="contact__top-text" data-v-bb5ff82a> Contact us to get more details and bring your creations to new audiences. </p></section><section class="contact__cards-section" data-v-bb5ff82a><div class="contact__card" data-v-bb5ff82a><img class="contact__card-icon"${ssrRenderAttr("src", _imports_1)} alt="phone icon" data-v-bb5ff82a><p data-v-bb5ff82a>call us at</p><a href="tel:4072791901" data-v-bb5ff82a>(407) 279-1901</a></div><div class="contact__card" data-v-bb5ff82a><img class="contact__card-icon"${ssrRenderAttr("src", _imports_2)} alt="mail icon" data-v-bb5ff82a><p data-v-bb5ff82a>Reach us by mail</p><a href="mailto:info@dicapta.com" data-v-bb5ff82a>info@dicapta.com</a></div></section><section class="contact__map-section" data-v-bb5ff82a><iframe src="https://maps.google.com/maps?q=378+Woodland+Ave,+Cocoa+Beach,+FL+32931&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" width="600" height="450" class="contact__map" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-v-bb5ff82a></iframe><div data-v-bb5ff82a><address data-v-bb5ff82a><p data-v-bb5ff82a> 378 Woodland Ave<br data-v-bb5ff82a>Cocoa Beach, FL 32931 </p><p data-v-bb5ff82a>Call:<a class="contact__link" href="tel:4072791901" data-v-bb5ff82a>(407) 279-1901</a></p><p data-v-bb5ff82a><a class="contact__link" href="mailto:info@dicapta.com" data-v-bb5ff82a>info@dicapta.com</a></p></address><div class="contact__social-media-container" data-v-bb5ff82a><a href="https://www.linkedin.com/company/dicapta" rel="noopener noreferrer" target="_blank" data-v-bb5ff82a><img${ssrRenderAttr("src", _imports_3)} alt="linkedin logo" loading="lazy" width="100" height="100" data-v-bb5ff82a></a><a href="https://www.youtube.com/user/DICAPTA" rel="noopener noreferrer" target="_blank" data-v-bb5ff82a><img${ssrRenderAttr("src", _imports_4)} alt="youtube logo" loading="lazy" width="143" height="100" data-v-bb5ff82a></a><a href="https://www.facebook.com/Dicapta" rel="noopener noreferrer" target="_blank" data-v-bb5ff82a><img${ssrRenderAttr("src", _imports_5)} alt="facebook logo" loading="lazy" width="100" height="100" data-v-bb5ff82a></a><a href="https://www.instagram.com/dicapta" rel="noopener noreferrer" target="_blank" data-v-bb5ff82a><img${ssrRenderAttr("src", _imports_6$1)} alt="instagram logo" loading="lazy" width="100" height="100" data-v-bb5ff82a></a><a href="https://x.com/Dicapta_tweets" rel="noopener noreferrer" target="_blank" data-v-bb5ff82a><img${ssrRenderAttr("src", _imports_7)} alt="X logo" loading="lazy" width="100" height="90" data-v-bb5ff82a></a></div><a href="mailto:info@dicapta.com" class="button contact__button" data-v-bb5ff82a>Email us</a></div></section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/contact-us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contactUs = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bb5ff82a"]]);

export { contactUs as default };
//# sourceMappingURL=contact-us-sZB4v111.mjs.map
