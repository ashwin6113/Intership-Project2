const compressAndDownload = async() => {
    const fileInput = document.getElementById('files');

    if (fileInput.files.length === 0) {
      alert('Please select an image.');
      return;
    }
    const file = fileInput.files[0];

    try {
      const compressedBlob = await compressImage(file, options);
      const url = URL.createObjectURL(compressedBlob);
      showSizeAndQuality(file);
      console.log(file.size);
      console.log(compressedFileSize);
      document.getElementById('download').addEventListener('click', () => {
      const downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.download = `compressed_${file.name}`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
    } catch (error) { 
      console.error('Error compressing the image:', error);
    }
  }

  function compressImage(file, quality) {
    return new Promise((resolve, reject) => {
      const image = new Image();

      image.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        let width = image.width;
        let height = image.height;

        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(image, 0, 0, width, height);

        canvas.toBlob((blob) => {
          resolve(blob);
        }, file.type, quality);
      };

      image.onerror = (error) => {
        reject(error);
      };

      image.src = URL.createObjectURL(file);
      console.log("Image Compressed");
    });
  }