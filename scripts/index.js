// Функція для збереження колекції кольорів у Cookie
function saveColorsToCookie(colors) {
    const jsonString = JSON.stringify(colors);
    document.cookie = `colors=${jsonString}; max-age=10800`; // Максимальний термін життя - 3 години (10800 секунд)
}

// Функція для завантаження колекції кольорів з Cookie
function loadColorsFromCookie() {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name.trim() === 'colors') {
            return JSON.parse(value);
        }
    }
    return [];
}

// Функція для додавання нового кольору
function addColor() {
    const nameInput = document.getElementById('color-name');
    const typeInput = document.getElementById('color-type');
    const codeInput = document.getElementById('color-code');
    const palette = document.getElementById('color-palette');

    const name = nameInput.value.trim();
    const type = typeInput.value;
    const code = codeInput.value.trim();

    if (!name || !code) {
        alert('Назва та код кольору - обов\'язкові поля.');
        return;
    }

    const existingColors = loadColorsFromCookie();
    const colorExists = existingColors.some(color => color.name.toLowerCase() === name.toLowerCase());
    if (colorExists) {
        alert('Ця назва кольору вже існує.');
        return;
    }

    const colorBox = document.createElement('div');
    colorBox.classList.add('color-box');
    colorBox.style.backgroundColor = type === 'HEX' ? code : `rgba(${code})`;
    colorBox.textContent = name;
    palette.appendChild(colorBox);

    existingColors.push({ name, type, code });
    saveColorsToCookie(existingColors);

    nameInput.value = '';
    codeInput.value = '';
}

// Додавання обробників подій
document.getElementById('color-form').addEventListener('submit', function (e) {
    e.preventDefault();
    addColor();
});

// Відобразити збережені кольори після завантаження сторінки
window.addEventListener('submit', function () {
    const existingColors = loadColorsFromCookie();
    for (const color of existingColors) {
        const palette = document.getElementById('color-palette');
        const colorBox = document.createElement('div');
        colorBox.classList.add('color-box');
        colorBox.style.backgroundColor = color.type === 'HEX' ? color.code : `rgba(${color.code})`;
        colorBox.textContent = color.name;
        palette.appendChild(colorBox);
    }
});
