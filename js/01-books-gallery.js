import { booksGalleryItems } from "./books-gallery-items.js";

console.log(booksGalleryItems);

// Знаходимо галерею та її елементи "li"
const booksGalleryEl = document.querySelector(".books__list");

// Додаємо розмітку в структуру
booksGalleryEl.innerHTML = createListItem(booksGalleryItems);

// Функція створення розмітки "li" списку в HTML
function createListItem(books) {
	return books
		.map(
			({ title, description, bookPage, bookImage, alt }) =>
				`<li class="book__item">
          <div class="book__thumb">
            <a class="link" href="${bookPage}">
              <img class="book__image" src="${bookImage}" alt="${alt}" width="250" height="250" loading="lazy">
              <div class="book__caption">
                <h3 class="book__title">
                  ${title}
                </h3>
                <p class="book__text">
                  ${description}
                </p>
              </div>
            </a>
          </div>
        </li>`,
		)
		.join("");
}
