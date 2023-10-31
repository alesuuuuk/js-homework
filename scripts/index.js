// task one
const messageForm = document.getElementById("message-form");
const messageList = document.getElementById("message-list");

messageForm.addEventListener("submit",  (event) => {
    event.preventDefault();
    const authorInput = document.getElementById("author");
    const messageInput = document.getElementById("message");

    const author = authorInput.value;
    const message = messageInput.value;

    if (author && message) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${author}:</strong> ${message}`;
        messageList.appendChild(listItem);

        authorInput.value = "";
        messageInput.value = "";
    }
});

// task two
const submitButton = document.getElementById("submit-button");
const resultDisplay = document.getElementById("result");

submitButton.addEventListener("click",  () => {
    const q1Answer = document.querySelector("input[name='q1']:checked");
    const q2Answer = document.querySelector("input[name='q2']:checked");

    let correctAnswers = 0;

    if (q1Answer && q1Answer.value === "Париж") {
        correctAnswers++;
    }

    if (q2Answer && q2Answer.value === "8") {
        correctAnswers++;
    }

    resultDisplay.innerHTML = `Ви дали ${correctAnswers} правильних відповідей з 2 питань.`;
});

// task three
const textForm = document.getElementById("text-form");
const styledText = document.getElementById("styled-text");
const textInput = document.getElementById("styled-text-input");

textForm.addEventListener("submit",  (event) => {
    event.preventDefault();

    const inputText = textInput.value;
    styledText.textContent = inputText;
});

// task four
const orderForm = document.getElementById("book-order-form");
        const orderConfirmation = document.getElementById("order-confirmation");

        orderForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const bookSelection = document.getElementById("book-selection").value;
            const quantity = document.getElementById("quantity").value;
            const name = document.getElementById("name").value;
            const deliveryDate = document.getElementById("delivery-date").value;
            const deliveryAddress = document.getElementById("delivery-address").value;
            const comment = document.getElementById("comment").value;

            const confirmationMessage = `${name}, дякуємо за замовлення. ${quantity} копій(ки) книги "${bookSelection}" буде доставлено у ${deliveryDate} за адресою: ${deliveryAddress}.`;

           alert(confirmationMessage)
        });

// task five
const attendanceForm = document.getElementById("attendance-form");
        const attendanceList = document.getElementById("attendance-list");
        const attendanceData = [];

        attendanceForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const group = document.getElementById("group").value;
            const lecture = document.getElementById("lecture").value;
            const topic = document.getElementById("topic").value;
            const attendees = document.getElementById("attendees").value;

            const attendanceRecord = {
                group,
                lecture,
                topic,
                attendees
            };

            attendanceData.push(attendanceRecord);

            displayAttendanceList();
            clearForm();
        });

        function displayAttendanceList() {
            attendanceList.innerHTML = "";
            attendanceData.forEach((record, index) => {
                const listItem = document.createElement("li");
                listItem.textContent = `Група: ${record.group}, Пара: ${record.lecture}, Тема: ${record.topic}, Присутні: ${record.attendees}`;
                attendanceList.appendChild(listItem);
            });
        }

        function clearForm() {
            document.getElementById("topic").value = "";
            document.getElementById("attendees").value = "";
        }

// task six
const bookingForm = document.getElementById("booking-form");
        const bookingsList = document.getElementById("bookings-list");
        const bookingsData = [];

        bookingForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const destination = document.getElementById("destination").value;
            const travelDate = document.getElementById("travel-date").value;
            const seats = document.getElementById("seats").value;

            const bookingRecord = {
                destination,
                travelDate,
                seats: seats.split(',').map(seat => seat.trim())
            };

            bookingsData.push(bookingRecord);

            displayBookingsList();
            clearForm();
        });

        function displayBookingsList() {
            bookingsList.innerHTML = "";
            bookingsData.forEach((record, index) => {
                const listItem = document.createElement("li");
                listItem.textContent = `Напрямок: ${record.destination}, Дата: ${record.travelDate}, Місця: ${record.seats.join(', ')}`;
                bookingsList.appendChild(listItem);
            });
        }

        function clearForm() {
            document.getElementById("seats").value = "";
        }