const bentley = document.getElementById("tree-bentley");
const mark = document.getElementById("tree-mark");
const jasper = document.getElementById("shrub-jasper");

bentley.addEventListener("click", function(){
    document.getElementById("tree-bentley-img").classList.toggle("visible");
    document.getElementById("bentley-text").classList.toggle("invisible");
})

mark.addEventListener("click", function(){
    document.getElementById("tree-mark-img").classList.toggle("visible");
    document.getElementById("mark-text").classList.toggle("invisible");
})

jasper.addEventListener("click", function(){
    document.getElementById("shrub-jasper-img").classList.toggle("visible");
    document.getElementById("jasper-text").classList.toggle("invisible");
})