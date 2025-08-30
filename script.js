// filepath: c:\Users\LENOVO\profinish\index.html
document.addEventListener('DOMContentLoaded', () => {
  const slides = [
    {
      text: "We deliver durable, beautiful finishes for homes and businesses.",
      bg: "https://images.unsplash.com/photo-1558980664-10e7172c9a25?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder"
    },
    {
      text: "Expert color consultation and professional application.",
      bg: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder"
    },
    {
      text: "Protective, weather-resistant exterior coatings.",
      bg: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder"
    }
  ];

  let current = 0;
  const slideText = document.getElementById('slide-text');
  const slideshow = document.getElementById('slideshow');
  const slideTitle = document.querySelector('.slide-title');

  function showSlide(index){
    const s = slides[index];
    // fade out/in
    slideshow.style.opacity = 0;
    setTimeout(() => {
      slideshow.style.backgroundImage = `url('${s.bg}')`;
      slideText.textContent = s.text;
      // optional short subtitle change
      slideshow.style.opacity = 1;
    }, 250);
  }

  // preload images
  slides.forEach(s => { const i=new Image(); i.src=s.bg; });

  showSlide(current);
  const interval = setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 3500);

  // hamburger toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    // small helper: if open, ensure visible on mobile
    if(navLinks.style.display === 'flex' || navLinks.classList.contains('open')){
      navLinks.style.display = (navLinks.style.display === 'flex') ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
    }
  });

  // close mobile menu when clicking a link
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    if(window.innerWidth <= 820){
      navLinks.style.display = 'none';
      navLinks.classList.remove('open');
    }
  }));
});
