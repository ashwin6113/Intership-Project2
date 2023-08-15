uploadButton.addEventListener("click",() => {
    uploadButton.style.backgroundColor = "#60de29";
});

var darkMode = document.getElementById("darkMode");
darkMode.onclick = function(){
    document.body.classList.toggle("dark-theme");
}
document.getElementById('sun').addEventListener('click',() => {
moon.style.display = "block";
sun.style.display = "none";
linearColoring.style.display = "block";
});
document.getElementById('moon').addEventListener('click',() => {
moon.style.display = "none";
sun.style.display = "block";
linearColoring.style.display = "none";
})