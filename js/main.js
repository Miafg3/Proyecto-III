const mainImage = document.getElementById("main-image");
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
        mainImage.src = thumb.src;

        thumbs.forEach((item) => {
            item.classList.remove("active-thumb");
        });

        thumb.classList.add("active-thumb");
    });
});

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
});

prevBtn.addEventListener("click", () => {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
});

const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modal-image");
const closeModal = document.querySelector(".close-modal");
const gridImages = document.querySelectorAll(".grid-img");

gridImages.forEach((img) => {
    img.addEventListener("click", () => {
        modal.classList.add("active");
        modalImage.src = img.src;
    });
});

closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});