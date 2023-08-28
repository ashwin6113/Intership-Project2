const compressAndDownload =()=>{
  options = {
    file: file,
  quality: range/100,
  mimeType:'image/jpeg',
  convertSize: Infinity,
  loose: true,
  redressOrientation: true,
  
  // Callback before compression
  beforeCompress: function () {
    console.log({files_before_comrpession : file});
  },

  // Compression success callback
  success: function (result) {
    compressedimage.push(result);
    console.log({files_after_comrpession : compressedimage});
    document.getElementById('download').addEventListener('click', () => {
      for (var i = 0; i < compressedimage.length; i++) {
        var file = compressedimage[i];
        let url = URL.createObjectURL(file);
      downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.download = `compressed_${file.name}`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      compressedimage = [];
      }
    });
    // return result;
  }
};
new ImageCompressor(options);
 }