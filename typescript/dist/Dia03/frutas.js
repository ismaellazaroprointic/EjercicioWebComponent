"use strict";
const inventory = [
    { name: 'apples', quantity: 6 },
    { name: 'cherries', quantity: 10 },
    { name: 'oranges', quantity: 4 },
    { name: 'watermelons', quantity: 7 }
];
function findCherries(fruit) {
    return fruit.name === 'cherries';
}
function mayorQueCero(fruit) {
    return fruit.quantity > 0;
}
function hazAlgo(fruit) {
    console.log(fruit);
}
function findManzana(fruit) {
    return fruit.name === 'apples';
}
function filterQuantity(fruit) {
    return fruit.quantity > 2;
}
inventory.find(findCherries);
inventory.filter(filterQuantity);
inventory.find(e => e.name === 'apples');
inventory.every(mayorQueCero);
