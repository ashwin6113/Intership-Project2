var uploadButton = document.getElementById("uploadButton");
var compressButton = document.getElementById("compressButton");
var blogButton = document.getElementById("blogButton");
var blogArrow = document.getElementById("blogArrow");
var compressArrow = document.getElementById("compressArrow");


uploadButton.addEventListener("click",() => {
    uploadButton.style.backgroundColor = "#60de29";
});

compressButton.addEventListener("click",() => {
    compressButton.style.backgroundColor = "#60de29";
    blogButton.style.backgroundColor = "#fff";
    compressArrow.style.display = "none";
    blogArrow.style.display = "inline-block";
});

blogButton.addEventListener("click",() => {
    blogButton.style.backgroundColor = "#60de29";
    compressButton.style.backgroundColor = "#fff";
    compressArrow.style.display = "inline-block";
    blogArrow.style.display = "none";
});