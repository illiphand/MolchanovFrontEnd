//массив

const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];


// Знайти суму та кількість позитивних елементів.
let sumPart1 = 0;
let countPart1 = 0;

for(let i = 0; i < array.length; i++) {
    sumPart1+=array[i];
    countPart1++;
}
console.group('Знайти суму та кількість позитивних елементів')
console.log(`сумa позитивних елементів = ${sumPart1}; Kількість позитивних елементів = ${countPart1}`)
console.groupEnd();

// Знайти мінімальний елемент масиву та його порядковий номер.

let elemValuePart2 = null;
let elemIndexPart2 = -1;

for(let i = 0; i < array.length; i++) {
    if(elemValuePart2 === null || elemValuePart2 > array[i]){
        elemValuePart2 = array[i];
        elemIndexPart2 = i;
    }
}

console.group('Знайти мінімальний елемент масиву та його порядковий номер')
console.log(`мінімальний елемент масиву = ${elemValuePart2}; його порядковий номер = ${elemIndexPart2}`)
console.groupEnd();
// Знайти максимальний елемент масиву та його порядковий номер.

let elemValuePart3 = null;
let elemIndexPart3 = -1;

for(let i = 0; i < array.length; i++) {
    if(elemValuePart3 === null || elemValuePart3 < array[i]){
        elemValuePart3 = array[i];
        elemIndexPart3 = i;
    }
}

console.group('Знайти максимальний елемент масиву та його порядковий номер')
console.log(`максимальний елемент масиву = ${elemValuePart3}; його порядковий номер = ${elemIndexPart3}`)
console.groupEnd();

// Визначити кількість негативних елементів.

let countNegative = 0;

for(let i = 0; i < array.length; i++) {
    if(array[i] < 0){
        countNegative++;
    }
}

console.group('Визначити кількість негативних елементів')
console.log(`кількість негативних елементів = ${countNegative}`)
console.groupEnd();

// Знайти добуток позитивних елементів.

let multiTotal = 1;

for(let i = 0; i < array.length; i++) {
    if(array[i] > 0){
        multiTotal *= array[i];
    }
}
multiTotal = multiTotal === 1? 0:multiTotal;


console.group('Знайти добуток позитивних елементів')
console.log(`добуток позитивних елементів = ${multiTotal}`)
console.groupEnd();

