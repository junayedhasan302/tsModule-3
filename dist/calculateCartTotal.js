"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products1 = [
    { name: "Keyboard", price: 1500 },
    { name: "Mouse", price: 800 },
    { name: "USB Cable", price: 300 },
];
const products2 = [
    { name: "Book", price: 500 },
    { name: "Pen", price: 50 },
    { name: "Bag", price: 1200 },
];
const calculateCartTotal = (products) => {
    // let sum:number = 0;
    // for(let i=0; i<products.length; i++){
    //     sum+=products[i].price;
    // } return sum;
    return products.reduce((sum, item) => sum + item.price, 0);
};
console.log("Products 1: ", calculateCartTotal(products1));
console.log("Products 2: ", calculateCartTotal(products2));
//# sourceMappingURL=calculateCartTotal.js.map