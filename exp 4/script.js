let images = document.querySelectorAll(".gallery img");
let slider = document.getElementById("slider");
let slideImg = document.getElementById("slideImg");
let current = 0;

function openSlide(index) {
    slider.style.display = "flex";
    slideImg.src = images[index].src;
    current = index;
}

function closeSlide() {
    slider.style.display = "none";
}

function changeSlide(step) {
    current = current + step;

    if(current >= images.length) {
        current = 0;
    }

    if(current < 0) {
        current = images.length;
    }

    slideImg.src = images[current].src;
}