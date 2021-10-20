// variables
// do NOT use var

var doNOTUse = true; // var falls out of scope a lot

let value = "I am a string"
console.log (value) //var is initialized with a value of undefined, vs let and const do not have an initialized value

value = "I am still a string."
console.log(value)

const value2 = "This is also a string"
console.log(value2)
// cannot reassign this like let
// value2 = "cannot do this"
//console.log(value2)

//Conditionals aka if else statements

if (doNOTUse === true) {
    console.log("Don't use VAR!")
} else {
    console.log("Why not?")
}

//type coercion

let foo =13;
let bar = "13";

console.log(foo == bar);
console.log (foo === bar);

//fist will run true but second will be false. ==== looks for type and value. One is a string and one is not so therefore
// they are not the same

// Functions

function doSomething (parameter, parameter2) {
    return parameter + " and " + parameter2 + " are the answer to life."
}
console.log(doSomething("Pizza", "donuts"))

const doSomethingElse = (parameter) => parameter + " is the answer to life."
// line 44 and line 39 are doing the same thing

//FizzBuzz - loops through array of numbers, certain numbers output fizz and other numbers output buzz

/*
If divisible by 3, fizz
If divisible by 5, buzz
If divisible by both FizzBuzz
*/


function fizzBuzz() {
    for (let i = 1; i < 101; i++) {
        if(i % 15 === 0) {
            console.log("FizzBuzz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();

//Event Handlers
//button

function displayMessage () {
    alert("Hello there!")
}

document.getElementById("fireEvent").addEventListener('click', displayMessage);

