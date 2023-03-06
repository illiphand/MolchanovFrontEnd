const hours = prompt('Напишите кол-во часов');

const seconds = hours*60*60;

alert(`${numberWithSpaces(seconds)} секунд/s в ${hours} часах/s`)

//Common functions
function numberWithSpaces(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}