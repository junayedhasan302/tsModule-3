const calculateCartTotal=(products: Product[]): number=> {
    // let sum:number = 0;
    // for(let i=0; i<products.length; i++){
    //     sum+=products[i].price;
    // } return sum;
    return products.reduce((sum, product) => sum + product.price, 0);
    
}
type Product = {
    name: string,
    price: number
}
const products: Product[]= [ 
    { name: "Keyboard", price: 1500 }, 
    { name: "Mouse", price: 800 }, 
    { name: "USB Cable", price: 300 } 
];
console.log(calculateCartTotal(products));