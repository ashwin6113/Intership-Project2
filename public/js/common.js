let typed = new Typed(".typing", {
    strings: ["Privacy", "Secure","&#127822;.png", "&#127812;.jpeg", "Safe", "&#127818;.pdf"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
    shuffle:true
});
function showSizeAndQuality(file){
let range =100;
quality1.innerHTML = `${range}%`;  
document.getElementById("input").addEventListener('input', () => {
    range = input.value;
    range = Number(range);
    range = range.toFixed(0); 
    quality1.innerHTML = `${range}%`;
    compressedFileSize = (fileSize*(range/100)).toFixed(1);
    size.innerHTML = `${compressedFileSize} Kb`;
});
fileSize = file.size;
fileSize = (fileSize/1000);
fileSize = fileSize.toFixed(1);
size.innerHTML = fileSize + "Kb";
}
document.getElementById('files').addEventListener('change', function (event) {
  if (fileInput.files.length === 0) {
    alert('Please select an image.');
  }
  file = fileInput.files[0];
 showSizeAndQuality(file);
 filesize =file.size;
  compressedimage = compressAndDownload(file);
  beforeCompress.style.display = "none";
  afterCompress.style.display = "block";
  console.log(compressedimage.size);
});

  let darkMode = document.getElementById("darkMode");
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