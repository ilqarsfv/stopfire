menuBox.addEventListener("click", function (e) {
  e.preventDefault();
  sideMenu.classList.add("active");
});

closeMenu.addEventListener("click", function () {
  sideMenu.classList.remove("active");
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
const scroll = document.getElementById("horizontalScroll");

scroll.addEventListener("wheel", (e) => {
  e.preventDefault();
  horizontalScroll.scrollLeft += e.deltaY * 5;
});