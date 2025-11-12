interface Fruit {
    name: string
    quantity: number
}

const inventory: Fruit[] = [

    {name: 'apples', quantity: 6},
    {name: 'cherries', quantity: 10},
    {name: 'oranges', quantity: 4},
    {name: 'watermelons', quantity: 7}
]

function findCherries(fruit: Fruit): boolean{

    return fruit.name === 'cherries';
}

function mayorQueCero(fruit: Fruit): boolean {

    return fruit.quantity > 0;
}

/* function hazAlgo(fruit: Fruit): void {

    console.log(fruit);
} */
/* function findManzana(fruit: Fruit): boolean {

    return fruit.name === 'apples'
} */

function filterQuantity(fruit: Fruit): boolean {

    return fruit.quantity > 2;
}

inventory.find(findCherries);
inventory.filter(filterQuantity);
inventory.find(e => e.name === 'apples');
inventory.every(mayorQueCero);