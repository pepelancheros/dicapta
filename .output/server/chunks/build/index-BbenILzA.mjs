import { useSSRContext, ref, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _imports_5$1 } from './virtual_public-DZv-InhI.mjs';
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel';
import { _ as _export_sfc } from './server.mjs';
import { R as RowWithIconsAndText } from './RowWithIconsAndText-BgkV3c5G.mjs';
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

const _imports_0 = publicAssetsURL("/assets/images/home-banner.webp");
const _imports_1 = publicAssetsURL("/assets/images/home-banner-m.webp");
const _imports_2 = publicAssetsURL("/assets/images/dubbing.webp");
const _imports_3 = publicAssetsURL("/assets/images/audiodescription.webp");
const _imports_4 = publicAssetsURL("/assets/images/captioning.webp");
const _imports_5 = publicAssetsURL("/assets/images/consulting.webp");
const _imports_6 = publicAssetsURL("/assets/images/media-production-icon.webp");
const _sfc_main$2 = {
  __name: "NewslettersSubscription",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "newsletters" }, _attrs))} data-v-85b61c5b><h2 class="newsletters__title" data-v-85b61c5b>Subscribe to our newsletter</h2><form data-v-85b61c5b><label class="label-hidden" for="email" data-v-85b61c5b>Email</label><input class="newsletters__input"${ssrRenderAttr("value", email.value)} aria-label="Email" type="text" id="email" placeholder="Email" data-v-85b61c5b><input class="button newsletters__button" type="submit" value="Subscribe" data-v-85b61c5b></form></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NewslettersSubscription.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const NewslettersSubscription = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-85b61c5b"]]);
