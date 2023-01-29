const primaryHeader= document.querySelector(".primary-header");
const navToggle= document.querySelector(".mobile-nav-toggle");
const primaryNav= document.querySelector(".primary-navigation");



navToggle.addEventListener("click", () => {

    primaryNav.hasAttribute("data-visible") ? 
    
    navToggle.toggleAttribute("aria-expanded",false)
    :    
    navToggle.toggleAttribute("aria-expanded",true)
    ;
    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");


});