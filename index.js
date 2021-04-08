// window.onload = function() {
//   w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
//   var targetWidth = 960;
//   if (w > targetWidth) {
//
//   }
//     else {
//       const header = document.querySelector(".hide-text");
//       const projectList = document.querySelector(".my-work-col1");
//       const sectionOne = document.querySelector(".about-me");
//
//
//
//       const sectionOneOptions = {
//         rootMargin: "0px 0px 0px 0px"
//       };
//
//       const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
//           entries.forEach(entry => {
//             if (!entry.isIntersecting) {
//               header.classList.add("test");
//               projectList.classList.add("ul-color")
//             } else {
//               header.classList.remove("test");
//               projectList.classList.remove("ul-color")
//             }
//           });
//         },
//         sectionOneOptions);
//
//       sectionOneObserver.observe(sectionOne);
//     }
//   };

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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
