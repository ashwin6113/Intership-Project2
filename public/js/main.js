 
 const compressAndDownload =(file)=>{
  options = {
  file: file,
  quality: 0.2,
  mimeType:'image/jpeg',
  maxWidth: 2000,
  maxHeight: 2000,
  width: 1000,
  height: 1000,
  minWidth: 500,
  minHeight: 500,
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
    console.log('mime type:', result.type);
    console.log('Actual compression ratio:', ((file.size-result.size) / file.size * 100).toFixed(2) +'%');
  return result;
  }
};
new ImageCompressor(options);
 }