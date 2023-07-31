uploadButton.addEventListener("click",() => {
    uploadButton.style.backgroundColor = "#60de29";
    window.showOpenFilePicker();
});

compressButton.addEventListener("click",() => {
    blogArrow.style.display = "inline-block";
    compressArrow.style.display = "none";
});

blogButton.addEventListener("click",() => {
       compressArrow.style.display = "inline-block";
    blogArrow.style.display = "none";
});