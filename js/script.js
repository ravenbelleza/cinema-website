// Banner Script
let currentIndex = 0;
const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

const firstSlideClone = slides[0].cloneNode(true);
slidesContainer.appendChild(firstSlideClone);

let slideInterval;

function showSlide(index) {
    currentIndex = index;
    if (currentIndex > totalSlides) {
        currentIndex = 0;
        slidesContainer.style.transition = 'none';
        slidesContainer.style.transform = `translateX(${-currentIndex * 100}%)`;
    }
    const sliderWidth = document.querySelector('.slider').offsetWidth;
    slidesContainer.style.transition = 'transform 0.5s ease';
    slidesContainer.style.transform = `translateX(${-currentIndex * sliderWidth}px)`;
}

function startAutoSlide() {
    slideInterval = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 9000);
}

function stopAutoSlide() {
    clearInterval(slideInterval);
}

document.querySelector('.prev').addEventListener('click', () => {
    stopAutoSlide();
    showSlide(currentIndex === 0 ? totalSlides : currentIndex - 1);
    setTimeout(startAutoSlide, 9000);
});

document.querySelector('.next').addEventListener('click', () => {
    stopAutoSlide();
    showSlide(currentIndex + 1);
    setTimeout(startAutoSlide, 9000);
});

slidesContainer.addEventListener('transitionend', () => {
    if (currentIndex === totalSlides) {
        currentIndex = 0;
        slidesContainer.style.transition = 'none';
        slidesContainer.style.transform = `translateX(${-currentIndex * 100}%)`;
    }
});
startAutoSlide();

// Modal Script
var modal = document.getElementById("login-modal");
var btn = document.getElementById("login-button");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Now Showing | Coming Soon Script
document.getElementById('now-showing-tab').addEventListener('click', function() {

  document.getElementById('now-showing').classList.add('active');
  document.getElementById('now-showing').classList.remove('inactive');
  document.getElementById('coming-soon').classList.add('inactive');
  document.getElementById('coming-soon').classList.remove('active');

  this.classList.add('active');
  this.classList.remove('inactive');
  document.getElementById('coming-soon-tab').classList.add('inactive');
  document.getElementById('coming-soon-tab').classList.remove('active');
});

document.getElementById('coming-soon-tab').addEventListener('click', function() {

  document.getElementById('coming-soon').classList.add('active');
  document.getElementById('coming-soon').classList.remove('inactive');
  document.getElementById('now-showing').classList.add('inactive');
  document.getElementById('now-showing').classList.remove('active');

  this.classList.add('active');
  this.classList.remove('inactive');
  document.getElementById('now-showing-tab').classList.add('inactive');
  document.getElementById('now-showing-tab').classList.remove('active');
});

