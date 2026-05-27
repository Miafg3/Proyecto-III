// TEMPLATE 1

const mainImage = document.querySelector(".main-image");
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

// SLIDER

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

// MODAL

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

// TEMPLATE 3

const photoStack = document.getElementById("photo-stack");
const stackNext = document.getElementById("stack-next");

let photoCards = Array.from(photoStack.querySelectorAll(".photo-card"));
let isAnimating = false;

/* Z-INDEX */

function updateZIndex() {
    photoCards.forEach((card, index) => {
        card.style.zIndex = photoCards.length - index;
    });
}

updateZIndex();

/* NEXT PHOTO */

function sendPhotoBack() {
    if (isAnimating) return;
    isAnimating = true;

    const frontPhoto = photoCards.shift();

    frontPhoto.style.transform = "translateX(130%) rotate(18deg)";
    frontPhoto.style.opacity = ".5";

    setTimeout(() => {
        photoCards.push(frontPhoto);

        updateZIndex();

        frontPhoto.style.transform = "";
        frontPhoto.style.opacity = "1";

        setTimeout(() => {
            isAnimating = false;
        }, 250);
    }, 300);
}

stackNext.addEventListener("click", sendPhotoBack);
