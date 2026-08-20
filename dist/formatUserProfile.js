"use strict";
//TYPE
// type User = {
//     name: string;
//     age: number;
//     city: string
// };
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: "Fahim",
    age: 22,
    city: "Dhaka",
};
const formatUserProfile = (user) => {
    return `${user.name} is ${user.age} years old and lives in ${user.city} `;
};
console.log(formatUserProfile(user));
// "Fahim is 22 years old and lives in Dhaka."
//# sourceMappingURL=formatUserProfile.js.map