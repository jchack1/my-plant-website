const christmas = document.getElementById("cactus-christmas");
const itchy = document.getElementById("cactus-itchy-scratchy");
const baby = document.getElementById("cactus-baby");
const morris = document.getElementById("succulent-morris");

christmas.addEventListener("click", function(){
    document.getElementById("cactus-christmas-img").classList.toggle("visible");
    document.getElementById("cactus-christmas-text").classList.toggle("invisible");
})

itchy.addEventListener("click", function(){
    document.getElementById("cactus-itchy-scratchy-img").classList.toggle("visible");
    document.getElementById("cactus-itchy-scratchy-text").classList.toggle("invisible");
})

baby.addEventListener("click", function(){
    document.getElementById("cactus-baby-img").classList.toggle("visible");
    document.getElementById("cactus-baby-text").classList.toggle("invisible");
})

morris.addEventListener("click", function(){
    document.getElementById("succulent-morris-img").classList.toggle("visible");
    document.getElementById("succulent-morris-text").classList.toggle("invisible");
})