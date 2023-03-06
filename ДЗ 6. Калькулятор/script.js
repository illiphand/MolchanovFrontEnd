const sim = prompt('Какое действие желаете выполнить? (Варианты: +, -, *, /)');

const a = prompt('Впишите первое число');
const b = prompt('Впишите второе число');
let alertMsg = '';
switch (sim) {
    case "+":
        alertMsg = +a + +b;
        break;
    case "-":
        alertMsg = a - b;
        break;
    case "*":
        alertMsg = a * b;
        break;
    case "/":
        alertMsg = a / b;
        break;
    default:
        alertMsg = 'Некорректно внесено действие'
        break;
}

alert(alertMsg);