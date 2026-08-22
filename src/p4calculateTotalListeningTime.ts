interface Track {
  title: string;
  minutes: number;
}
const tracks1: Track[] = [
  { title: "Blinding Lights", minutes: 3 },
  { title: "Levitating", minutes: 4 },
  { title: "Peaches", minutes: 3 },
];
const tracks2 = [ 
    { title: "Flowers", minutes: 3 }, 
    { title: "Anti-Hero", minutes: 4 } 
];

const calculateTotalListeningTime = (tracks: Track[]): number => {
  const arr = [...tracks];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].minutes;
  }
  return sum;
};
console.log(calculateTotalListeningTime(tracks1));
console.log(calculateTotalListeningTime(tracks2));