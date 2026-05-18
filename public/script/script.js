const menuBoxes = document.querySelectorAll(".menu-box");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");

menuBoxes.forEach((menuBox) => {
  menuBox.addEventListener("click", function (e) {
    e.preventDefault();
    sideMenu.classList.add("active");
    document.body.classList.add("no-scroll");
  });
});

closeMenu.addEventListener("click", function () {
  sideMenu.classList.remove("active");
  document.body.classList.remove("no-scroll");
});

const submenuTriggers = document.querySelectorAll(".submenu-trigger");

submenuTriggers.forEach((trigger) => {
  trigger.addEventListener("click", function () {
    const targetId = this.dataset.target;
    const submenu = document.getElementById(targetId);
    const isOpen = this.classList.contains("active");

    // əvvəl hamısını bağla
    submenuTriggers.forEach((item) => {
      item.classList.remove("active");

      const itemSubmenu = document.getElementById(item.dataset.target);
      if (itemSubmenu) {
        itemSubmenu.classList.remove("active");
      }
    });

    // əgər kliklənən bağlı idisə, aç
    if (!isOpen) {
      this.classList.add("active");
      submenu.classList.add("active");
    }
  });
});

// Horizontal scroll
const horizontalScroll = document.getElementById("horizontalScroll");

let targetScrollLeft = 0;
let currentScrollLeft = 0;
let isAnimating = false;

if (horizontalScroll) {
  targetScrollLeft = horizontalScroll.scrollLeft;
  currentScrollLeft = horizontalScroll.scrollLeft;

  horizontalScroll.addEventListener(
    "wheel",
    function (e) {
      // On mobile, don't intercept wheel events
      if (window.innerWidth <= 960) {
        return;
      }

      e.preventDefault();

      const isTouchpad =
        Math.abs(e.deltaY) < 50 &&
        Math.abs(e.deltaX) < 50;

      const delta =
        Math.abs(e.deltaY) > Math.abs(e.deltaX)
          ? e.deltaY
          : e.deltaX;

     const speed = isTouchpad ? 2.5 : 0.7;

      targetScrollLeft += delta * speed;

      const maxScroll =
        horizontalScroll.scrollWidth -
        horizontalScroll.clientWidth;

      targetScrollLeft = Math.max(
        0,
        Math.min(targetScrollLeft, maxScroll)
      );

      if (!isAnimating) {
        smoothScroll();
      }
    },
    { passive: false }
  );
}

function smoothScroll() {
  isAnimating = true;

  currentScrollLeft +=
    (targetScrollLeft - currentScrollLeft) * 0.18;

  horizontalScroll.scrollLeft = currentScrollLeft;

  // 🔥 BURANI ELAVE ET
  const footerImage = document.querySelector(".footer-image-side");

  if (footerImage) {
    const maxScroll =
      horizontalScroll.scrollWidth -
      horizontalScroll.clientWidth;

    if (currentScrollLeft >= maxScroll - 120) {
      footerImage.classList.add("show");
    } else {
      footerImage.classList.remove("show");
    }
  }

  if (
    Math.abs(targetScrollLeft - currentScrollLeft) > 0.5
  ) {
    requestAnimationFrame(smoothScroll);
  } else {
    horizontalScroll.scrollLeft = targetScrollLeft;
    currentScrollLeft = targetScrollLeft;
    isAnimating = false;
  }
}

/*/////////////////////////////////////
video play/pause
// ///////////////////////*/ 

const videoModal = document.getElementById("videoModal");
const closeVideo = document.getElementById("closeVideo");
const companyVideo = document.getElementById("companyVideo");

const openButtons = document.querySelectorAll(".js-open-video");

openButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    videoModal.classList.add("active");

    document.body.style.overflow = "hidden";

    companyVideo.currentTime = 0;

    companyVideo.play().catch(() => {});
  });
});

function closeModal() {
  videoModal.classList.remove("active");

  document.body.style.overflow = "";

  companyVideo.pause();
  companyVideo.currentTime = 0;
}

if (closeVideo) {
  closeVideo.addEventListener("click", closeModal);
}

