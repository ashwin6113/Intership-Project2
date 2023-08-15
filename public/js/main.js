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
      compressedFileSize = compressedBlob.size;
      compressedFileSize = (compressedFileSize/1024);
      compressedFileSize = compressedFileSize.toFixed(0);
      size.innerHTML = compressedFileSize + "Kb";
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


// // Assuming you have an HTML input element with the ID "input-image"
// const inputElement = document.getElementById("files");

// // Assuming you have an HTML img element with the ID "compressed-image"
// const compressedImageElement = document.getElementById("compressed-image");

// // Instantiate the ImageCompressor class
// // var imageCompressor = new ImageCompressor();

// // // Set up an event listener for when the user selects an image
// // function  compressAndDownload(){
// // inputElement.addEventListener("change", function(event) {
// //     const selectedFile = event.target.files[0]; // Get the selected image file

// //     // Compress the selected image using the ImageCompressor class
// //     imageCompressor.compress(selectedFile, compressionSettings, function(compressedDataURL) {
// //         // Set the compressed image URL to the img element
// //         compressedImageElement.src = compressedDataURL;
// //     });
// // });
// // } 

// // Assuming you have included the ImageCompressor library script

// // Define the compressAndDownload function
// function compressAndDownload(imageFile) {
//     // Create an instance of the ImageCompressor class
//     const imageCompressor = new ImageCompressor();

//     // Compress the image using the ImageCompressor class
//     imageCompressor.compress(imageFile, compressionSettings, function(compressedDataURL) {
//         // Create a download link for the compressed image
//         const downloadLink = document.createElement("a");
//         downloadLink.href = compressedDataURL;
//         downloadLink.download = "compressed_image.jpg"; // Set the desired file name
//         downloadLink.click();
//     });
// }

// // Assuming you have an HTML input element with the ID "input-image"

// // Set up an event listener for when the user selects an image
// inputElement.addEventListener("change", function(event) {
//     const selectedFile = event.target.files[0]; // Get the selected image file

//     // Call the compressAndDownload function
//     compressAndDownload(selectedFile);
// });



// // Set up the compression settings
// const compressionSettings = {
//     toWidth: 800, // Desired width after compression
//     toHeight: 600, // Desired height after compression
//     mimeType: "image/jpeg", // Output image format
//     speed: "low", // Compression speed (low, medium, high)
//     mode: "strict", // Compression mode (strict, stretch)
//     quality: 0.8, // Output image quality (0.0 to 1.0)
// };