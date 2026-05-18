const relatedSwiper = new Swiper('.related-swiper', {
   slidesPerView: 3,
   spaceBetween: 40,
   navigation: {
     prevEl: '.related-swiper__prev',
     nextEl: '.related-swiper__next',
   },
   breakpoints: {
     0: {
       slidesPerView: 1.2,
       spaceBetween: 20,
     },
     600: {
       slidesPerView: 2,
       spaceBetween: 24,
     },
     1024: {
       slidesPerView: 3,
       spaceBetween: 40,
     },
   },
 });
 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let mybutton = document.getElementById("myBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
}