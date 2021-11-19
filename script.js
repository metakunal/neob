function menuToggle() {
    const toggleMenu = document.querySelector('.toggle');
    const section = document.querySelector('section');
    toggleMenu.classList.toggle('active');
    section.classList.toggle('active');
}

// function loaderFunc() {
//     preloader.style.display = 'none';
// }
window.addEventListener('load', () => {
    const preloader = document.getElementById('loading');
    preloader.classList.add('preload-finish')
})
