import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryItemsEl = document.querySelector(".gallery");

function addColections() {
  return galleryItems
    .map((imageEl) => {
      return `
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${imageEl.preview}"
        data-source="${imageEl.preview}"
        alt="Image description"
      />
    </a>`;
    })
    .join("");
}
galleryItemsEl.insertAdjacentHTML("beforeend", addColections());
console.log(addColections());