const _sfc_main$1 = {
  __name: "NewsCard",
  __ssrInlineRender: true,
  props: [
    "title",
    "image",
    "text",
    "buttonText",
    "primary-color",
    "secondary-color",
    "page-link"
  ],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "news-card",
        style: { backgroundColor: _ctx.primaryColor }
      }, _attrs))}><h2 class="news-card__title" style="${ssrRenderStyle({ backgroundColor: _ctx.secondaryColor })}">${ssrInterpolate(__props.title)}</h2><img class="news-card__img"${ssrRenderAttr("src", __props.image)} alt=""><p class="news-card__text">${ssrInterpolate(__props.text)}</p><a${ssrRenderAttr("href", _ctx.pageLink)} style="${ssrRenderStyle({ backgroundColor: _ctx.secondaryColor })}" class="news-card__button">${ssrInterpolate(__props.buttonText || "More articles...")}</a></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NewsCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Dicapta | Multilingual Accessibility Solutions for Inclusive Media",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Effortless accessibility starts here! Explore Dicapta's leading audio description, dubbing, and tech solutions tailored to your content needs. Learn more now!"
        }
      ]
    });
    const quotes = ref([
      {
        text: "It was essential to providing accommodations in this course that we were able to work with a company willing to get creative, innovate, and share their knowledge of creating accessible digital experiences with us as we navigated a new situation.",
        person: "Julie Clemetson",
        role: "University Student Services",
        place: "Johns Hopkins University"
      },
      {
        text: "Dicapta has been a thoughtful partner who has helped us see opportunities and needs as we work to create content that is both accessible and authentic. I especially appreciate Dicapta\u2019s focus on the Hispanic community and their willingness to provide insight into ways that we can make our content stronger to better serve our audience.",
        person: "Erin Dodson",
        role: "Director of Post-Production",
        place: "Fred Rogers Productions"
      },
      {
        text: "Dicapta was an excellent partner in creating high-quality Spanish language captions and dubbing and Described Video - both English and Spanish - for our 3-hour American Public Television series, \u201CSEARCHING: Our Quest for Meaning in the Age of Science.\u201D For we producers, it was a very easy relationship, and all technical aspects of the quite complex process went forward on schedule and on budget. In many decades of producing for public TV, this was one of the easiest and most successful sub-contracts.",
        person: "Geoff Haines-Stiles",
        role: "Co-Founder and CEO",
        place: "Passport to Knowledge (P2K)"
      },
      {
        text: "I use video description whenever possible, and I am so grateful for it. It allows me to see through someone else's eyes what is happening on the screen.",
        person: "Judy Mathews, MS",
        role: "CVRT, Assistive",
        place: "Technology Specialist"
      }
    ]);
    const rowWithIconsArray = ref([
      {
        imageUrl: "assets/images/video.png",
        imageAlt: "video icon",
        title: "4000+ Hours",
        text: "ACCESSIBILITY ASSETS PRODUCED"
      },
      {
        imageUrl: "assets/images/emergingtechnologies.png",
        imageAlt: "computer and phone icon",
        title: "Emerging Technogies",
        text: "DEVELOPMENT"
      },
      {
        imageUrl: "assets/images/mutilingualexpertise.png",
        imageAlt: "chat icon",
        title: "Multilingual Expertise",
        text: "ENGLISH, SPANISH, FRENCH AND PORTUGUESE MARKET REACH"
      }
    ]);
    const partners = [
      "/assets/images/logos/aph.png",
      "/assets/images/logos/acb.png",
      "/assets/images/logos/dcmp.png",
      "/assets/images/logos/deaf-blind.png",
      "/assets/images/logos/frp.webp",
      "/assets/images/logos/fcc.png",
      "/assets/images/logos/ncdb.png",
      "/assets/images/logos/teach-access.png",
      "/assets/images/logos/uc3m.png"
    ];
    const breakpoints = {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: "center"
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: "start"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ id: "main" }, _attrs))} data-v-16466e67><section class="banner" data-v-16466e67><picture data-v-16466e67><source class="banner__img" media="(min-width: 768px)"${ssrRenderAttr("srcset", _imports_0)} alt="A family watches TV and laughs" width="2500" height="1477" data-v-16466e67><source class="banner__img" media="(max-width: 767px)"${ssrRenderAttr("srcset", _imports_1)} alt="A family watches TV and laughs" width="1400" height="827" data-v-16466e67><img class="banner__img" aria-hidden="true" decoding="async"${ssrRenderAttr("src", _imports_0)} alt="A family watches TV and laughs" width="2500" height="1477" data-v-16466e67></picture><div class="banner__text" data-v-16466e67><h1 class="banner__text-title title-global" data-v-16466e67>DICAPTA</h1><p class="banner__text-subtitle title-global" data-v-16466e67> Disabilities Collaborative Organization, bringing access through the power of technology for all. </p></div></section><section id="services" class="services" data-v-16466e67><h2 class="services__title" data-v-16466e67>Our Services</h2><div class="services__buttons-container" data-v-16466e67><a href="/services/multilingual-dubbing" class="services__button" data-v-16466e67><img${ssrRenderAttr("src", _imports_2)} alt="dubbing icon" class="services__button-img" width="153" height="153" data-v-16466e67><span class="services__button-text" data-v-16466e67>Multilingual Dubbing</span></a><a href="/services/audio-description" class="services__button" data-v-16466e67><img${ssrRenderAttr("src", _imports_3)} alt="audio description icon" class="services__button-img" width="153" height="153" data-v-16466e67><span class="services__button-text" data-v-16466e67>Audio Description</span></a><a href="/services/captioning" class="services__button" data-v-16466e67><img${ssrRenderAttr("src", _imports_4)} alt="captioning icon" class="services__button-img" width="200" height="200" data-v-16466e67><span class="services__button-text" data-v-16466e67>Captioning</span></a><a href="/services/consulting" class="services__button" data-v-16466e67><img${ssrRenderAttr("src", _imports_5)} alt="consulting icon" class="services__button-img" width="153" height="153" data-v-16466e67><span class="services__button-text" data-v-16466e67>Consulting</span></a><a href="/services/media-production" class="services__button" data-v-16466e67><img${ssrRenderAttr("src", _imports_6)} alt="media production icon" class="services__button-img" width="250" height="250" data-v-16466e67><span class="services__button-text" data-v-16466e67>Media Production</span></a></div></section><section data-v-16466e67>`);
      _push(ssrRenderComponent(RowWithIconsAndText, { elements: rowWithIconsArray.value }, null, _parent));
      _push(`</section><section class="contact" data-v-16466e67><p class="contact__text" data-v-16466e67>Let us help you reach new markets</p><a class="contact__button button" href="/about/contact-us" data-v-16466e67>Contact Us</a></section><section class="our-work" data-v-16466e67><h2 class="our-work__title" data-v-16466e67>Our exceptional work</h2><div class="our-work__content" data-v-16466e67><div class="our-work__element" data-v-16466e67><iframe width="300" height="200" class="our-work__iframe" title="Dicapta accessibility" src="https://www.youtube.com/embed/giFtMHZSrjg?si=c2GVQYeq_17-fUWR&amp;wmode=transparent" frameborder="0" loading="lazy" data-v-16466e67></iframe><p class="our-work__text" data-v-16466e67>Accessibility</p></div><div class="our-work__element" data-v-16466e67><iframe width="300" height="200" class="our-work__iframe" title="Dicapta technology" src="https://www.youtube.com/embed/yz7WlHlS_Fw?si=5ycJWgXqlMgdgRwM&amp;amp;wmode=transparent" frameborder="0" loading="lazy" data-v-16466e67></iframe><p class="our-work__text" data-v-16466e67>Technology</p></div><div class="our-work__element" data-v-16466e67><iframe width="300" height="200" class="our-work__iframe" title="Dicapta media services" src="https://www.youtube.com/embed/RaGw21RNca8?si=jaD5mXXYEh5sx09w&amp;amp;wmode=transparent" frameborder="0" loading="lazy" data-v-16466e67></iframe><p class="our-work__text" data-v-16466e67>Media services</p></div></div></section><section class="our-partners" data-v-16466e67><h2 class="our-partners__title" data-v-16466e67>Our partners</h2>`);
      _push(ssrRenderComponent(unref(Carousel), mergeProps({ class: "our-partners__carousel" }, _ctx.settings, {
        breakpoints,
        autoplay: 2e3,
        "wrap-around": true
      }), {
        addons: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Navigation), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Navigation))
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(partners, (element) => {
              _push2(ssrRenderComponent(unref(Slide), { key: element }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div data-v-16466e67${_scopeId2}><img${ssrRenderAttr("src", element)} alt="bussiness logo" loading="lazy" data-v-16466e67${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", null, [
                        createVNode("img", {
                          src: element,
                          alt: "bussiness logo",
                          loading: "lazy"
                        }, null, 8, ["src"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(partners, (element) => {
                return createVNode(unref(Slide), { key: element }, {
                  default: withCtx(() => [
                    createVNode("div", null, [
                      createVNode("img", {
                        src: element,
                        alt: "bussiness logo",
                        loading: "lazy"
                      }, null, 8, ["src"])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="why" data-v-16466e67><h2 class="why__title" data-v-16466e67>Why choose Dicapta?</h2>`);
      _push(ssrRenderComponent(unref(Carousel), {
        class: "why__carousel",
        autoplay: 3e4,
        "wrap-around": true
      }, {
        addons: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Navigation), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Pagination), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Navigation)),
              createVNode(unref(Pagination))
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(quotes.value, (quote) => {
              _push2(ssrRenderComponent(unref(Slide), {
                key: quote.person
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="why__element" data-v-16466e67${_scopeId2}><img class="why__quote-icon"${ssrRenderAttr("src", _imports_5$1)} alt="quotation mark icon" data-v-16466e67${_scopeId2}><p class="why__quote-text" data-v-16466e67${_scopeId2}>${ssrInterpolate(quote.text)}</p><p class="why__quote-info" data-v-16466e67${_scopeId2}>${ssrInterpolate(quote.person)}</p><p class="why__quote-info" data-v-16466e67${_scopeId2}>${ssrInterpolate(quote.role)}</p><p class="why__quote-info" data-v-16466e67${_scopeId2}>${ssrInterpolate(quote.place)}</p></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "why__element" }, [
                        createVNode("img", {
                          class: "why__quote-icon",
                          src: _imports_5$1,
                          alt: "quotation mark icon"
                        }),
                        createVNode("p", { class: "why__quote-text" }, toDisplayString(quote.text), 1),
                        createVNode("p", { class: "why__quote-info" }, toDisplayString(quote.person), 1),
                        createVNode("p", { class: "why__quote-info" }, toDisplayString(quote.role), 1),
                        createVNode("p", { class: "why__quote-info" }, toDisplayString(quote.place), 1)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(quotes.value, (quote) => {
                return openBlock(), createBlock(unref(Slide), {
                  key: quote.person
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "why__element" }, [
                      createVNode("img", {
                        class: "why__quote-icon",
                        src: _imports_5$1,
                        alt: "quotation mark icon"
                      }),
                      createVNode("p", { class: "why__quote-text" }, toDisplayString(quote.text), 1),
                      createVNode("p", { class: "why__quote-info" }, toDisplayString(quote.person), 1),
                      createVNode("p", { class: "why__quote-info" }, toDisplayString(quote.role), 1),
                      createVNode("p", { class: "why__quote-info" }, toDisplayString(quote.place), 1)
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="whats-new" data-v-16466e67><h2 class="whats-new__title" data-v-16466e67>Whats new?</h2><div class="whats-new__cards-section" data-v-16466e67>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "Newsletters",
        image: "assets/images/newsletters/november-2024-cover.webp",
        text: "November Newsletter",
        "button-text": "More Newsletters...",
        "primary-color": "#257CED",
        "secondary-color": "#006CAC",
        "page-link": "/news/newsletters"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "Expert Insights",
        image: "assets/images/girl-and-boy-illustration.webp",
        text: "Embracing diversity in audio description",
        "primary-color": "#006CAA",
        "secondary-color": "#0D5384",
        "page-link": "/resources/white-papers"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "Blog",
        image: "/assets/images/articles/ACB-Awards-Gala-2024-2.jpeg",
        text: "2024 ACB Audio Description Awards Gala Available in Spanish Again",
        "primary-color": "#0D5384",
        "secondary-color": "#0B3862",
        "page-link": "/news/blog"
      }, null, _parent));
      _push(`</div></section>`);
      _push(ssrRenderComponent(NewslettersSubscription, null, null, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-16466e67"]]);

export { index as default };
//# sourceMappingURL=index-BbenILzA.mjs.map
