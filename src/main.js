import { fetchImages } from "./js/pixabay-api.js";
import { renderGallery } from "./js/render-functions.js"

import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";





const form = document.querySelector(".form");
const input = form.querySelector("input[name='search-text']");


form.addEventListener("submit", function (event) {
    event.preventDefault();
    const query = input.value.trim();
    if (!query) {
        iziToast.error({ message: "Please enter a search query!" })
        return;
    }
    fetchImages(query)
        .then(images => {
        if (images.length === 0) {
            iziToast.error({ message: "Sorry, there are no images matching your search query. Please try again!", position: "topRight", });
        } else {
            renderGallery(images);
        }    
    });
    });
    