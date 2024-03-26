/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/
function crazySum(num1, num2) {
    if (num1 === num2) {
        return (num1 + num2) * 3;
    } else {
        return num1 + num2;
    }
}


console.log(crazySum(2, 3)); 
console.log(crazySum(5, 5));  

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/
function boundary(number) {
    return (number >= 20 && number <= 100) || number === 400;
}


console.log(boundary(10));   
console.log(boundary(50));   
console.log(boundary(400));  
console.log(boundary(120));  

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/
function reverseString(str) {
    
    return str.split('').reverse().join('');
}


console.log(reverseString("EPICODE"));  

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/
function upperFirst(str) {
    
    let words = str.split(' ');
    
  
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    

    return words.join(' ');
}


console.log(upperFirst("hello world")); 

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/
function giveMeRandom(n) {
    let randomNumbers = [];
    for (let i = 0; i < n; i++) {
        
        randomNumbers.push(Math.floor(Math.random() * 11));
    }
    return randomNumbers;
}


console.log(giveMeRandom(5));  
/* SCRIVI QUI LA TUA RISPOSTA */

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
function area(l1, l2) {
    
    return l1 * l2;
}


console.log(area(5, 8)); 

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(number) {
    let difference = Math.abs(number - 19); 
   
    if (difference > 19) {
        return difference * 3;
    } else {
        return difference;
    }
}


console.log(crazyDiff(10));  
console.log(crazyDiff(25));  
console.log(crazyDiff(40));  

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/
function codify(str) {
    
    if (str.startsWith("code")) {
        return str; 
    } else {
        return "code" + str; 
    }
}


console.log(codify("hello")); 
console.log(codify("code world"));  
console.log(codify("code"));  

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/
function check3and7(number) {
   
    if (number % 3 === 0 || number % 7 === 0) {
        return true; 
    } else {
        return false; 
    }
}


console.log(check3and7(6));  
console.log(check3and7(14));  
console.log(check3and7(10));  

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(str) {
    
    if (str.length > 2) {
        return str.slice(1, -1);
    } else {
       
        return '';
    }
}


console.log(cutString("hello"));   
console.log(cutString("world"));   
console.log(cutString("a"));       
