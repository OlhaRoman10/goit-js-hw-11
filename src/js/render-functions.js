export function renderGallery(images) {
    const gallery = document.querySelector(".gallery");
    
  gallery.innerHTML = images.map(image => `
    <li class="gallery-item">
      <a href="${image.largeImageURL}" target="_blank">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy">
      </a>
      <div class="info">
        <p>👍 ${image.likes}</p>
        <p>👁 ${image.views}</p>
        <p>💬 ${image.comments}</p>
        <p>⬇️ ${image.downloads}</p>
      </div>
    </li>
  `).join("");
}