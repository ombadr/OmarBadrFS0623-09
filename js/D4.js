/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
    return l1 * l2;
}

console.log('ESERCIZIO 1: ' + area(2, 4));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(num1, num2) {

    let num;

    if (num1 === num2) {
        num = (num1 + num2) * 3
    } else {
        num = (num1 + num2)
    }

    return num
}

console.log('ESERCIZIO 2: ' + crazySum(2, 4))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(num1) {

    const differenza = Math.abs(num1 - 19)

    if (num1 > 19) {
        return differenza * 3
    }

    return differenza
}

console.log('ESERCIZIO 3: ' + crazyDiff(4))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
    if ((n >= 20 && n <= 100) || n === 400) {
        return true
    }
    return false
}

console.log('ESERCIZIO 4: ' + boundary(50))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(str) {

    let beforeStr = 'EPICODE'

    if (str.startsWith(beforeStr)) {
        return 'EPICODE';
    }
    return beforeStr + str
}

console.log('ESERCIZIO 5: ' + epify('khjkjhEPICODE'))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(num) {
    if (num <= 0) {
        return false
    } else if ((num % 3 === 0) || (num % 7 === 0)) {
        return true
    }
    return false
}

console.log('ESERCIZIO 6: ' + check3and7(9));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(str) {
    let newStr = str.split("").reverse().join("")

    return newStr
}

console.log('ESERCIZIO 7: ' + reverseString('EPICODE'))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(str) {
    const fChar = str.charAt(0).toLowerCase();
    const rStr = str.slice(1)
    return fChar + rStr
}

console.log('ESERCIZIO 8: ' + upperFirst('KldsfjlkJLKJDUHKDJKJFE'))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(str) {

    if (str.length < 3) {
        return str
    }

    return str.slice(1, -1)

}

console.log('ESERCIZIO 9: ' + cutString('ABA'))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
    let numArr = []

    if (n > 0) {
        for (let i = 0; i < n; i++) {
            let randomNum = Math.floor(Math.random() * 11)
            numArr.push(randomNum)
        }
    }
    return numArr
}

console.log('ESERIZIO 10: ' + giveMeRandom(5))