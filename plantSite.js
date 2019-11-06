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

// document.querySelector("#tree-bentley-img").onclick = () => {

//     document.querySelector("#tree-bentley-img").classList.toggle("visible");
//     document.querySelector("#bentley-text").classList.toggle("invisible");
// }

// document.querySelector("#tree-mark-img").onclick = () => {

//     document.querySelector("#tree-mark-img").classList.toggle("visible");
//     document.querySelector("#mark-text").classList.toggle("invisible");
// }

// document.querySelector("#shrub-jasper-img").onclick = () => {
//     console.log("hi");
//     document.querySelector("#shrub-jasper-img").classList.toggle("visible");
//     document.querySelector("#jasper-text").classList.toggle("invisible");
// }


// //succulents and cacti

// const christmas = document.getElementById("cactus-christmas-img");

// christmas.addEventListener("click", function() {
//     console.log("hi");
//     document.getElementById("cactus-christmas-img").classList.toggle("visible");
//     document.getElementById("#cactus-christmas-text").classList.toggle("invisible");
// })
    


// document.querySelector("#cactus-itchy-scratchy-img").onclick = () => {

//     document.querySelector("#cactus-itchy-scratchy-img").classList.toggle("visible");
//     document.querySelector("#cactus-itchy-scratchy-text").classList.toggle("invisible");
// }

// document.querySelector("#cactus-baby-img").onclick = () => {

//     document.querySelector("#cactus-baby-img").classList.toggle("visible");
//     document.querySelector("#cactus-baby-text").classList.toggle("invisible");
// }

// document.querySelector("#succulent-morris-img").onclick = () => {

//     document.querySelector("#succulent-morris-img").classList.toggle("visible");
//     document.querySelector("#succulent-morris-text").classList.toggle("invisible");
// }

    

// const christmas = document.getElementById("cactus-christmas");
// const itchy = document.getElementById("cactus-itchy-scratchy");
// const baby = document.getElementById("cactus-baby");
// const morris = document.getElementById("succulent-morris");

// christmas.addEventListener("click", function(){
//     document.getElementById("cactus-christmas-img").classList.toggle("visible");
//     document.getElementById("cactus-christmas-text").classList.toggle("invisible");
// })


// const bentley = document.getElementById("tree-bentley");


// bentley.addEventListener("click", function(){
//     document.getElementById("tree-bentley-img").classList.toggle("visible");
//     document.getElementById("bentley-text").classList.toggle("invisible");
// })