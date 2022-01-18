import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

if (document.querySelector('.header__swiper')) {
  const sor = new Swiper('.header__swiper', {
    centeredSlides: true,
    grabCursor: true,
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // setInterval(function () {sor.slideNext();}, 3000);
}





// if (document.querySelector('.swiper')) {
//   new Swiper('.swiper', {
//     speed: 400,
//     spaceBetween: 100,
//     // slidesPerView: 2,
//     // Подключаем модули слайдера
//     // для конкретного случая
//     //modules: [Navigation, Pagination],
//     // effect: 'fade',
//     // autoplay: {
//     // 	delay: 3000,
//     // 	disableOnInteraction: false,
//     // },
//     // observer: true,
//     // observeParents: true,
//     // slidesPerView: 1,
//     // spaceBetween: 0,
//     // autoHeight: true,
//     // speed: 800,
//     // touchRatio: 0,
//     // simulateTouch: false,
//     // loop: true,
//     // preloadImages: false,
//     // lazy: true,
//     // Dotts
//     pagination: {
//     	el: '.slider-quality__pagging',
//     	clickable: true,
//     },
//     // Arrows
//     navigation: {
//       nextEl: '.about__more .more__item_next',
//       prevEl: '.about__more .more__item_prev',
//     },
//     /*
//     breakpoints: {
//       320: {
//         slidesPerView: 1,
//         spaceBetween: 0,
//         autoHeight: true,
//       },
//       768: {
//         slidesPerView: 2,
//         spaceBetween: 20,
//       },
//       992: {
//         slidesPerView: 3,
//         spaceBetween: 20,
//       },
//       1268: {
//         slidesPerView: 4,
//         spaceBetween: 30,
//       },
//     },
//     */
//     on: {

//     }
//   });
// }