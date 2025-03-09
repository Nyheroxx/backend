window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
})

function toggleMenu() {
    const navLinks = document.querySelector('.nav_links');
    navLinks.classList.toggle('active');
}
