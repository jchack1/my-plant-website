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

//shrubs and trees

document.querySelector("#tree-bentley-img").onclick = () => {

    document.querySelector("#tree-bentley-img").classList.toggle("visible");
    document.querySelector("#bentley-text").classList.toggle("invisible");
}

document.querySelector("#tree-mark-img").onclick = () => {

    document.querySelector("#tree-mark-img").classList.toggle("visible");
    document.querySelector("#mark-text").classList.toggle("invisible");
}

document.querySelector("#shrub-jasper-img").onclick = () => {

    document.querySelector("#shrub-jasper-img").classList.toggle("visible");
    document.querySelector("#jasper-text").classList.toggle("invisible");
}

    