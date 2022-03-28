for (i = 0; i < document.images.length; i++) {
  if (document.images[i].draggable === "") {
    // images that have "draggable" Attribute and its Value is Empty
    document.images[i].setAttribute("draggable", "false");
  } else {
    // Images Does not Have "draggable" Attribute
    document.images[i].setAttribute("draggable", "false");
  }
}

let hamburger = document.querySelector(".hamburger");
let slide = document.querySelector(".slide");
let overlay = document.querySelector(".black-overlay");

hamburger.addEventListener("click", function () {
  slide.style.right = "0";
  overlay.style.top = "0";
  hamburger.classList.toggle("active");
  if (hamburger.classList.contains("active")) {
    slide.style.right = "0";
    overlay.style.top = "0";
  } else {
    slide.style.right = "-100%";
    overlay.style.top = "-100vh";
  }
});

overlay.addEventListener("click", function () {
  slide.style.right = "-100%";
  overlay.style.top = "-100vh";
});
