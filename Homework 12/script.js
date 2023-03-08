const array1 = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5 );
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]

function removeElement(array,item) {
    let indx = array.findIndex(elem => elem == item);
    if(indx != -1){
        array.splice(indx, 1);
    }
}