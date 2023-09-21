// // task ome
// let userName = prompt("Введіть своє ім'я")
// alert(`Привіт, ${userName}!`)

// // task two
// const YEAR = 2023
// let userBirthYear = prompt("Введіть свій рік народження")
// alert(`Зараз вам є ${YEAR-userBirthYear}`)

// // task three
// let squareSide = prompt("введіть сторону квадрата")
// alert(`Перемиттер квадрата зі сторною ${squareSide} дорівнює ${squareSide*4}`)

// // task four
// const PI = 3.14
// let circleRadius = prompt("Ведіть радіус кола")
// alert(`Площа кола з радіусом ${circleRadius}  дорівнює ${PI*circleRadius**2}`)

// // task five
// let distance = prompt("Введіть відстань між містами(км)")
// let time = prompt("Введіть за скільки ви хочете туди дібратись(хв)")
// alert(`Щоб проїхати ${distance} кілометрів за ${time} хв вам потрібно рухатись з середною швідкістю ${distance/(time/60)} км/год або ${(distance/(time/60)/3.6)} м/с`)

// // task six
// const VALUE_TRANSLATOR = 0.929
// let dollars = prompt("Введіть кількість доларів")
// alert(`${dollars} доларів в євро: ${dollars*VALUE_TRANSLATOR}`)

// // task seven
// let userMegabites = prompt("Введіть кількість гб на вашій флешці")
// alert(`На вашу флешку обсягом ${userMegabites} поміститься така кількість файлів по 820мб: ${Math.floor((userMegabites*1024)/820)} `)


// // task eight
// let totalMoney = parseFloat(prompt('Введіть суму грошей у гаманці:'));
// let chocolatePrice = parseFloat(prompt('Введіть вартість однієї шоколадки:'));


// let chocolatesBought = Math.floor(totalMoney / chocolatePrice);
// let change = totalMoney - (chocolatesBought * chocolatePrice);


// if (chocolatesBought > 0) {
//     alert('Ви можете купити ' + chocolatesBought + ' шоколадок. Залишок грошей: ' + change.toFixed(2) + ' грн');
    
// } else {
//     alert('На цю суму ви не можете купити жодної шоколадки.');
// }

// // task nine

// let userInput = prompt('Введіть число:');

// if (!isNaN(userInput)) {

//     let number = parseInt(userInput);
//     let originalNumber = number;
//     let reversedNumber = 0;

//     while (number > 0) {
//         let digit = number % 10;
//         reversedNumber = reversedNumber * 10 + digit;
//         number = Math.floor(number / 10);
//     }

//     alert('Паліндром для числа ' + originalNumber + ' - це ' + reversedNumber);
// } else {
//     alert('Введене значення не є числом. Будь ласка, введіть коректне число.');
// }

// // task ten
let checkOddEven = (number) =>{
    number % 2 == 0 ? alert(`${number} - парне`) : alert(`${number} - непарне`)
}

let userInputNumber = prompt("Введіть число")
checkOddEven(userInputNumber)