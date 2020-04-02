const EventEmitter = require('events');


// Best practice to create class and inherit from class

class Sales extends EventEmitter {
    constructor() {
        super();
    }
}
// Like this

const myEmitter = new Sales();

myEmitter.on('newSale', () => {
    console.log('There was a new sale!');
});

myEmitter.on('newSale', () => {
    console.log('Costumer name: Jonas');
});

myEmitter.on('newSale', stock => {
    console.log(`There are now ${stock} items left in stock.`);
})
myEmitter.emit('newSale', 9);

//////////////////////////



