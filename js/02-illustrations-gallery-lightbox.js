import { illustrationsGalleryItems } from "./illustrations-gallery-items.js";

console.log(illustrationsGalleryItems);

// Знаходимо галерею та її елементи "li"
const illustrationsGalleryEl = document.querySelector(".illustrations-gallery");

// Додаємо розмітку в структуру
illustrationsGalleryEl.innerHTML = createListImg(illustrationsGalleryItems);

// Функція створення розмітки "li" списку в HTML
function createListImg(images) {
	return images
		.map(
			({ preview, original, description }) =>
				`<li class="illustrations-gallery__item">
            <a class="illustrations-gallery__link" href="${original}">
                <img
                    class="illustrations-gallery__image"
                    src="${preview}"
                    alt="${description}"
                    loading="lazy"
                />
            </a>
        </li>`,
		)
		.join("");
}

// бібліотека SimpleLightbox
const lightbox = new SimpleLightbox(".illustrations-gallery a", {
	// captions: true,
	captionsData: "alt",
	captionDelay: 250,
	// nav: true,
	// close: true,
	// overlay: true,
});
