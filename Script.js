document.addEventListener('DOMContentLoaded', () => {
    let visitorCount = localStorage.getItem('visitorCount') || 0;
    visitorCount++;
    localStorage.setItem('visitorCount', visitorCount);
    document.getElementById('visitor-count').innerText = visitorCount;
});

// Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Initialize Slider
setInterval(nextSlide, 3000); // Change slide every 3 seconds
showSlide(currentSlide);

// Scroll to Section Smoothly
const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = document.querySelector(link.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Announcement Text Color Animation
const announcement = document.querySelector('.announcement marquee');

function changeAnnouncementColor() {
    const colors = ['#ff5733', '#33c3ff', '#33ff57', '#ff33c3'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    announcement.style.color = randomColor;
}

// Change announcement color every 2 seconds
setInterval(changeAnnouncementColor, 2000);
