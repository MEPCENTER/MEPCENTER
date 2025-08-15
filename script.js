console.log("Website Loaded Successfully");
document.addEventListener("DOMContentLoaded", function () {
  const previewArea = document.getElementById("previewArea");
  const previewImage = document.getElementById("previewImage");
  const previewDesc = document.getElementById("previewDesc");

  document.querySelectorAll(".thumb-box").forEach(box => {
    box.addEventListener("click", function () {
      const img = this.querySelector("img");
      previewImage.src = img.dataset.full;
      previewDesc.innerHTML = img.dataset.desc;
      previewArea.classList.remove("d-none");
      previewArea.scrollIntoView({ behavior: "smooth" });
    });
  });
});

