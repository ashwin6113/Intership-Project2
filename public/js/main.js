
const compressAndDownload =(file)=>{
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
  beforeCompress: function (result) {
    console.log('Image size before compression:', result.size);
    console.log('mime type:', result.type);
  },

  // Compression success callback
  success: function (result) {
    console.log('result:', result)
    console.log('Image size after compression:', result.size);
    size.innerHTML = `${(result.size/1000).toFixed(2)} Kb`;
    console.log('mime type:', result.type);
    console.log('Actual compression ratio:', ((file.size-result.size) / file.size * 100).toFixed(2) +'%');
    let url = URL.createObjectURL(result);
    console.log(url);
    document.getElementById('download').addEventListener('click', () => {
      const downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.download = `compressed_${file.name}`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
    return result;
  }
};
new ImageCompressor(options);
 }