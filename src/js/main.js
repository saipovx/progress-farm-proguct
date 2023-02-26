// Custom scripts

function bindModal(trigger, modal, close) {
  (trigger = document.querySelectorAll(trigger)),
    (modal = document.querySelector(modal)),
    (close = document.querySelector(close));

  const body = document.body;


  trigger.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "flex";
      body.classList.add("locked");
    });
  });



  close.addEventListener("click", () => {
    modal.style.display = "none";
    body.classList.remove("locked");
  });

  
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      body.classList.remove("locked");
    }
  });
}

// ПЕРВЫЙ аргумент - класс кнопки, при клике на которую будет открываться модальное окно.
// ВТОРОЙ аргумент - класс самого модального окна.
// ТРЕТИЙ аргумент - класс кнопки, при клике на которую будет закрываться модальное окно.
bindModal(".button", ".modal__wrapper", ".modal__block");

// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
        menu.classList.add('active')
        burger.classList.add('active-burger')
        body.classList.add('locked')
      } else {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
      if (window.innerWidth > 991.98) {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
  }
  burgerMenu()
  

  const swiper2 = new Swiper('.swiper__product', {
  

    pagination: {
      el: '.swiper-pagination2',
    },
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,

        breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  }


  });

  const swiper3 = new Swiper('.swiper__review', {
  
    pagination: {
      el: '.swiper-pagination3',
    },




    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,

        breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.3,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1.3,
      spaceBetween: 30
    },

    900: {
      slidesPerView: 2,
      spaceBetween: 30
    },
  }


  });

  const swiper4 = new Swiper('.swiper__meybi', {
  


    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,

    pagination: {
      el: '.swiper-pagination4',
    },






        breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    600: {
      slidesPerView: 3,
      spaceBetween: 30
    },

    900: {
      slidesPerView: 5,
      spaceBetween: 30
    },
  }


  });
