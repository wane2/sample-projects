//while and do while loop
const miles = ['0','10', '20', '30', '40', '50', '60', '70', '80', '90', '100'];

let speed = 0;

while (speed <= 10) {
  console.log(`the speed of the car is ${miles[speed]}mph`)
  speed++;
}


let a = 1;

let b = 10;

do {
  console.log(`the number is ${a}`)
  a++;
} while (a <= b);
