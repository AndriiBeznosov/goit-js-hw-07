import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

//* Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи. Используй готовый код из первого задания.
//* Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs. Необходимо добавить ссылки на два файла: simple-lightbox.min.js и simple-lightbox.min.css.
// * Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery. Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».
//? Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt. Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.

const containerPhotoGallery = document.querySelector(".gallery");

function addColections() {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `
     <a class="gallery__item"
      href="${original}">
            <img
            class="gallery__image" 
            src="${preview}" 
            alt="${description}"
            title='${description}'
            />
        </a>`;
    })
    .join("");
}

containerPhotoGallery.insertAdjacentHTML("beforeend", addColections());

containerPhotoGallery.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(e) {
  e.preventDefault();

  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  let lightbox = new SimpleLightbox(".gallery a", {
    /* options */
  });

  //   const instance = basicLightbox.create(`
  //     <img src="${e.target.dataset.source}" width="800" height="600">
  // `);

  //   instance.show();
}
