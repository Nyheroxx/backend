window.addEventListener("scroll", function() {
    // Cihazın ekran boyutuna göre işlem yap
    if (window.innerWidth > 768) {  // Mobil ve tablet dışı cihazlarda
        var benkimim = document.querySelector(".benkimim");

        if (window.scrollY > 100) {  // Yüksekliği biraz artır
            benkimim.classList.add("sticky");
        } else {
            benkimim.classList.remove("sticky");
        }
    }
});

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
})



function toggleMenu() {
    const navLinks = document.querySelector('.nav_links');
    navLinks.classList.toggle('active');
}
