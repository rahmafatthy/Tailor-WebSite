
window.onscroll = function () {
  console.log(window.scrollY);
};

var preloader = document.getElementsByClassName("preloader")[0];
window.onload = function () {

  setTimeout(function () {
    preloader.style.transition = "opacity .3s ease"
    preloader.style.opacity = "0"
    setTimeout(function () {
      preloader.style.display = "none"

    }, 400)
  }, 1000)
}
var header = document.getElementsByTagName("header")[0];
var offers = document.getElementsByClassName("offer");
var ServiceCards = document.getElementsByClassName("Services-card");
window.addEventListener("scroll", function () {
  if (window.scrollY > 420) {
    header.classList.add("fixed-bar");
  } else {
    header.classList.remove("fixed-bar");
  }
  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight - 100;
  }
  for (let i = 0; i < offers.length; i++) {
    if (isInViewport(offers[i])) {
      offers[i].style.animation = `fadeInUp 1.5s ${i * 0.4}s forwards`;
    }
  }
  for (let i = 0; i < ServiceCards.length; i++) {
    if (isInViewport(ServiceCards[i])) {
      ServiceCards[i].style.animation = `fadeInUp 1.5s ${i * 0.4}s forwards`;
    }
  }
});
// ==============Video=========
document.addEventListener("DOMContentLoaded", function () {
  var playButton = document.getElementById("playButton");
  var video = document.getElementById("video");

  playButton.addEventListener("click", function () {
      playButton.style.display = "none";
      video.play();
  });

  video.addEventListener("click", function () {
      if (video.paused) {
          video.play();
      } else {
          video.pause();
      }
  });
});
const feedbacks = document.getElementsByClassName("feedback");
const container = document.querySelector('.feedback-container');
let currentIndex = 0;

// Set initial positions
function initializeSlides() {
  const containerWidth = container.offsetWidth;
  
  for (let i = 0; i < feedbacks.length; i++) {
    feedbacks[i].style.transform = `translateX(${containerWidth * i}px)`;
  }
}

initializeSlides();

// Handle window resize
window.addEventListener('resize', initializeSlides);

// Navigation controls
document.querySelector('.right').addEventListener('click', () => {
  if (currentIndex >= feedbacks.length - 1) return;
  currentIndex++;
  moveSlides();
});

document.querySelector('.left').addEventListener('click', () => {
  if (currentIndex <= 0) return;
  currentIndex--;
  moveSlides();
});

function moveSlides() {
  const containerWidth = container.offsetWidth;
  for (let i = 0; i < feedbacks.length; i++) {
    feedbacks[i].style.transform = `translateX(-${containerWidth * currentIndex}px)`;
  }
}