const getSignalStatus = (strength: number): string => {
    if(strength >=0 && strength <=20 ) return "Weak";
    else if(strength >=21 && strength <=50 ) return "Fair";
    else if(strength >=51 && strength <=80 ) return "Good";
    return "Excellent";
}
console.log(getSignalStatus(10));
console.log(getSignalStatus(20));
console.log(getSignalStatus(30));
console.log(getSignalStatus(40));
console.log(getSignalStatus(50));
console.log(getSignalStatus(60));
console.log(getSignalStatus(70));
console.log(getSignalStatus(80));

// 0–20  "Weak" 
// 21–50  "Fair" 
// 51–80  "Good" 
// 81–100  "Excellent"