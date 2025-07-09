  document.getElementById("input-title").addEventListener("input", e => {
    document.getElementById("title").textContent = e.target.value;
  });
  document.getElementById("input-subtitle").addEventListener("input", e => {
    document.getElementById("subtitle").textContent = e.target.value;
  });
  document.getElementById("input-description").addEventListener("input", e => {
    document.getElementById("description").textContent = e.target.value;
  });
  document.getElementById("logo-upload").addEventListener("change", e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        document.getElementById("logo-img").src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });


  document.getElementById("download-card").addEventListener("click", e => {

    html2canvas(document.getElementById("card-preview")).then(canvas => {
      const link = document.createElement('a');
      link.download = 'insert.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  });

