const myCarousel = document.getElementById('carouselExampleCaptions');
const next = document.getElementById('next');
const prev = document.querySelector('.carousel-control-prev');

function checkBtns(currentIndex) {
  const totalSlides = myCarousel.querySelectorAll('.carousel-item').length;
  (currentIndex === 0) ? prev.style.display = 'none' : prev.style.display = 'block';
  (currentIndex === totalSlides - 1) ? next.style.display = 'none' : next.style.display = 'block';
};

myCarousel.addEventListener('slide.bs.carousel', function(event) {
  const currentIndex = event.to;
  checkBtns(currentIndex);
});

const activeSlide = myCarousel.querySelector('.carousel-item.active');
const activeIndex = Array.from(myCarousel.querySelectorAll('.carousel-item')).indexOf(activeSlide);
checkBtns(activeIndex);

const carousel = new bootstrap.Carousel(myCarousel, {
    loop: false,
});



