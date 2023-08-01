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
    const file = event.target.files[0];
    console.log(file);
  });