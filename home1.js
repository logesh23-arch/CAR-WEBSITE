var container = document.getElementById("search-box")
var input = document.getElementById("sea-inp")
var navbar = document.getElementById("search-navbar")

navbar.addEventListener("click",function(){
    
    container.style.display="inline-block"
    input.style.display="inline-block"
})
var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });
  $(document).ready(function(){
    $(".preloader").fadeOut();
    })
