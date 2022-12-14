AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

//change navbar background color
const navbar = document.querySelector(`.navbar-index`);
//desktop
document.addEventListener('scroll', () => {
  if (window.pageYOffset > 0) {
    navbar.classList.add('bg-primary');
    navbar.classList.remove('bg-transparent');
  } else {
    navbar.classList.add('bg-transparent');
    navbar.classList.remove('bg-primary');
  }
});
//mobile
const navbarToggler = document.querySelector(`.navbar-toggler`);
navbarToggler.addEventListener('click', (e) => {
  e.preventDefault();
  navbar.classList.add('bg-primary');
  navbar.classList.remove('bg-transparent');
});
// navbarToggler.addEventListener('click', (e) => {
//   if (navbarToggler.getAttribute('aria-expanded') == true) {
//     navbar.classList.add('bg-primary');
//     navbar.classList.remove('bg-transparent');
//   } else {
//     navbar.classList.add('bg-transparent');
//     navbar.classList.remove('bg-primary');
//   }
// });

// ???????????? swiper
function commentSwiper() {
  const swiper = new Swiper('#comment-swiper', {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2000,
    },
    slidesPerView: 1,
    /* ???????????? */
    breakpoints: {
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
    spaceBetween: 24,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}
commentSwiper();

// ???????????? swiper
function searchSwiper() {
  const swiper = new Swiper('#search-swiper', {
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 4000,
    },
    slidesPerView: 1,
    /* ???????????? */
    breakpoints: {
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
    spaceBetween: 24,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}
searchSwiper();

//????????????
$(document).ready(function () {
  $('.fa').click(function (e) {
    e.preventDefault();
    //???????????????
    $(this).find('h3').toggleClass('mb-4 text-secondary fw-bold');
    $(this).find('.fa-plus').toggleClass('d-none');
    $(this).find('.fa-minus').toggleClass('d-none');
    // $(this).siblings('p').slideToggle();
    $(this).siblings('p').toggleClass('d-none');
    //?????????????????????????????????
    // $(this).parent().siblings().find('h3').removeClass('mb-6 text-secondary fw-bold');
    // $(this).parent().siblings().find('.fa-minus').addClass('d-none');
    // $(this).parent().siblings().find('.fa-plus').removeClass('d-none');
    // $(this).parent().siblings().find('p').slideUp();
    // $(this).parent().siblings().find('p').removeClass('d-none');
  });
});

// bookmark ??????
$(document).ready(() => {
  $('.bookmark-btn').click(function (e) {
    e.preventDefault();
    $('.bookmark-icon').toggleClass('fa-regular');
  });
});
//????????????toggle
function showPassword() {
  var x = document.getElementById('password');
  if (x.type === 'password') {
    x.type = 'text';
  } else {
    x.type = 'password';
  }
  // toggle the icon
  document.getElementById('eye-icon').classList.toggle('fa-eye-slash');
}

//??????????????????
const fileBtn = document.querySelector(`#fileBtn`);
const fileInput = document.querySelector(`#fileInput`);
fileBtn.addEventListener('click', fileUpload);
function fileUpload(e) {
  e.preventDefault();
  fileInput.click();
}

//????????????-??????switch
// const selectAllBtn = document.querySelector(`#select-all`);
// const selectItem = document.querySelectorAll(`input[name="bookstore-filter"]`);
// console.log(selectItem);
// console.log('123');
// selectAllBtn.addEventListener('click', selectAll);
// function selectAll(e) {
//   selectItem.setAttribute.toggle('checked', 'checked');
//   console.log('1');
// }
// console.log(selectAll);
