var typed = new Typed(".typing", {
    strings: ["Privacy", "Secure","&#127822;.png", "&#127812;.jpeg", "Safe", "&#127818;.pdf"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
    shuffle:true
});

let range =45;
quality.innerHTML = `${range}%`;
document.getElementById("input").addEventListener('change', () => {
    range = input.value;
    range = Number(range);
    range = range.toFixed(0); 
    quality.innerHTML = `${range}%`;
});

document.getElementById('files').addEventListener('change', function (event) {
  compressAndDownload();
    beforeCompress.style.display = "none";
    afterCompress.style.display = "block";
  });

  const compressAndDownload = () => {
    const fileInput = document.getElementById('files');

    if (fileInput.files.length === 0) {
      alert('Please select an image.');
      return;
    }
    file = fileInput.files[0];
    console.log(file);
    console.log(file.size);
    size.innerHTML = `${file.size}`;
    const options = {
      quality: 0.7,
    };

    const imageCompressor = new ImageCompressor();
    
    imageCompressor.compress(file, options).then((result) => {
      const compressedImage = new File([result], { type: file.type });
      const url = URL.createObjectURL(compressedImage);

      const downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.download = `compressed_${file.name}`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }).catch((error) => {
      console.error('Error compressing the image:', error);
    });
  }
