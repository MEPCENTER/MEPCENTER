document.addEventListener("DOMContentLoaded", function () {
    console.log("MEP Center Engine Loaded");

    // --- 1. LOGIKA DARK MODE ---
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');

    // Cek penyimpanan browser (localStorage)
    const currentTheme = localStorage.getItem('theme');

    // Default ke Dark Mode jika belum pernah pilih
    if (currentTheme === null || currentTheme === 'dark') {
        body.classList.add('dark-mode');
        updateIcon(true);
    } else {
        body.classList.remove('dark-mode');
        updateIcon(false);
    }

    // Fungsi klik tombol
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            let isDark = body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            updateIcon(isDark);
        });
    }

    function updateIcon(isDark) {
        if (!themeIcon) return;
        if (isDark) {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            if (themeText) themeText.innerText = "Mode Siang";
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            if (themeText) themeText.innerText = "Mode Malam";
        }
    }

    // --- 2. LOGIKA GALLERY PREVIEW ---
    const previewArea = document.getElementById("previewArea");
    const previewImage = document.getElementById("previewImage");
    const previewDesc = document.getElementById("previewDesc");

    document.querySelectorAll(".thumb-box").forEach(box => {
        box.addEventListener("click", function () {
            const img = this.querySelector("img");
            if (previewImage && previewDesc && previewArea) {
                previewImage.src = img.dataset.full;
                previewDesc.innerHTML = img.dataset.desc;
                previewArea.classList.remove("d-none");
                previewArea.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        });
    });
});
