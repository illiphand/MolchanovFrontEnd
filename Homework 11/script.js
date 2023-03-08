const arrayF = ['Lviv', 'Dnipro', 'Ternopil', 'London'];
const arrayS = ['Dnipro', 'Paris', 'York', 'Ternopil'];

const arrayFinal = arrayToArray(arrayF, arrayS);

function arrayToArray(array1, array2) {
    const arr = [];
    if(Array.isArray(array1) && Array.isArray(array2)){
        for(i in array1){
            if(!array2.includes(array1[i])){
                arr.push(array1[i]);
            }
        }
        for(i in array2){
            if(!array1.includes(array2[i])){
                arr.push(array2[i]);
            }
        }
    } else {
        console.log('one none array element')
        arr = [];
    }

    return arr;
}

console.log(arrayFinal)