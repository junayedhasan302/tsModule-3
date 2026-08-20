"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getTicketPrice = (age) => {
    if (age < 5)
        return 0;
    else if (age >= 5 && age <= 12)
        return 100;
    else if (age >= 13 && age <= 59)
        return 200;
    else
        return 120;
};
console.log(getTicketPrice(4));
console.log(getTicketPrice(11));
console.log(getTicketPrice(13));
console.log(getTicketPrice(59));
console.log(getTicketPrice(60));
//# sourceMappingURL=getTicketPrice.js.map