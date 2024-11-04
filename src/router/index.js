import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MissionView from "@/views/MissionView.vue";
import ConsultingView from "@/views/ConsultingView.vue";
import ServicesView from "@/views/ServicesView.vue";
import AboutView from "../views/AboutView.vue";
import AudioDescriptionView from "@/views/AudioDescriptionView.vue";
import CaptionView from "@/views/CaptionView.vue";
import MediaProductionView from "@/views/MediaProductionView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import ResourcesView from "@/views/ResourcesView.vue";
import NewsView from "@/views/NewsView.vue";
import All4VoicingLiteView from "@/views/All4VoicingLiteView.vue";
import AccessibilityTipsView from "@/views/AccessibilityTipsView.vue";
import MultilingualDubbingView from "@/views/MultilingualDubbingView.vue";
import All4AccessView from "@/views/All4AccessView.vue";
import PreviousProjectsView from "@/views/PreviousProjectsView.vue";
import OurTeamView from "@/views/OurTeamView.vue";
import OurPartnersView from "@/views/OurPartnersView.vue";
import ArticleView from "@/views/ArticleView.vue";
import TvMovieAccessView from "@/views/TvMovieAccessView.vue";
import InformationSheetsView from "@/views/InformationSheetsView.vue";
import InformationSheetsSpecificView from "@/views/InformationSheetsSpecificView.vue";
import PressView from "@/views/PressView.vue";
import ArticleCaseStudiesView from "@/views/ArticleCaseStudiesView.vue";
import ArticleWhitePapersView from "@/views/ArticleWhitePapersView.vue";
import PrivacyPolicyView from "@/views/PrivacyPolicyView.vue";
import TermsAndConditionsView from "@/views/TermsAndConditionsView.vue";
import ContactUsView from "@/views/ContactUsView.vue";
import NewslettersView from "@/views/newslettersView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/services",
      name: "services",
      component: ServicesView,
      redirect: "/#services",
      children: [
        {
          path: "multilingual-dubbing",
          component: MultilingualDubbingView,
          name: "multilingual dubbing",
        },
        {
          path: "audio-description",
          component: AudioDescriptionView,
          name: "audio description",
        },
        {
          path: "caption",
          component: CaptionView,
          name: "caption",
        },
        {
          path: "consulting",
          component: ConsultingView,
          name: "consulting",
        },
        {
          path: "media-production",
          component: MediaProductionView,
          name: "media production",
        },
      ],
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsView,
      redirect: "/projects/tv-movie-access",
      children: [
        {
          path: "tv-movie-access",
          component: TvMovieAccessView,
          name: "tv & movie access",
        },
        {
          path: "all4voicing-lite",
          component: All4VoicingLiteView,
          name: "all4voicing lite",
        },
        {
          path: "all4access",
          component: All4AccessView,
          name: "all4access",
        },
        {
          path: "previous-projects",
          component: PreviousProjectsView,
          name: "previous projects",
        },
      ],
    },
    {
      path: "/resources",
      name: "resources",
      component: ResourcesView,
      children: [
        {
          path: "/resources/accessibility-tips",
          component: AccessibilityTipsView,
          name: "accessibility tips",
        },
        {
          path: "/resources/accessibility-tips/:id",
          component: ArticleView,
          name: "article",
        },
        {
          path: "/resources/information-sheets",
          component: InformationSheetsView,
          name: "information sheets",
        },
        {
          path: "/resources/information-sheets/:id",
          component: InformationSheetsSpecificView,
          name: "information sheets specific view",
        },
        {
          path: "/resources/case-study",
          component: ArticleCaseStudiesView,
          name: "case study",
        },
        {
          path: "/resources/white-paper",
          component: ArticleWhitePapersView,
          name: "white paper",
        },
      ],
    },
    {
      path: "/news",
      name: "news",
      component: NewsView,
      children: [
        {
          path: "/news/press",
          component: PressView,
          name: "press",
        },
        {
          path: "/news/newsletters",
          component: NewslettersView,
          name: "newsletters",
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
      redirect: "/about/mission",
      children: [
        {
          path: "mission",
          name: "mission",
          component: MissionView,
        },
        {
          path: "our-team",
          name: "our team",
          component: OurTeamView,
        },
        {
          path: "our-partners",
          name: "our partners",
          component: OurPartnersView,
        },
        {
          path: "contact-us",
          name: "contact us",
          component: ContactUsView,
        },
      ],
    },
    {
      path: "/privacy-policy",
      name: "privacy policy",
      component: PrivacyPolicyView,
    },
    {
      path: "/terms-and-conditions",
      name: "terms and conditions",
      component: TermsAndConditionsView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 100,
        behavior: "smooth",
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
