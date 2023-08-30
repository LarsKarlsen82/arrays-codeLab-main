/* arrays */

//Opgave 1
const myArray =['element1','element2','element3','element4', 'element5'];

// opgave 2 console.logs
myArray.sort((a,b) => {
    const order = ['element3', 'element5', 'element1','element4','element2'];
    return order.indexOf(a) - order.indexOf(b);
});

console.info(myArray);


