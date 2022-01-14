import { isMobile } from "./functions.js";



window.onload = function () {
    document.addEventListener('click', documentActions);

    function documentActions(e) {
        const targetElement = e.target;

        if(window.innerWidth > 768 && isMobile.any()) {
            if(targetElement.classList.contains('menu__arrow-svg')) {
                targetElement.closest('.menu__item').classList.toggle("_hover");
            } else if(document.querySelector("._hover")) {
                const clearHover =  document.querySelectorAll("._hover");
                clearHover.forEach((e) => {
                    e.classList.toggle("_hover");
                })
            }
        }
    }
}