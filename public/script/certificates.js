const sideMenu    = document.getElementById('sideMenu');
const openMenuBtn = document.getElementById('openMenu');
const closeMenuBtn= document.getElementById('closeMenu');
const overlay     = document.getElementById('menuOverlay');

function openMenu() {
    sideMenu.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}
    
    openMenuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openMenu();
    });
    
    closeMenuBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
    
    // ESC ilə bağlamaq
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });
    
    document.querySelectorAll('.submenu-trigger').forEach(trigger => {
        trigger.addEventListener('click', () => {
            const targetId = trigger.getAttribute('data-target');
            const submenu  = document.getElementById(targetId);
            
            document.querySelectorAll('.submenu.active').forEach(s => {
                if (s.id !== targetId) {
                    s.classList.remove('active');
                    s.previousElementSibling.classList.remove('active');
                }
            });
            
            trigger.classList.toggle('active');
            submenu.classList.toggle('active');
        });
    });
    
    