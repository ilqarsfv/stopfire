// const menuBox = document.querySelector(".menu-box");
// const sideMenu = document.getElementById("sideMenu");
// const closeMenu = document.getElementById("closeMenu");

// if (menuBox && sideMenu) {
//   menuBox.addEventListener("click", function (e) {
//     e.preventDefault();
//     sideMenu.classList.add("active");
//   });
// }

// if (closeMenu && sideMenu) {
//   closeMenu.addEventListener("click", function () {
//     sideMenu.classList.remove("active");
//   });
// }

// const submenuTriggers = document.querySelectorAll(".submenu-trigger");

// submenuTriggers.forEach((trigger) => {
//   trigger.addEventListener("click", function () {

//     const targetId = this.dataset.target;
//     const submenu = document.getElementById(targetId);
//     const isOpen = this.classList.contains("active");

//     submenuTriggers.forEach((item) => {

//       item.classList.remove("active");

//       const itemSubmenu =
//         document.getElementById(item.dataset.target);

//       if (itemSubmenu) {
//         itemSubmenu.classList.remove("active");
//       }

//     });

//     if (!isOpen && submenu) {
//       this.classList.add("active");
//       submenu.classList.add("active");
//     }

//   });
// });

// const scrollTopBtn = document.querySelector(".scroll-top");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 100) {
//     scrollTopBtn.classList.add("active");
//   } else {
//     scrollTopBtn.classList.remove("active");
//   }
// });

// scrollTopBtn.addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// });