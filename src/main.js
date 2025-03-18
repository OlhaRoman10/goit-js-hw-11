import { fetchImages } from "./js/pixabay-api.js";
import { renderGallery } from "./js/render-functions.js"

import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";





const form = document.querySelector(".form");

const loader = document.querySelector(".loader");

const input = form.querySelector("input[name='search-text']");
function showLoader() {
  loader.classList.remove("hidden");
}

function hideLoader() {
  loader.classList.add("hidden");
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const query = input.value.trim();
    if (!query) {
        iziToast.error({ message: "Please enter a search query!" })
        return;
    }
    showLoader();
    fetchImages(query)
        .then(images => {
        if (images.length === 0) {
            iziToast.error({ message: "Sorry, there are no images matching your search query. Please try again!", position: "topRight", });
        } else {
            renderGallery(images);
        }    
    })
    .finally(() => hideLoader()); // Ховаємо loader після завершення запиту
});