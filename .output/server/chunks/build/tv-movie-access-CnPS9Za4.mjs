import { useSSRContext, ref, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _imports_5 } from './virtual_public-DZv-InhI.mjs';
import { T as TwoColumns } from './TwoColumns-BE5DFbb2.mjs';
import { _ as _export_sfc } from './server.mjs';
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

const _imports_0 = publicAssetsURL("/assets/images/tv-movie-access-banner.webp");
const _imports_1 = publicAssetsURL("/assets/images/tv-movie-access-banner-m.webp");
const _imports_2 = publicAssetsURL("/assets/images/ico-collaboration.webp");
const _imports_3 = publicAssetsURL("/assets/images/ico-distribution.webp");
const _imports_4 = publicAssetsURL("/assets/images/ico-production.webp");
const _imports_6 = publicAssetsURL("/assets/images/lets-all-see-workshop.webp");
const _imports_7 = publicAssetsURL("/assets/images/couple-watching-tv.webp");
const _sfc_main$1 = {
  __name: "TvAndMovieAccessCard",
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
    videoLink: {
      type: String,
      default: ""
    },
    videoTitle: {
      type: String,
      default: ""
    },
    playlistLink: {
      type: String,
      default: ""
    },
    enterpriseLink: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tv-and-movie-card" }, _attrs))} data-v-cdeebe57><h3 class="tv-and-movie-card__title" data-v-cdeebe57>${ssrInterpolate(__props.title)}</h3><div class="tv-and-movie-card__content" data-v-cdeebe57><div class="tv-and-movie-card__left-column" data-v-cdeebe57>`);
      if (__props.enterpriseLink) {
        _push(`<a class="tv-and-movie-card__logo-container"${ssrRenderAttr("href", __props.enterpriseLink)} target="_blank" rel="noopener noreferrer" data-v-cdeebe57><img class="tv-and-movie-card__logo"${ssrRenderAttr("src", __props.imgUrl)}${ssrRenderAttr("alt", "logo of " + __props.title)} loading="lazy" data-v-cdeebe57></a>`);
      } else {
        _push(`<img class="tv-and-movie-card__logo"${ssrRenderAttr("src", __props.imgUrl)}${ssrRenderAttr("alt", "logo of " + __props.title)} loading="lazy" data-v-cdeebe57>`);
      }
      _push(`<div data-v-cdeebe57><p data-v-cdeebe57>${ssrInterpolate(__props.videoTitle)}</p><iframe width="100%"${ssrRenderAttr("src", __props.videoLink)} frameborder="0" allowfullscreen="allowfullscreen" loading="lazy" data-v-cdeebe57></iframe></div></div><div class="tv-and-movie-card__right-column" data-v-cdeebe57><p class="tv-and-movie-card__text" data-v-cdeebe57>${ssrInterpolate(__props.text)}</p>`);
      if (__props.playlistLink) {
        _push(`<a class="tv-and-movie-card__button button"${ssrRenderAttr("href", __props.playlistLink)} data-v-cdeebe57>Watch more</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TvAndMovieAccessCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TvAndMovieAccessCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-cdeebe57"]]);
const cards = [
  {
    id: 1,
    title: "Fred Rogers",
    text: "Educational kids programming - Spanish. Watch selected programming online on PBS Kids and the DCMP with Spanish AD and CC. It is also available on Amazon Prime Video, Hoopla, or DirecTV or as downloads from Apple TV, Amazon Video, Google Play Movies, and Vudu. Use the All4Access app to access the Spanish AD and CC. ",
    imgUrl: "/assets/images/logos/frp.webp",
    videoLink: "https://www.youtube.com/embed/rKUf0GXt8-U?rel=0&amp;wmode=transparent",
    videoTitle: "Alma's Way",
    playlistLink: "https://youtube.com/playlist?list=PLH42LI3Ty2vauLk9OP20n49hJHS65RmV4&si=-2x2n7Nql7kKwo-Q",
    enterpriseLink: "https://www.fredrogers.org"
  },
  {
    id: 2,
    title: "Sesame Workshop",
    text: "Children's educational programming - Spanish. Watch Sesame's content with AD, CC and ASL  on Plaza Sesamo YouTube's channel. Selected programming is also available at the DCMP.",
    imgUrl: "/assets/images/logos/sesame-workshop.webp",
    videoLink: "https://www.youtube.com/embed/HxFe2cDa9v8?si=xcAwCAI_91ZkPAV6&amp;wmode=transparent",
    videoTitle: "Plaza S\xE9samo",
    playlistLink: "https://youtube.com/playlist?list=PLH42LI3Ty2vbE4QBvQhZ-PRq76Pe7-klB&si=vWGZhifrBJzR80iT",
    enterpriseLink: "https://sesameworkshop.org/our-work/shows/mexico-latam-plaza-sesamo/"
  },
  {
    id: 3,
    title: "Semillitas",
    text: "Children's educational programming - Spanish. Watch it on Charter Spectrum channel 922, Verizon channel 1721 (HD), Commzoom channel 234, RCN channel 835, Hargray channel 301, and Ziply Fiber channel 1723 with AD on the SAP and CC. AD and CC are also available on the  All4Access app. ",
    imgUrl: "/assets/images/logos/semillitas.png",
    videoLink: "https://www.youtube.com/embed/1uhVzblzePA?rel=0&amp;wmode=transparent",
    videoTitle: "Boom & Reds",
    playlistLink: "https://youtube.com/playlist?list=PLH42LI3Ty2vbz4K4oL7KSm1J4KGRiiv6x&si=Wbn8eEKNmJ5M9Yml",
    enterpriseLink: "https://semillitas.com"
  },
  {
    id: 4,
    title: "WaterBear",
    text: "Environment - English. Watch WaterBear content directly on its free subscription platform and listen to the AD using the All4Access app.",
    imgUrl: "/assets/images/logos/wb.webp",
    videoLink: "https://www.youtube.com/embed/fKFct4cZT6g?wmode=transparent",
    videoTitle: "Inseparable Syke",
    playlistLink: "https://www.youtube.com/playlist?list=PLH42LI3Ty2vYTRkPDZIwRnjTT4X3GqGaP",
    enterpriseLink: "https://www.waterbear.com/campaigns/AD-Library"
  },
  {
    id: 5,
    title: "POV",
    text: "Social issues - English. POV films are broadcast by PBS stations around the country, and on all PBS-branded platforms, including pbs.org and the PBS Video app. AD available on the SAP, online and the All4Access app.",
    imgUrl: "/assets/images/logos/pov.webp",
    videoLink: "https://www.youtube.com/embed/Wg8Ej8WM5O8?wmode=transparent",
    videoTitle: "Let the Little Light Shine",
    playlistLink: "https://youtube.com/playlist?list=PLH42LI3Ty2vYNuyfrcL0_XduZr7itcNNh&si=6ZTjIpN9gOwBI6lz",
    enterpriseLink: "https://www.amdoc.org/pov/"
  },
  {
    id: 6,
    title: "Passport To Knowledge",
    text: "Science - English & Spanish. Searching airs on PBS stations nationwide. Watch the series on its website, YouTube, and the DCMP. Accessibility features include AD, CC in English and Spanish and American Sign Language - ASL, and are also available in the All4Access app.",
    imgUrl: "/assets/images/logos/ptk.webp",
    videoLink: "https://www.youtube.com/embed/gjBlPjkyXTg?rel=0&amp;wmode=transparent",
    videoTitle: "La B\xFAsqueda",
    playlistLink: "https://youtube.com/playlist?list=PLH42LI3Ty2vZZzsNpAIKNF5t4uLulqe2N",
    enterpriseLink: "https://searchingformeaning.org"
  },
  {
    id: 7,
    title: "Bare Feet",
    text: "A series about experiencing the world, one dance at a time - English. Available with audio description (AD) on the Described and Captioned Media Program (DCMP).",
    imgUrl: "/assets/images/logos/bare-feet.png",
    videoLink: "https://www.youtube.com/embed/Jq52aaG3H1Y?rel=0&amp;wmode=transparent",
    videoTitle: "Bare Feet",
    playlistLink: "https://www.youtube.com/playlist?list=PLH42LI3Ty2vattBSGmxfxSV5vQ6AJWNEe",
    enterpriseLink: "https://www.travelbarefeet.com"
  },
  {
    id: 8,
    title: "Canal 22 Internacional",
    text: "Latin American Culture - Spanish. Watch it on DIRECTV (CH 446), AT&T (CH 3022), Spectrum (CH 841), Grande (CH 205), Wave (CH 518), or Verizon (CH 1646) with AD on the SAP and close captions (CC). Also available on the DCMP with AD and CC.",
    imgUrl: "/assets/images/logos/canal22.png",
    videoLink: "https://www.youtube.com/embed/_8vXxT-w6w4?wmode=transparent",
    videoTitle: "Historias de Luz - Eunice Adorno",
    playlistLink: "https://youtube.com/playlist?list=PLH42LI3Ty2vYh8v2gYuYsiXujbughUAy2&si=0sAydQHPM0DQsDxU",
    enterpriseLink: "https://www.canal22.org.mx/internacional/index.html"
  },
  {
    id: 9,
    title: "Canal Trece",
    text: "Educational programming - Spanish. Watch selected programming on the DCMP with AD and on YouTube using the All4Access app to listen to the AD.",
    imgUrl: "/assets/images/logos/trece.png",
    videoLink: "https://www.youtube.com/embed/7g2FjG43hCE?wmode=transparent",
    videoTitle: "Clave de Sol",
    playlistLink: "https://www.youtube.com/playlist?list=PLH42LI3Ty2vbdncJ2p9wnJIv2eDJSiJus",
    enterpriseLink: "https://canaltrece.com.co/programas/"
  },
  {
    id: 10,
    title: "New Day Films",
    text: "Social issues, independent filmmakers - English. Films are available on New Day's streaming platform and Kanopy, an on-demand streaming video platform for public libraries and universities. Use the All4Access app to listen to the AD. ",
    imgUrl: "/assets/images/logos/new-day-films.png",
    videoLink: "https://www.youtube.com/embed/svxo0uxdtwQ?rel=0&amp;wmode=transparent",
    videoTitle: "Making the Impossible Possible",
    playlistLink: "https://youtube.com/playlist?list=PLH42LI3Ty2vZ7cPgAdwYwXBmB6ol-Km1U&si=2QujRSEmcaXqsvUU",
    enterpriseLink: "https://www.newday.com"
  },
  {
    id: 11,
    title: "SUPERFEST",
    text: "Superfest Disability Film Festival - English. AD for selected Superfest films is available on All4Access.",
    imgUrl: "/assets/images/logos/spf.png",
    videoLink: "https://www.youtube.com/embed/Va0bpO3wUYo?wmode=transparent",
    videoTitle: "Don Julio's Nails",
    playlistLink: "https://www.youtube.com/playlist?list=PLH42LI3Ty2vZmgt3wiEeX79m0gqkjRocG",
    enterpriseLink: "http://superfestfilm.org"
  },
  {
    id: 12,
    title: "Independent Producers",
    text: "Films by Taylor Aguilar, Teregua, Tatiana Millan and Set Hern\xE1ndez. Watch the films with AD on the DCMP. AD also available through the All4Access app.",
    imgUrl: "/assets/images/logos/independent-producers.png",
    videoLink: "https://www.youtube.com/embed/CxSIc9RT7Eg?rel=0&amp;wmode=transparent",
    videoTitle: "Los Universos de Leyla",
    playlistLink: "https://youtube.com/playlist?list=PLH42LI3Ty2vY8gpKBaAK1MaNORddFFNgo&si=m4FIVmnouKlVqhfb",
    enterpriseLink: ""
  },
  {
    id: 13,
    title: "Pragda",
    text: "Latin American cinema - Spanish. Its content is available on educational streaming platforms such as Kanopy and Alexander Street Press. Listen to the AD for selected films on the All4Access app.",
    imgUrl: "/assets/images/logos/pragda.png",
    videoLink: "https://www.youtube.com/embed/xvft8HURnlQ?wmode=transparent",
    videoTitle: "Miriam Lies",
    playlistLink: "https://youtube.com/playlist?list=PLH42LI3Ty2vaz-9ha4X1pDO6xZecTPRRa&si=SkjP1PPEcNtsZ0eu",
    enterpriseLink: "https://stream.pragda.com/pr-_acces"
  },
  {
    id: 14,
    title: "HITN",
    text: "Nature series - Spanish. Watch it on DIRECTV, DIRECTV NOW, DISH, AT&T U-verse TV, Verizon FiOS TV, Comcast, Charter Spectrum, Mediacom, CenturyLink Prism and Altice with AD on the SAP and CC. AD and CC are also available on the All4Access app.",
    imgUrl: "/assets/images/logos/hitn.png",
    videoLink: "https://www.youtube.com/embed/7gUqkULrkYI?rel=0&amp;wmode=transparent",
    videoTitle: "Mundo Salvaje con Ron Magill",
    playlistLink: "https://youtube.com/playlist?list=PLH42LI3Ty2vbKQud7FFOOylIrlAhelmDL&si=Ac6EHKDfZah09SQS",
    enterpriseLink: "https://www.hitn.org"
  },
  {
    id: 15,
    title: "WIPR",
    text: "Educational content - Spanish. Watch it on the Puerto Rico public TV with AD on the SAP and CC, and the PRTV App with open AD and CC. Selected programming is available on the DCMP. Accessibility is also available through the All4Access app.",
    imgUrl: "/assets/images/logos/wipr.png",
    videoLink: "https://www.youtube.com/embed/ySDMoxEGvno?rel=0&amp;wmode=transparent",
    videoTitle: "La F\xF3rmula STEAM",
    playlistLink: "https://youtube.com/playlist?list=PLH42LI3Ty2vaipY6PsaXnYyRmj_2mxGm3&si=kVaANsPOZ2SpdcM5",
    enterpriseLink: "https://wipr.pr/"
  },
  {
    id: 16,
    title: "KET",
    text: "Educational programming - English. Watch KET programs at KET.org and the KET App with AD.",
    imgUrl: "/assets/images/logos/ket.png",
    videoLink: "https://www.youtube.com/embed/jBDCA469YjE?wmode=transparent",
    videoTitle: "Garden Health and Maintenance",
    playlistLink: "https://youtube.com/playlist?list=PLH42LI3Ty2vZ0NHfXmIbr9onvFwSczPI6&si=h-gLr51Lubrgp6eR",
    enterpriseLink: "https://ket.org"
  },
  {
    id: 17,
    title: "Crawford Entertainment",
    text: "The Outsiders Club series - kids, outdoors - English & Spanish. Watch it on the Discover Florida Channel website and app, Roku, Apple TV, or Amazon Fire TV and use the All4Access app to access the English AD and CC. Also watch it on the DCMP in English and Spanish with AD and CC.",
    imgUrl: "/assets/images/logos/crawford.png",
    videoLink: "https://www.youtube.com/embed/eKG3Mr7BReU?rel=0&amp;wmode=transparent",
    videoTitle: "The Outsiders Club - Season 1 to 4",
    playlistLink: "https://youtube.com/playlist?list=PLH42LI3Ty2vanU0ip9RyfKSFiAySFZimV&si=fUx6PXiO4Me4VWyQ",
    enterpriseLink: "https://www.crawfordentertainment.tv"
  },
  {
    id: 18,
    title: "D'Ocon Films",
    text: "Educational kids programming - Spanish. Watch on the DCMP with AD.",
    imgUrl: "/assets/images/logos/docon.png",
    enterpriseLink: "https://www.doconfilms.com/"
  },
  {
    id: 19,
    title: "I Am Peace Festival",
    text: "Social issues - English. Selected films shown during the festival are available at the DCMP with AD & CC.",
    imgUrl: "/assets/images/logos/iampeace.png",
    videoLink: "https://www.youtube.com/embed/xLuyOoMwA4A?wmode=transparent",
    videoTitle: "Barcelona",
    playlistLink: "https://youtube.com/playlist?list=PLH42LI3Ty2vYiyzVysOymLfjLg8pNWJZX&si=ARFqPmOvBlxSizcc",
    enterpriseLink: "https://gamip.org/elementor-1283/"
  }
];
const cardsContent = {
  cards
};
const _sfc_main = {
  __name: "tv-movie-access",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Dicapta | Expanding Accessibility for TV & Movie Content",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Supported by the US Department of Education, Dicapta partners with providers to grow accessible TV and movies through innovative inclusive media initiatives."
        }
      ]
    });
    const cards2 = cardsContent.cards;
    const currentCards = ref(cards2.slice(0, 10));
    const displaySeeMoreButton = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({
        id: "main",
        class: "tv-movie-access"
      }, _attrs))} data-v-1cedd55f><section class="banner" data-v-1cedd55f><picture data-v-1cedd55f><source class="banner__img" media="(min-width: 768px)"${ssrRenderAttr("srcset", _imports_0)} alt="A kid looks at a tablet with awe." width="2330" height="982" data-v-1cedd55f><source class="banner__img" media="(max-width: 767px)"${ssrRenderAttr("srcset", _imports_1)} alt="A kid looks at a tablet with awe." width="1400" height="590" data-v-1cedd55f><img class="banner__img" aria-hidden="true" decoding="async"${ssrRenderAttr("src", _imports_0)} alt="A kid looks at a tablet with awe." width="2330" height="982" data-v-1cedd55f></picture><div class="banner__text" data-v-1cedd55f><h1 class="banner__text-title" data-v-1cedd55f><strong data-v-1cedd55f>Accessible Educational Media</strong> is our main contribution </h1></div></section><p class="informational-text text-centered" data-v-1cedd55f> Enhanced Access to Video for Students with Sensory Disabilities through Emerging Technology - <strong data-v-1cedd55f>EnhAccess</strong></p><section class="tv-movie-access__first-section" data-v-1cedd55f>`);
      _push(ssrRenderComponent(TwoColumns, null, {
        "left-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="tv-movie-access__contents" data-v-1cedd55f${_scopeId}><a href="#collaboration" class="tv-movie-access__contents-element" data-v-1cedd55f${_scopeId}><img${ssrRenderAttr("src", _imports_2)} alt="collaboration icon, if clicked redirects to the collaboration section in this page." width="200" height="244" data-v-1cedd55f${_scopeId}><p data-v-1cedd55f${_scopeId}>Collaboration</p></a><a href="#distribution" class="tv-movie-access__contents-element" data-v-1cedd55f${_scopeId}><img${ssrRenderAttr("src", _imports_3)} alt="distribution icon, if clicked redirects to the dissemination and distribution section in this page." width="200" height="244" data-v-1cedd55f${_scopeId}><p data-v-1cedd55f${_scopeId}>Dissemination &amp; Distribution</p></a><a href="#production" class="tv-movie-access__contents-element" data-v-1cedd55f${_scopeId}><img${ssrRenderAttr("src", _imports_4)} alt="production icon, if clicked redirects to the production section in this page." width="200" height="244" data-v-1cedd55f${_scopeId}><p data-v-1cedd55f${_scopeId}>Production</p></a></div>`);
          } else {
            return [
              createVNode("div", { class: "tv-movie-access__contents" }, [
                createVNode("a", {
                  href: "#collaboration",
                  class: "tv-movie-access__contents-element"
                }, [
                  createVNode("img", {
                    src: _imports_2,
                    alt: "collaboration icon, if clicked redirects to the collaboration section in this page.",
                    width: "200",
                    height: "244"
                  }),
                  createVNode("p", null, "Collaboration")
                ]),
                createVNode("a", {
                  href: "#distribution",
                  class: "tv-movie-access__contents-element"
                }, [
                  createVNode("img", {
                    src: _imports_3,
                    alt: "distribution icon, if clicked redirects to the dissemination and distribution section in this page.",
                    width: "200",
                    height: "244"
                  }),
                  createVNode("p", null, "Dissemination & Distribution")
                ]),
                createVNode("a", {
                  href: "#production",
                  class: "tv-movie-access__contents-element"
                }, [
                  createVNode("img", {
                    src: _imports_4,
                    alt: "production icon, if clicked redirects to the production section in this page.",
                    width: "200",
                    height: "244"
                  }),
                  createVNode("p", null, "Production")
                ])
              ])
            ];
          }
        }),
        "right-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="blue-title" data-v-1cedd55f${_scopeId}>TV &amp; Movie Access</h2><p data-v-1cedd55f${_scopeId}> It is a pleasure to share our passion for using technology to enhance access to TV and Movies for everybody, regardless of the audience&#39;s sensory abilities. Technology helps us produce and deliver high-quality <strong data-v-1cedd55f${_scopeId}>AD</strong> (audio descriptions) and <strong data-v-1cedd55f${_scopeId}>CC</strong> (closed captions) for selected educational TV programs and films. </p><p data-v-1cedd55f${_scopeId}> This work is funded under a grant from the U.S. Department of Education- Office of Special Education-OSEP, project &quot;Enhanced Access to Video for Students with Sensory Disabilities through Emerging Technology,&quot; TV Access H327C210001. </p>`);
          } else {
            return [
              createVNode("h2", { class: "blue-title" }, "TV & Movie Access"),
              createVNode("p", null, [
                createTextVNode(" It is a pleasure to share our passion for using technology to enhance access to TV and Movies for everybody, regardless of the audience's sensory abilities. Technology helps us produce and deliver high-quality "),
                createVNode("strong", null, "AD"),
                createTextVNode(" (audio descriptions) and "),
                createVNode("strong", null, "CC"),
                createTextVNode(" (closed captions) for selected educational TV programs and films. ")
              ]),
              createVNode("p", null, ' This work is funded under a grant from the U.S. Department of Education- Office of Special Education-OSEP, project "Enhanced Access to Video for Students with Sensory Disabilities through Emerging Technology," TV Access H327C210001. ')
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="collaboration" id="collaboration" data-v-1cedd55f><h2 class="collaboration__title" data-v-1cedd55f>Collaboration</h2>`);
      _push(ssrRenderComponent(TwoColumns, null, {
        "left-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<blockquote data-v-1cedd55f${_scopeId}><img${ssrRenderAttr("src", _imports_5)} alt="" data-v-1cedd55f${_scopeId}><p data-v-1cedd55f${_scopeId}> We invite Selected producers of TV/Films to review the general criteria for participating in our project </p></blockquote><h3 data-v-1cedd55f${_scopeId}>EnhAccess:</h3><ul data-v-1cedd55f${_scopeId}><li data-v-1cedd55f${_scopeId}> Is your content suitable to be used in a K-12 classroom setting? </li><li data-v-1cedd55f${_scopeId}> Are you exempt from FCC regulations regarding closed captions and audio description? </li><li data-v-1cedd55f${_scopeId}> Is your content available now, or will it be widely available in the U.S.? </li><li data-v-1cedd55f${_scopeId}>Do you want to reach new audiences?</li><li data-v-1cedd55f${_scopeId}>Are you interested in making this world accessible?</li></ul>`);
          } else {
            return [
              createVNode("blockquote", null, [
                createVNode("img", {
                  src: _imports_5,
                  alt: ""
                }),
                createVNode("p", null, " We invite Selected producers of TV/Films to review the general criteria for participating in our project ")
              ]),
              createVNode("h3", null, "EnhAccess:"),
              createVNode("ul", null, [
                createVNode("li", null, " Is your content suitable to be used in a K-12 classroom setting? "),
                createVNode("li", null, " Are you exempt from FCC regulations regarding closed captions and audio description? "),
                createVNode("li", null, " Is your content available now, or will it be widely available in the U.S.? "),
                createVNode("li", null, "Do you want to reach new audiences?"),
                createVNode("li", null, "Are you interested in making this world accessible?")
              ])
            ];
          }
        }),
        "right-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<iframe width="100%" height="315" src="https://www.youtube.com/embed/gd1u42TcQnA?rel=0&amp;amp;wmode=transparent" frameborder="0" allowfullscreen="allowfullscreen" loading="lazy" data-v-1cedd55f${_scopeId}></iframe>`);
          } else {
            return [
              createVNode("iframe", {
                width: "100%",
                height: "315",
                src: "https://www.youtube.com/embed/gd1u42TcQnA?rel=0&amp;wmode=transparent",
                frameborder: "0",
                allowfullscreen: "allowfullscreen",
                loading: "lazy"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="distribution" id="distribution" data-v-1cedd55f><h2 class="distribution__title" data-v-1cedd55f>Dissemination &amp; Distribution</h2>`);
      _push(ssrRenderComponent(TwoColumns, null, {
        "left-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-1cedd55f${_scopeId}> We partner with T.V./Film industry leaders, consumer organizations, educational service providers, researchers, and accessibility experts to ensure accessible content produced under EnhAccess reaches the beneficiaries. </p><p data-v-1cedd55f${_scopeId}> Dissemination activities include training workshops, TV campaigns promoting accessible content, awareness activities to educate the TV/Film industry on the needs of people with sensory disabilities, and participation in conferences, podcasts, newsletters of organizations, and educational events on the field. </p>`);
          } else {
            return [
              createVNode("p", null, " We partner with T.V./Film industry leaders, consumer organizations, educational service providers, researchers, and accessibility experts to ensure accessible content produced under EnhAccess reaches the beneficiaries. "),
              createVNode("p", null, " Dissemination activities include training workshops, TV campaigns promoting accessible content, awareness activities to educate the TV/Film industry on the needs of people with sensory disabilities, and participation in conferences, podcasts, newsletters of organizations, and educational events on the field. ")
            ];
          }
        }),
        "right-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_6)} alt="Let&#39;s All See Workshop&#39; flyer. Led by Dicapta, invites participants to explore how blind individuals enjoy audiovisual content. Gain new perspectives." loading="lazy" width="600" height="450" data-v-1cedd55f${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_6,
                alt: "Let's All See Workshop' flyer. Led by Dicapta, invites participants to explore how blind individuals enjoy audiovisual content. Gain new perspectives.",
                loading: "lazy",
                width: "600",
                height: "450"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TwoColumns, null, {
        "left-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_7)} alt="A couple watches TV. Both use the All4Access app. She uses it to listen to an audio description, and he uses it to watch ASL." loading="lazy" width="900" height="459" data-v-1cedd55f${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_7,
                alt: "A couple watches TV. Both use the All4Access app. She uses it to listen to an audio description, and he uses it to watch ASL.",
                loading: "lazy",
                width: "900",
                height: "459"
              })
            ];
          }
        }),
        "right-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 data-v-1cedd55f${_scopeId}>Distribution of Accessibility Assets</h3><p data-v-1cedd55f${_scopeId}><strong data-v-1cedd55f${_scopeId}>AD</strong> and <strong data-v-1cedd55f${_scopeId}>CC</strong> created under EnhAccess are delivered on the platforms where our partners are presenting their content. </p><p data-v-1cedd55f${_scopeId}>When approved by our content partner:</p><ul data-v-1cedd55f${_scopeId}><li data-v-1cedd55f${_scopeId}> The accessible content will be available at the Described and Captioned Media Program (DCMP). </li><li data-v-1cedd55f${_scopeId}> The accessibility assets will be available through the \u201CAll4Access\u201D Clearinghouse. </li></ul>`);
          } else {
            return [
              createVNode("h3", null, "Distribution of Accessibility Assets"),
              createVNode("p", null, [
                createVNode("strong", null, "AD"),
                createTextVNode(" and "),
                createVNode("strong", null, "CC"),
                createTextVNode(" created under EnhAccess are delivered on the platforms where our partners are presenting their content. ")
              ]),
              createVNode("p", null, "When approved by our content partner:"),
              createVNode("ul", null, [
                createVNode("li", null, " The accessible content will be available at the Described and Captioned Media Program (DCMP). "),
                createVNode("li", null, " The accessibility assets will be available through the \u201CAll4Access\u201D Clearinghouse. ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="production" id="production" data-v-1cedd55f><h2 class="production__title" data-v-1cedd55f>New Accessible Programming</h2><div class="production__cards-container" data-v-1cedd55f><!--[-->`);
      ssrRenderList(currentCards.value, (card) => {
        _push(ssrRenderComponent(TvAndMovieAccessCard, {
          class: "production__card",
          key: card.id,
          title: card.title,
          text: card.text,
          imgUrl: card.imgUrl,
          videoLink: card.videoLink,
          videoTitle: card.videoTitle,
          playlistLink: card.playlistLink,
          enterpriseLink: card.enterpriseLink
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
      if (displaySeeMoreButton.value) {
        _push(`<div class="production__see-more-button-container" data-v-1cedd55f><button data-v-1cedd55f>See more</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/tv-movie-access.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tvMovieAccess = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1cedd55f"]]);

export { tvMovieAccess as default };
//# sourceMappingURL=tv-movie-access-CnPS9Za4.mjs.map
