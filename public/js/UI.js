var uploadButton = document.getElementById("uploadButton");
var compressButton = document.getElementById("compressButton");
var blogButton = document.getElementById("blogButton");
var blogArrow = document.getElementById("blogArrow");
var compressArrow = document.getElementById("compressArrow");


uploadButton.addEventListener("click",() => {
    uploadButton.style.backgroundColor = "#60de29";
});

compressButton.addEventListener("click",() => {
    blogArrow.style.display = "inline-block";
    compressArrow.style.display = "none";
});

blogButton.addEventListener("click",() => {
       compressArrow.style.display = "inline-block";
    blogArrow.style.display = "none";
});