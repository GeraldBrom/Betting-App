const swiper = new Swiper('.ipl-indian__slider', {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: false,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletActiveClass: 'ipl-indian--active',
        bulletClass: "ipl-indian__dot",
        bulletElement: 'button'
    }
})