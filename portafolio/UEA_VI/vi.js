const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
      dots[i].classList.add("active");

      // Si el slide tiene video, reproducirlo
      const video = slide.querySelector("video");
      if (video) {
        video.play();
      }
    } else {
      // Si no es el slide activo, pausar video si hay
      const video = slide.querySelector("video");
      if (video) {
        video.pause();
        // No resetear currentTime para evitar saltos
      }
    }
  });
  currentSlide = index;
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlide(i);
  });
});
