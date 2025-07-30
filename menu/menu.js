document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".scroll-container");

  if (container) {
    container.addEventListener(
      "wheel",
      function (e) {
        if (e.deltaY !== 0) {
          e.preventDefault();
          container.scrollLeft += e.deltaY;
        }
      },
      { passive: false }
    );
  }
});
