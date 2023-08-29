uploadButton.addEventListener("click",() => {
  uploadButton.style.backgroundColor = "#60de29";
});

let typed = new Typed(".typing", {
    strings: ["Privacy", "Secure","&#127822;.png", "&#127812;.jpeg", "Safe", "&#127818;.pdf"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
    shuffle:true
});

const showSizeAndQuality = () =>{
range =50;
quality1.innerHTML = `${range}%`;  
compressedFileSize = Number(compressedFileSize);
compressedFileSize = (fileSize*(range/100000)).toFixed(0);
size.innerHTML = `${compressedFileSize} Kb`;
compressedimage = [];
document.getElementById("input").addEventListener('input', () => {
    range = input.value;
    range = Number(range);
    range = range.toFixed(0); 
    quality1.innerHTML = `${range}%`;
    compressedFileSize = (fileSize*(range/100000)).toFixed(0);
    size.innerHTML = `${compressedFileSize} Kb`;
  });
};

document.getElementById('files').addEventListener('change', function () {
  if (fileInput.files.length === 0) {
    alert('Please select an image.');
  }
  file = fileInput.files[0];
  fileSize =file.size;
  showSizeAndQuality();
  compressAndDownload();
  beforeCompress.style.display = "none";
  afterCompress.style.display = "block";
});

document.getElementById('input').addEventListener('change', function () {
  compressAndDownload();
  compressedimage = [];
});