"use strict";

callBeforeDefinition("Testing");
function callBeforeDefinition(argument)
{
    console.log(`Succeed! Argument is ${argument}`);
}

//error
//logger('Test Before');

// function as expression
const logger = function (value)
{
    console.log(value);
}
logger('This is function expression');
logger(typeof(logger));

// arrow functions
const arrowLogger = (value, strict=false) => {
    if (strict && typeof(value) != "string") {
        console.log("Error");
        return;
    }
    console.log(value);
}
arrowLogger("Hello", true);
arrowLogger(23, true);

//Arrays
const friends = ['Vinlu', 'Bhesu', 'Bhundiyu'];
console.log(`My best friend is ${friends[0]}`);
// Add at back
friends.push('None');
console.log(friends.length);
// Add at front
friends.unshift("Vinludi");
console.log(friends);
// Remove back
friends.pop();
console.log(friends);
// Remove front
friends.shift();
console.log(friends);

//Objects
const parth = {
    firtName: "Parth",
    lastName: "Patel",
    age: 2090-2022,
    job: "Student",
    friends: ['Vinlu', 'Bhesu', 'Bhundiyu'],
    //function as property
    logger: function() {
        console.log(this);
    }
};
console.log(parth);
parth["college"] = "SJSU";
parth.logger();