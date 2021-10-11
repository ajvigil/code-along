//3 different ways to write functions
//use when declaring a function
function myFunction (argument) {
    console.log(argument)
}

// use when this function is inside a variable
myOtherFunction = function (argument){
    console.log(argument)
}

// shorthand but the same thing
myArrowFunction = (argument) => {
    console.log(argument)
}
// if only one argument you can leave off the parenthesis.
//if the body is more than one line than you have to have the curly braces
myShorterArrowFunction = argument => console.log(argument)