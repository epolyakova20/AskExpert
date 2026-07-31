const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  spaceBetween: 30,
  speed: 1000,

  grabCursor: true,

  autoplay: {
    delay: 1000,
  },

  effect: "coverflow",
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },

  // effect: "flip",
  // flipEffect: {
  //   slideShadows: false,
  // },

  // effect: "fade",
  // fadeEffect: {
  //   crossFade: true,
  // },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  a11y: {
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  mousewhell: true,

  keyboard: true,
});
