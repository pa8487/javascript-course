let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Satoshi");
console.log(0);

let firstName = "Satoshi";
console.log(firstName);

console.log("TEST DATA 1");
// Store Mark's weight and height in variables
let markHeight = 1.69;
let markWeight = 78;
// Calculate Mark's BMI
let markBMI = markWeight / markHeight ** 2;

// Store John's weight and height in variables
let johnHeight = 1.95
let johnWeight = 92
// Calculate John's BMI
let johnBMI = johnWeight / johnHeight ** 2;

console.log("Mark' BMI", markBMI);
console.log("John's BMI", johnBMI);

// Compare Mark and John BMI
let markHigherBMI = markBMI > johnBMI;
console.log("Mark BMI higher than John:", markHigherBMI);

console.log("TEST DATA 2")
// Update Mark's weight and height
markHeight = 1.88;
markWeight = 95;
// Recalculate Mark's BMI
markBMI = markWeight / markHeight ** 2;
console.log(`Mark's BMI ${markBMI}`);

// Update John's weight and height
johnHeight = 1.76;
johnWeight = 85;
// Recalculate John's BMI
johnBMI = johnWeight / johnHeight ** 2;
console.log("John's BMI", johnBMI);

// Recompare Mark and John BMI
markHigherBMI = markBMI > johnBMI;
console.log("Mark BMI higher than John?", markHigherBMI);

// Operator coersion
let n = "1" + 1;
n = n - 1;
console.log(n);


let age = "18";

console.log(age === 18);
console.log(age == 18);

const favorite = Number(prompt("Enter your favorite number"));
console.log(favorite);