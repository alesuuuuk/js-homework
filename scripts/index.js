// task one

// here's nothing

// task two
// getting elements from DOM
const RIGHT_ARROW = document.querySelector("#right_arrow");
const LEFT_ARROW = document.querySelector("#left_arrow");
const LOGO_PNG = document.querySelector("#logo");
const all_imgs = ["/img/html.png", "/img/css.png", "/img/javascript_logo.png"];
let counter = 0;

// Функція для зміни зображення
function changeImage() {
    LOGO_PNG.src = all_imgs[counter];
    updateArrows();
}

// Додавання слухачів для стрілок
RIGHT_ARROW.addEventListener("click", () => {
    if (counter < all_imgs.length - 1) {
        counter++;
        changeImage();
    }
});

LEFT_ARROW.addEventListener("click", () => {
    if (counter > 0) {
        counter--;
        changeImage();
    }
});

// Перевірка і оновлення атрибутів стрілок
function updateArrows() {
    if (counter === 0) {
        LEFT_ARROW.setAttribute("disabled", true);
    } else {
        LEFT_ARROW.removeAttribute("disabled");
    }

    if (counter === all_imgs.length - 1) {
        RIGHT_ARROW.setAttribute("disabled", true);
    } else {
        RIGHT_ARROW.removeAttribute("disabled");
    }
}

// Виклик функції для перевірки стану стрілок при завантаженні сторінки
updateArrows();


// task three
// getting elements from DOM
const buttons = document.querySelectorAll('.news__titles_about button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        if (content.style.display === 'block' || content.style.display === '') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});