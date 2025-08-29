
// filepath: c:\Users\LENOVO\profinish\index.html
const slides = [
  {
    text: "First paragraph goes here.",
    bg: "photos/home-deco.jpg"
  },
  {
    text: "Second paragraph with a new background.",
    bg: "photos/bg.jpg"
  },
  {
    text: "Third paragraph and another background.",
    bg: "photos/images.jpg"
  }
];

let current = 0;
const slideText = document.getElementById('slide-text');
const slideshow = document.getElementById('slideshow');

function showSlide(index) {
  slideText.textContent = slides[index].text;
  slideshow.style.backgroundImage = `url('${slides[index].bg}')`;
  slideshow.style.backgroundSize = "cover";
  slideshow.style.backgroundPosition = "center";
  slideshow.style.color = "white";
  slideshow.style.padding = "60px 20px";
  slideshow.style.borderRadius = "10px";
}

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 3000);

showSlide(current);
