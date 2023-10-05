// // task one
// const exponentiation = (num, power) =>{
//     return num**power
// };

// let num = parseInt(prompt("Введіть число "))
// let power=  parseInt(prompt("Введіть степніь числа"))
// alert(`${num} в степені ${power} дорівнює ${exponentiation(num, power)}`)

// // task two
// const searchBiggestCommonDenominator = (numOne, numTwo)=>{
//     while (numTwo !== 0) {
//         const temp = numTwo;
//         numTwo = numOne % numTwo;
//         numOne = temp;
//     }
//     return numOne;
// }
// let numOne = parseInt(prompt("Введіть число 1"))
// let numTwo = parseInt(prompt("Введіть число 2"))
// alert("Найбільший спільний дільних цих чисел - ", searchBiggestCommonDenominator(numOne, numTwo))

// // task three
// const searchMaxNumber = (number) => {
//     if (number < 0) {
//         number = -number; // Якщо число від'ємне, зробимо його додатнім для пошуку максимальної цифри.
//     }

//     let maxDigit = 0; // Початкове значення максимальної цифри.

//     while (number > 0) {
//         const digit = number % 10; // Отримуємо останню цифру числа.
//         if (digit > maxDigit) {
//             maxDigit = digit; // Якщо поточна цифра більша за максимальну, оновлюємо максимальну цифру.
//         }
//         number = Math.floor(number / 10); // Видаляємо останню цифру з числа.
//     }

//     return maxDigit;
// }

// let number = parseInt(prompt("Введіть число а я виведу макс цифру в ньому"))
// alert("Максимальна цифра в цьому числі - ", searchMaxNumber(number))

// // task four

// const isPrime = (number)=>{
//     if (number <= 1) {
//         return false; 
//     }

//     if (number <= 3) {
//         return true; 
//     }

    
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }

//     return true; 
// }

// let number_prime_or_not = parseInt(prompt("Введіть число "))
// alert(isPrime(number_prime_or_not))

// // task five
// const faktorize = (number) =>{
//     const factors = [];
//     let divisor = 2;

//     while (number > 1) {
//         while (number % divisor == 0) {
//             factors.push(divisor);
//             number /= divisor;
//         }
//         divisor++;
//     }

//     return factors;
// }

// let faktorize_number=  parseInt(prompt("Введіть число "))
// let faktorize_number_result = faktorize(faktorize_number)
// alert(`Множники числа ${faktorize_number}: ${faktorize_number_result}`)

// // task six
const fibonacci= (n)=>{
    if (n <= 0) {
        return 0;
    } else if (n === 1 || n === 2) {
        return 1;
    } else {
        let fib1 = 1;
        let fib2 = 1;
        let result = 0;

        for (let i = 3; i <= n; i++) {
            result = fib1 + fib2;
            fib1 = fib2;
            fib2 = result;
        }

        return result;
    }
}

let n = parseInt(prompt("Введіть порядковий номер а я виведу число Фібоначі за цим номером "))
alert(fibonacci(n))