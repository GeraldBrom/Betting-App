// Swiper для Indian Premier League секции
const swiperIndian = new Swiper('.ipl-indian__slider', {
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
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 5
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 5
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 5
        }
    }
});

// Swiper для Cricket Betting секции
const swiperCricket = new Swiper('.cricket-betting__slider', {
    slidesPerView: 2.4,
    spaceBetween: 20,
    loop: false,
    grabCursor: true,
    
    navigation: {
        nextEl: '.cricket-betting__btn--next',
        prevEl: '.cricket-betting__btn--prev',
    },
    
    breakpoints: {
        320: {
            slidesPerView: 'auto',
            spaceBetween: 20
        },
        768: {
            slidesPerView: 1.5,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 2.2,
            spaceBetween: 20
        },
        1440: {
            slidesPerView: 2.4,
            spaceBetween: 20
        }
    }
});

// Swiper для Reviews секции
const swiperReviews = new Swiper('.reviews__slider', {
    slidesPerView: 1.15,
    spaceBetween: 24,
    loop: false,
    grabCursor: true,
    
    navigation: {
        nextEl: '.reviews__btn--next',
        prevEl: '.reviews__btn--prev',
    },
    
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 1.1,
            spaceBetween: 24
        },
        1024: {
            slidesPerView: 1.12,
            spaceBetween: 24
        },
        1440: {
            slidesPerView: 1.15,
            spaceBetween: 24
        }
    }
});

// Аккордеон
document.addEventListener('DOMContentLoaded', function() {
    const accordionButtons = document.querySelectorAll('.accordions__button');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const accordionItem = this.closest('.accordions__item');
            const isActive = accordionItem.classList.contains('active');
            
            // Закрываем все аккордеоны
            document.querySelectorAll('.accordions__item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Если текущий был закрыт, открываем его
            if (!isActive) {
                accordionItem.classList.add('active');
            }
        });
    });
});

// Бургер-меню
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.header__burger');
    const mobileMenu = document.querySelector('.header__mobile-menu');
    const overlay = document.querySelector('.header__overlay');
    const mobileLinks = document.querySelectorAll('.header__mobile-link');
    const body = document.body;

    // Функция для открытия/закрытия меню
    function toggleMenu() {
        burger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Блокируем прокрутку body при открытом меню
        if (mobileMenu.classList.contains('active')) {
            body.style.overflow = 'hidden';
            burger.setAttribute('aria-expanded', 'true');
        } else {
            body.style.overflow = '';
            burger.setAttribute('aria-expanded', 'false');
        }
    }

    // Открытие/закрытие по клику на бургер
    if (burger) {
        burger.addEventListener('click', toggleMenu);
    }

    // Закрытие по клику на оверлей
    if (overlay) {
        overlay.addEventListener('click', toggleMenu);
    }

    // Закрытие по клику на ссылку в меню
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            toggleMenu();
        });
    });

    // Закрытие по нажатию Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
});