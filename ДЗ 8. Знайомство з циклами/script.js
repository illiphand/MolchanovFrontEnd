// Вивести на сторінку в один рядок через кому числа від 10 до 20
const fInt1 = 10;
const sInt1 = 20;
let Part1 = '';
for(let a = fInt1; a <= sInt1; a++){
    Part1 += `${a}, `
}
console.group('Вивести на сторінку в один рядок через кому числа від 10 до 20')
console.log(Part1);
console.groupEnd();

// Вивести квадрати чисел від 10 до 20

const fInt2 = 10;
const sInt2 = 20;
let Part2 = '';
for(let a = fInt2; a <= sInt2; a++){
    Part2 += `${a*a}, `
}
console.group('Вивести квадрати чисел від 10 до 20')
console.log(Part2);
console.groupEnd();

// Вивести таблицю множення на 7

const fInt3 = 1;
const sInt3 = 10;
const iter3Part = 7;

let Part3 = '';
for(let a = fInt3; a <= sInt3; a++){
    Part3 += `${iter3Part}*${a}=${iter3Part*a}; `
}
console.group('Вивести таблицю множення на 7')
console.log(Part3);
console.groupEnd();
// Знайти добуток усіх цілих чисел від 15 до 35

const fInt4 = 15;
const sInt4 = 35;

let Part4 = 1;
for(let a = fInt4; a <= sInt4; a++){
    Part4 *= a;
}
console.group('Знайти добуток усіх цілих чисел від 15 до 35')
console.log(Part4);
console.groupEnd();

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500

const fInt5 = 1;
const sInt5 = 500;

let Part5total = 0;
let Part5count = 0;
for(let a = fInt5; a <= sInt5; a++){
    Part5total += a;
    Part5count++;
}
console.group('Знайти середнє арифметичне всіх цілих чисел від 1 до 500')
console.log(Part5total/Part5count);
console.groupEnd();

// Вивести суму лише парних чисел в діапазоні від 30 до 80

const fInt6 = 30;
const sInt6 = 80;

let Part6 = '';
for(let a = fInt6; a <= sInt6; a++){
    if(a % 2 === 0){
        Part6 += `${a}; `
    }
}
console.group('Вивести суму лише парних чисел в діапазоні від 30 до 80')
console.log(Part6);
console.groupEnd();