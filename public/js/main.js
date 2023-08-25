
const compressAndDownload =()=>{
  options = {
    file: file,
  quality: range/100,
  mimeType:'image/jpeg',
  // maxWidth: 2000,
  // maxHeight: 2000,
  // width: 1000,
  // height: 1000,
  // minWidth: 500,
  // minHeight: 500,
  convertSize: Infinity,
  loose: true,
  redressOrientation: true,
  
  // Callback before compression
  beforeCompress: function () {
    console.log('Image size before compression:', file);
  },

  // Compression success callback
  success: function (result) {
    // showSizeAndQuality();
    console.log('Image size after compression:', result);
    compressedFileSize =result.size
    size.innerHTML = `${(compressedFileSize/1000).toFixed(0)} Kb`;
    let url = URL.createObjectURL(result);
    document.getElementById('download').addEventListener('click', () => {
      const downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.download = `compressed_${file.name}`;
      // document.body.appendChild(downloadLink);
      downloadLink.click();
      // document.body.removeChild(downloadLink);
    });
    downloadLink = null;
    return result;
  }
};
new ImageCompressor(options);
 }