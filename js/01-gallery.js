import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);

const containerPhotoGallery = document.querySelector(".gallery");

function addColections() {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `
      <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        data-lightbox='test'
        alt="${description}"
      />
    </a>
    </div>`;
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
  const instance = basicLightbox.create(
    `
    <img src="${e.target.dataset.source}" width="800" height="600">
`,
    {
      onClose: (instance) => {
        window.addEventListener("keydown", onEscKeyPrees);

        function onEscKeyPrees(e) {
          console.log(e);
          if (e.code === "Escape") {
            return instance.close();
          }
        }
      },
    },
  );
  instance.show();
}

//*Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.--> готово
//* Реализация делегирования на div.gallery и получение url большого изображения. --> готово
//* Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки. --> готово
//* Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами. --> готово
//* Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox. --> готово
//?Добавь закрытие модального окна по нажатию клавиши Escape. Сделай так, чтобы прослушивание клавиатуры было только пока открыто модальное окно. У библиотеки basicLightbox есть метод для программного закрытия модального окна.
