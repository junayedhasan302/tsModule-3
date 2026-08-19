const calculateCartTotal=(products: Product[]): number=> {
    let sum:number = 0;
    for(let i=0; i<products.length; i++){
        sum+=products[i].price;
    } return sum;
}
const products = [ 
    { name: "Keyboard", price: 1500 }, 
    { name: "Mouse", price: 800 }, 
    { name: "USB Cable", price: 300 } 
];
console.log(calculateCartTotal(products));