if (videoModal) {
  videoModal.addEventListener("click", (e) => {
    if (e.target === videoModal) {
      closeModal();
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" &&
    videoModal.classList.contains("active")
  ) {
    closeModal();
  }
});


  // Scroll to top
  const reviewsSwiper = new Swiper(".reviews-swiper", {
  slidesPerView: window.innerWidth <= 960 ? 1 : 2,
  slidesPerGroup: 1,
  spaceBetween: 15,
  speed: 500,
  navigation: {
    nextEl: ".reviews-next",
    prevEl: ".reviews-prev",
    disabledClass: "swiper-button-disabled",
  },
});
if (window.innerWidth <= 960) {
  const logosSwiper = new Swiper(".logos-swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: false,
    spaceBetween: 0,
    speed: 500,
    navigation: {
      nextEl: ".logos-next",
      prevEl: ".logos-prev",
      disabledClass: "swiper-button-disabled",
    },
  });
}




//section 10
const projectsSwiper = new Swiper(".projects-swiper", {
  slidesPerView: window.innerWidth <= 960 ? 1.2 : 4,
  spaceBetween: window.innerWidth <= 960 ? 16 : 0,
  speed: 700,
  grabCursor: true,
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 16,
    },
    961: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});

const projectsSwiperEl = document.querySelector(".projects-swiper");

let projectsWheelLocked = false;

if (projectsSwiperEl && projectsSwiper) {
  projectsSwiperEl.addEventListener(
    "wheel",
    function (e) {
      e.preventDefault();
      e.stopPropagation();

      if (projectsWheelLocked) return;

      const delta =
        Math.abs(e.deltaY) > Math.abs(e.deltaX)
          ? e.deltaY
          : e.deltaX;

      if (Math.abs(delta) < 12) return;

      if (delta > 0) {
        projectsSwiper.slideNext();
      } else {
        projectsSwiper.slidePrev();
      }

      projectsWheelLocked = true;

      setTimeout(() => {
        projectsWheelLocked = false;
      }, 650);
    },
    { passive: false }
  );
}
//section 12
const articlesSwiper = new Swiper(".articles-swiper", {
  slidesPerView: 3,
  spaceBetween: 40,

  navigation: {
    nextEl: ".articles-next",
    prevEl: ".articles-prev",
  },
});




(function () {
  function initProdSlider(trackId, prevId, nextId) {
    const track = document.getElementById(trackId);
    const prevBtn = document.getElementById(prevId);
    const nextBtn = document.getElementById(nextId);

    if (!track || !prevBtn || !nextBtn) return;

    const imgs = track.querySelectorAll('img');
    const total = imgs.length;
    let current = 0;

    function isMobile() {
      return window.innerWidth <= 768;
    }

    function getShow() {
      return isMobile() ? 1 : 3;
    }

    function getSlideWidth() {
      const show = getShow();
      const gap = 20;
      const section = track.closest('.prod-slider-section');
      const wrapWidth = section ? section.offsetWidth : window.innerWidth;
      return (wrapWidth - gap * (show - 1)) / show;
    }

    function updateSizes() {
      const sw = getSlideWidth();
      imgs.forEach(img => {
        img.style.width = sw + 'px';
        img.style.flexShrink = '0';
      });
    }

    function updateButtons() {
      const show = getShow();
      prevBtn.disabled = current === 0;
      nextBtn.disabled = current >= total - show;
    }

    function goTo(index) {
      const sw = getSlideWidth();
      const gap = 20;
      track.style.transform = `translateX(-${index * (sw + gap)}px)`;
      current = index;
      updateButtons();
    }

    prevBtn.addEventListener('click', function () {
      if (current > 0) goTo(current - 1);
    });

    nextBtn.addEventListener('click', function () {
      const show = getShow();
      if (current < total - show) goTo(current + 1);
    });

    window.addEventListener('resize', function () {
      updateSizes();
      goTo(0);
    });

    // şəkillər yüklənəndən sonra ölçüləri hesabla
    window.addEventListener('load', function () {
      updateSizes();
      goTo(0);
    });

    // ehtiyat üçün qısa gecikmə ilə də çağır
    setTimeout(function () {
      updateSizes();
      goTo(0);
    }, 100);
  }

  initProdSlider('sliderTrack1', 'sliderPrev1', 'sliderNext1');
  initProdSlider('sliderTrack2', 'sliderPrev2', 'sliderNext2');
  initProdSlider('sliderTrack3', 'sliderPrev3', 'sliderNext3');
  initProdSlider('sliderTrack4', 'sliderPrev4', 'sliderNext4');
})();