/* Consegna:
Scrivere una funzione (e lanciarla) che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter. */

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

const minNumber = 2;
const maxNumber = 10;

function newArray(array, min, max) {
    const newArray = [];
    array.forEach((element,index) => {
        if ( min < max && index > min && index < max) {
            newArray.push(element);
        }
    });
    return newArray;
}

const arrayFunction = newArray(numbers,minNumber,maxNumber);
console.log(numbers, arrayFunction);

