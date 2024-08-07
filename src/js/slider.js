document.addEventListener('DOMContentLoaded', (event) => {
  let slideIndex = 1;
  showSlides(slideIndex);

  // Show slides automatically every 3 seconds
  let slideInterval = setInterval(() => {
    plusSlides(1);
  }, 3000); // 3000 milliseconds = 3 seconds

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

  // Attach event listeners for navigation
  document.querySelector('.prev').addEventListener('click', () => {
    plusSlides(-1);
    resetInterval(); // Reset interval on manual change
  });
  document.querySelector('.next').addEventListener('click', () => {
    plusSlides(1);
    resetInterval(); // Reset interval on manual change
  });

  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', () => {
      currentSlide(i + 1);
      resetInterval(); // Reset interval on manual change
    });
  }

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
      plusSlides(1);
    }, 9000); 
  }
});