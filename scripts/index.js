document.addEventListener("DOMContentLoaded", () => {
    // task one 
    const nameInput = document.getElementById("nameInput");
    nameInput.addEventListener("input", (event) => {
        const inputValue = nameInput.value;
        const filteredValue = inputValue.replace(/\d/g, "");
        if (inputValue !== filteredValue) {
            nameInput.value = filteredValue;
        }
    });
    // task two
    const openButton = document.getElementById("openButton");
            const modal = document.getElementById("modal");
            const closeButton = document.getElementById("closeButton");

            openButton.addEventListener("click", function () {
                modal.style.display = "block";
            });

            closeButton.addEventListener("click", function () {
                modal.style.display = "none";
            });
        
    // task three
    function moveBall(event) {
        const ball = document.getElementById("football");
        const field = document.querySelector(".football-field");

        // Отримуємо координати кліку відносно поля
        const clickX = event.clientX - field.getBoundingClientRect().left;
        const clickY = event.clientY - field.getBoundingClientRect().top;

        // Розраховуємо нові координати для м'яча
        const ballX = clickX - ball.clientWidth / 2;
        const ballY = clickY - ball.clientHeight / 2;

        // Перевірка, щоб м'яч не виходив за межі поля
        if (ballX < 0) ballX = 0;
        if (ballY < 0) ballY = 0;
        if (ballX > field.clientWidth - ball.clientWidth) ballX = field.clientWidth - ball.clientWidth;
        if (ballY > field.clientHeight - ball.clientHeight) ballY = field.clientHeight - ball.clientHeight;

        // Змінюємо позицію м'яча з плавною анімацією
        ball.style.transform = `translate(${ballX}px, ${ballY}px)`;
    }
   
    
    // task five 
    function toggleSelected(book) {
        const books = document.querySelectorAll('.book');

        // Знімаємо виділення з усіх книг
        for (const item of books) {
            item.classList.remove('selected');
        }

        // Встановлюємо виділення для клікнутої книги
        book.classList.add('selected');
    }
});