// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
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

function checkArray(arr) {

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 5) {
            console.log(arr[i] + ' maggiore di 5')
            sum += arr[i]
        } else {
            console.log(arr[i] + ' minore di 5')
        }
    }

    return sum

}

console.log('EXTRA 1: ' + checkArray(giveMeRandom(5)))

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */


const shoppingCart =
    [
        {
            price: 10,
            name: 'Prodotto 1',
            id: '1',
            quantity: 2
        },
        {
            price: 14,
            name: 'Prodotto 2',
            id: '2',
            quantity: 1
        },
        {
            price: 150,
            name: 'Prodotto 3',
            id: '3',
            quantity: 3
        },
    ]

function shoppingCartTotal(shoppingCart) {

    let totalCart = 0

    for (cart of shoppingCart) {

        totalCart += cart.price * cart.quantity
    }

    return totalCart
}

console.log('EXTRA 2: ' + shoppingCartTotal(shoppingCart));


/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function addToShoppingCart(product) {
    shoppingCart.push(product);

    return shoppingCart.length
}

let prodotto_x = {
    price: 15000,
    name: 'Prodotto 4',
    id: '4',
    quantity: 30
}

console.log('EXTRA 3: ' + addToShoppingCart(prodotto_x))

console.log(shoppingCart)


/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function maxShoppingCart(totalCart) {

    if (totalCart.length === 0) {
        return null
    }

    let maxPrice = totalCart[0].price
    let maxItem = totalCart[0].name

    for (cart of totalCart) {
        if (cart.price > maxPrice) {
            maxPrice = cart.price
            maxItem = cart.name
        }

    }

    return maxItem

}

console.log('EXTRA 4: ' + maxShoppingCart(shoppingCart))

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function latestShoppingCart(totalCart) {

    if (totalCart.length === 0) {
        return null
    }

    let lastItem = totalCart[totalCart.length - 1]

    return JSON.stringify(lastItem)

}

console.log('EXTRA 5: ' + latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function loopUntil(x) {
    if (x < 0 || x > 9) {
        return null
    }

    let timesHigherThanX = 0

    do {

        const casualNumber = Math.floor(Math.random() * 10)

        console.log(casualNumber)

        if (casualNumber >= x) {
            timesHigherThanX++


        } else {
            timesHigherThanX = 0
        }
    } while (timesHigherThanX < 3)

    console.log('stop')
}

loopUntil(3)

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let arr_1 = [8, 10, 6, 'next', 6, 'hello', 10]

function average(arr) {

    let sum = 0
    let stringsFound = 0

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            stringsFound++
        } else {
            sum += arr[i]
        }
    }

    let average = sum / (arr.length - stringsFound)

    console.log(average)
}


average(arr_1)
/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let arr_2 = ['hello', 'example', 'new']

function longest(arr) {

    let longest = arr[0]

    for (let i = 0; i < arr.length; i++) {

        if (longest.length < arr[i].length) {

            longest = arr[i]

        }

    }

    return longest

}

console.log('EXTRA 8: ' + longest(arr_2))


/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function emailContent(content) {

    let lowContent = content.toLowerCase();

    if (lowContent.includes('spam') || lowContent.includes('scam')) {
        return true
    }
    return false
}

console.log('EXTRA 9: ' + emailContent('This is a scam beware'))

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function calculateDays(inputDate) {

    const currentDate = new Date()

    let difference = currentDate - inputDate

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))

    return days

}

const inputDate = new Date("2023-10-03")

console.log('EXTRA 10: ' + calculateDays(inputDate))

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function matrixGenerator(x, y) {

    const matrix = []

    for (let i = 0; i < x; i++) {
        const row = []

        for (let j = 0; j < y; j++) {
            row.push(i.toString() + j.toString())
        }

        matrix.push(row)
    }

    return matrix
}

console.log('EXTRA 11: ' + matrixGenerator(3, 2))