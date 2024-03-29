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


//Якорь сайта
let anchor = document.querySelector('.arrow-top');

anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.documentElement.scrollIntoView({
        behavior: 'smooth',
    });
});

document.onscroll = () => {
    if (document.documentElement.scrollTop > 700 ) {
        anchor.style.display = "block";
    } else {
        anchor.style.display = "none";
    }
}; 