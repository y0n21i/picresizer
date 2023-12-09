document.getElementById('image-input').addEventListener('change', handleFiles, false);

function handleFiles(event) {
  const files = event.target.files;
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';

  Array.from(files).forEach(file => {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = new Image();
      img.src = e.target.result;
      img.onload = function() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width / 2;
        canvas.height = img.height / 2;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const dataURL = canvas.toDataURL('image/jpeg');
        const outputImg = document.createElement('img');
        outputImg.src = dataURL;
        gallery.appendChild(outputImg);
      };
    };
    reader.readAsDataURL(file);
  });
}
