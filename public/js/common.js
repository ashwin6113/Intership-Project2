let typed = new Typed(".typing", {
    strings: ["Privacy", "Secure","&#127822;.png", "&#127812;.jpeg", "Safe", "&#127818;.pdf"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
    shuffle:true
});
function showSizeAndQuality(file){
let range =50;
quality1.innerHTML = `${range}%`;  
document.getElementById("input").addEventListener('input', () => {
    range = input.value;
    range = Number(range);
    range = range.toFixed(0); 
    quality1.innerHTML = `${range}%`;
    compressedFileSize = (fileSize*(range/100000)).toFixed(0);
    size.innerHTML = `${compressedFileSize} Kb`;
});
fileSize = file.size;
fileSize = (fileSize*(range/100000));
fileSize = fileSize.toFixed(0);
size.innerHTML = fileSize + "Kb";
}
document.getElementById('files').addEventListener('change', function (event) {
  if (fileInput.files.length === 0) {
    alert('Please select an image.');
  }
  file = fileInput.files[0];
 showSizeAndQuality(file);
 fileSize =file.size;
  compressAndDownload(file);
  beforeCompress.style.display = "none";
  afterCompress.style.display = "block";
  console.log(compressedimage.size);
});
uploadButton.addEventListener("click",() => {
  uploadButton.style.backgroundColor = "#60de29";
});