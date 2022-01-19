import { isMobile } from "./functions.js";



window.onload = function () {
    document.addEventListener('click', documentActions);

    function documentActions(e) {
        const targetElement = e.target;

        if(targetElement.classList.contains('menu__arrow-svg')) {
            targetElement.closest('.menu__item').classList.toggle("_hover");
        } else if(targetElement.classList.contains('menu-icon')) {
            const menuIcons = document.querySelectorAll('.menu-icon');
            const menuBody = document.querySelector('.menu__body');

            menuIcons[0].classList.toggle("menu-open");
            menuIcons[1].classList.toggle("menu-close");
            menuBody.classList.toggle("_active");
        } 
        else if(document.querySelector("._hover")) {
            const clearHover =  document.querySelectorAll("._hover");
            clearHover.forEach((e) => {
                e.classList.toggle("_hover");
            })
        }
    }
}

document.querySelectorAll('.conteyner a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
 
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});