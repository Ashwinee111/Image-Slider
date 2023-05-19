let imageContainer = document.querySelector(".image-container");
let img = document.querySelectorAll("img");
let next = document.querySelector(".next");
let pre = document.querySelector(".pre");
let count = 0;

img[count].classList.add("active");

next.addEventListener("click", () => {
  img[count].classList.remove("active");

  if (count === img.length - 1) {
    count = 0;
    img[count].classList.add("active");
  } else {
    count++;
    img[count].classList.add("active");
    imageContainer.style.transform = `translateX(-${img[count] * 100}%)`;
  }
});

pre.addEventListener("click", () => {
  img[count].classList.remove("active");

  if (count === 0) {
    count = img.length - 1;
    img[count].classList.add("active");
  } else {
    count--;
    img[count].classList.add("active");
    imageContainer.style.transform = `translateX(-${img[count] * 100}%)`;
  }
});
