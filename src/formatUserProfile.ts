//TYPE
// type User = {
//     name: string;
//     age: number;
//     city: string
// };

//INTERFACE
interface User {
  name: string;
  age: number;
  city: string;
}

const user:User = {
  name: "Fahim",
  age: 22,
  city: "Dhaka",
};


const formatUserProfile = (user: User): string => {
  return `${user.name} is ${user.age} years old and lives in ${user.city} `;
};

console.log(formatUserProfile(user));
// "Fahim is 22 years old and lives in Dhaka."
