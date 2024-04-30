const nav = document.querySelector('.main-nav');

let lastScrollTop = 0;

document.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop || scrollTop <= 100) {
        // Show the navigation bar when scrolling down or near the top of the page
        nav.classList.add('visible');
    } else {
        // Hide the navigation bar when scrolling up
       
    }
    lastScrollTop = scrollTop;
});

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});




document.querySelectorAll('.section-header').forEach(header => {
    header.addEventListener('click', (e) => {
        // Check if the clicked element is the dropdown icon or the section title
        if (e.target.classList.contains('dropdown-icon') || e.target.tagName === 'H2') {
            header.parentElement.classList.toggle('active');
        }
    });
});





document.querySelectorAll('.project-dropdown h3').forEach(header => {
    header.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent the event from bubbling up to the parent section
        header.parentElement.classList.toggle('active');
    });
});






const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const rootElement = document.documentElement;

function handleScroll() {
    // Change '100' to the number of pixels scrolled down before showing the button
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if ((rootElement.scrollTop / scrollTotal) > 0.1) {
        // Show button with animation
        scrollToTopBtn.style.opacity = "1";
        scrollToTopBtn.style.visibility = "visible";
    } else {
        // Hide button with animation
        scrollToTopBtn.style.opacity = "0";
        scrollToTopBtn.style.visibility = "hidden";
    }
}

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);




document.querySelector('a[href="#about"]').addEventListener('click', () => {
    document.getElementById('about').classList.toggle('active');
});
document.querySelector('a[href="#portfolio"]').addEventListener('click', () => {
    document.getElementById('portfolio').classList.toggle('active');
});
document.querySelector('a[href="#contact"]').addEventListener('click', () => {
    document.getElementById('contact').classList.toggle('active');
});







document.getElementById('currentYear').textContent = new Date().getFullYear();

