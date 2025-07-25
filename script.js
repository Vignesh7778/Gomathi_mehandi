// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800, // animation duration in milliseconds
        once: true,    // whether animation should happen only once - while scrolling down
        offset: 50,    // offset (in px) from the original trigger point
    });
});

// Optional: Active Nav Link Highlighter
// This part is useful if you are not using a static site generator
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const currentURL = window.location.href;

    navLinks.forEach(link => {
        if (link.href === currentURL) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});