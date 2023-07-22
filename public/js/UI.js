var uploadButton = document.getElementById("uploadButton");
var compressButton = document.getElementById("compressButton");
var blogButton = document.getElementById("blogButton");

uploadButton.addEventListener("click",() => {
    uploadButton.style.backgroundColor = "#60de29";
});

compressButton.addEventListener("click",() => {
    compressButton.style.backgroundColor = "#60de29";
    blogButton.style.backgroundColor = "#fff";
});

blogButton.addEventListener("click",() => {
    blogButton.style.backgroundColor = "#60de29";
    compressButton.style.backgroundColor = "#fff";
});