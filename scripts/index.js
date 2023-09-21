// // task one
// let userAge = prompt("Скільки вам років?")

// switch(true) {
//     case userAge >= 60:
//         alert("Ви пенсіонер");
//         break;
//     case userAge >= 18:
//         alert("Ви дорослий");
//         break;
//     case userAge >= 12:
//         alert("ви підліток");
//         break;
//     case userAge >= 0:
//         alert("ви дитина");
//         break;
//     default:
//         alert("Ви ввели неправильне значення");

// }


// // task two
// let userInputNumber = prompt("Введіть цифру 0-9 а я виведу їх спецсимволи")
// userInputNumber = parseInt(userInputNumber)
// switch(userInputNumber){
//     case 1:
//         alert("!");
//         break;
//     case 2:
//         alert("@");
//         break;
//     case 3:
//         alert("#");
//         break;
//     case 4:
//         alert("!");
//         break;
//     case 5:
//         alert("%");
//         break;
//     case 6:
//         alert("^");
//         break;
//     case 7:
//         alert("&");
//         break;
//     case 8:
//         alert("*");
//         break;
//     case 9:
//         alert("(");
//         break;
//     case 0:
//         alert(")");
//         break;
//     default:
//         alert("ви ввели неправильне значення")
    
// }
            
// // task three
// let userInputNumbe1r = prompt("Введіть трицифрове число");
// userInputNumber = userInputNumber.replaceAll(" ", ""); // Видаляємо пробіли
// userInputNumber = parseInt(userInputNumber);

// if (userInputNumber >= 100 && userInputNumber <= 999) {
//     const hundreds = Math.floor(userInputNumber / 100); // Отримуємо першу цифру
//     const tens = Math.floor((userInputNumber % 100) / 10); // Отримуємо другу цифру
//     const ones = userInputNumber % 10; // Отримуємо третю цифру

//     if (hundreds === tens || tens === ones || hundreds === ones) {
//         alert("У цьому числі є хоча б дві однакові цифри.");
//     } else {
//         alert("У цьому числі всі цифри різні.");
//     }
// } else {
//     alert("Будь ласка, введіть трицифрове число.");
// }

// // task four
// let year = prompt("Введіть рік");
// year = parseInt(year);

// if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
//     alert("Рік " + year + " є високосним.");
// } else {
//     alert("Рік " + year + " не є високосним.");
// }

// // task five
// let number = prompt("Введіть будь-яке число");
// number = number.trim(); 

// isPalindrome = (str) => {
//     const reversedStr = str.split('').reverse().join('');
//     return str === reversedStr;
// }

// if (isPalindrome(number)) {
//     alert("Число " + number + " є паліндромом.");
// } else {
//     alert("Число " + number + " не є паліндромом.");
// }

// // task six
// let dollars = prompt("Введіть кількість доларів");
// dollars = parseInt(dollars);

// let choice = prompt("Виберіть валюту (EUR, UAN або AZN)").toLowerCase();

// switch (choice) {
//     case "eur":
//         alert(dollars*0.94);
//         break;
//     case "uan":
//         alert(dollars*36.95);
//         break;
//     case "azn":
//         alert(dollars*1.7);
//         break;
//     default:
//         alert("Ви ввели неправильний вибір валюти.");
// }

// // task seven
// let userPrice = prompt("Введіть суму покупки, і я виведу суму зі знижкою");
// userPrice = parseInt(userPrice);

// let discountPrice;

// switch (true) {
//     case userPrice > 500:
//         discountPrice = userPrice - (userPrice / 100 * 7);
//         alert("Ціна зі знижкою 7% буде: " + discountPrice);
//         break;
//     case userPrice > 300:
//         discountPrice = userPrice - (userPrice / 100 * 5);
//         alert("Ціна зі знижкою 5% буде: " + discountPrice);
//         break;
//     case userPrice >= 200:
//         discountPrice = userPrice - (userPrice / 100 * 3);
//         alert("Ціна зі знижкою 3% буде: " + discountPrice);
//         break;
//     default:
//         alert("Ціна без знижки буде: " + userPrice);
// }

// // task eight

// let circleRadius = prompt("Введіть радіус кола");
// circleRadius = parseFloat(circleRadius);

// let squareSideLength = prompt("Введіть довжину сторони квадрата");
// squareSideLength = parseFloat(squareSideLength);

// const circleArea = Math.PI * circleRadius ** 2; // Площа кола
// const squareArea = squareSideLength ** 2; // Площа квадрата

// if (circleArea <= squareArea) {
//     alert("Коло може поміститися в квадрат.");
// } else {
//     alert("Коло не може поміститися в квадрат.");
// }

// // task nine

// let FIRST_QUESTION = prompt("Ну хз вгадай що тре (1, 2, 3)");

// while (true){
//     if (FIRST_QUESTION === "2"){
//         alert("молодлець, вгадав")
//         break
//     }else{
//         FIRST_QUESTION = prompt("не вгадав")
//     }
// }

// // task ten
// Зчитуємо день, місяць і рік від користувача
let day = parseInt(prompt("Введіть день:"));
let month = parseInt(prompt("Введіть місяць (1-12):"));
let year = parseInt(prompt("Введіть рік:"));

// Функція для визначення, чи є рік високосним
let isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Масив, що містить кількість днів у кожному місяці
const daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Перевіряємо, чи введені значення є коректними
if (month >= 1 && month <= 12 && day >= 1 && day <= daysInMonth[month - 1]) {
    day++; // Збільшуємо день на 1

    // Перевіряємо, чи потрібно змінити місяць та рік
    if (day > daysInMonth[month - 1]) {
        day = 1;
        month++;

        // Перевіряємо, чи потрібно змінити рік
        if (month > 12) {
            month = 1;
            year++;
        }
    }

    // Виводимо наступну дату
    alert(`Наступна дата: ${day}.${month}.${year}`);
} else {
    alert("Введені значення некоректні.");
}



    


