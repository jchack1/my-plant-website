const hamburgerMenu = document.querySelector("#hamburger-menu");
const mobileMenu = document.querySelector("#nav");
const closeMenu = document.querySelector("#close-menu");

hamburgerMenu.addEventListener("click", function(){
    mobileMenu.className = "menu-open";
})

closeMenu.addEventListener("click", function(){
    mobileMenu.className = "menu-close";
})


//plant stories on click