import Swiper, { EffectFade, Navigation, Pagination } from "swiper";
// import { EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiperConfig = {
  modules: [EffectFade, Navigation, Pagination],
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".custom-next-button",
    prevEl: ".custom-prev-button",
  },
};

const swiperContainer = document.querySelector(".swiper");
if (swiperContainer) new Swiper(swiperContainer, swiperConfig);
