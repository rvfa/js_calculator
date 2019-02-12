console.log("hello"); // check if file is linked

var output = document.getElementById('output'); // this is the output field

// these are the number buttons
var num7 = document.getElementById('num7');
var num8 = document.getElementById('num8');
var num9 = document.getElementById('num9');
var num4 = document.getElementById('num4');
var num5 = document.getElementById('num5');
var num6 = document.getElementById('num6');
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var num3 = document.getElementById('num3');
var num0 = document.getElementById('num0');

// these are the operators buttons
var add = document.getElementById('add');
var sub = document.getElementById('subtract');
var multiply = document.getElementById('multiply');
var divide = document.getElementById('divide');
var decimal = document.getElementById('decimal');

// these are the other buttons
var result = document.getElementById('result');
var clear = document.getElementById('clear');

// This is a regular expression that checks if there's anything
// besides numbers and opertors in the input field.
// It is later used in a function.
var errorPattern = /([^0-9+\-*/\.])/g;

// This function checks for the last input. It is used later to
// check if it is an operator.
// You can't add more operators or get a result if the last input was an operator
function getLastInput() {
    var lastInput = output.value[output.value.length - 1];
    return lastInput;
}


// These functions bellow add eventListeners for each number and operator
num7.addEventListener("click", function() {
    output.value += '7';
})

num8.addEventListener("click", function() {
    output.value += '8';
})

num9.addEventListener("click", function() {
    output.value += '9';
})

num4.addEventListener("click", function() {
    output.value += '4';
})

num5.addEventListener("click", function() {
    output.value += '5';
})

num6.addEventListener("click", function() {
    output.value += '6';
})

num1.addEventListener("click", function() {
    output.value += '1';
})

num2.addEventListener("click", function() {
    output.value += '2';
})

num3.addEventListener("click", function() {
    output.value += '3';
})

num0.addEventListener("click", function() {
    output.value += '0';
})

// eventListeners for operators
add.addEventListener('click', function() {
    // checks if the last input was an operator. If it is, no new operators will
    // be added. This is also used for the functions bellow
    if (getLastInput() == '+' || getLastInput() == '-' || getLastInput() == '*' || getLastInput() == '/') {
        output.value += "";
    } else {
        output.value += "+";
    } // closes the if/else
}) // closes the eventListener

sub.addEventListener('click', function() {
    if (getLastInput() == '+' || getLastInput() == '-' || getLastInput() == '*' || getLastInput() == '/') {
        output.value += "";
    } else {
        output.value += "-";
    } // closes the if/else
}) // closes the eventListener

multiply.addEventListener('click', function() {
    if (getLastInput() == '+' || getLastInput() == '-' || getLastInput() == '*' || getLastInput() == '/') {
        output.value += "";
    } else {
        output.value += "*";
    } // closes the if/else
}) // closes the eventListener

divide.addEventListener('click', function() {
    if (getLastInput() == '+' || getLastInput() == '-' || getLastInput() == '*' || getLastInput() == '/') {
        output.value += "";
    } else {
        output.value += "/";
    } // closes the if/else
}) // closes the eventListener

decimal.addEventListener('click', function() {
    if (getLastInput() == '.') {
        output.value += "";
    } else {
        output.value += ".";
    } // closes the if/else
}) // closes the eventListener

// eventListener for final result
result.addEventListener('click', function() {
    if (getLastInput() == '+' || getLastInput() == '-' || getLastInput() == '*' || getLastInput() == '/') {
        output.value += "";
    } else if (errorPattern.test(output.value) == true ) {
        // Since you can type instead of clicking buttons, this checks for anything that
        // is not a number or operator. If it finds anything, you get an alert
        alert('Only numbers and operators \(\+, \-, \*, \/\) accepted');
    } else {
        // This evaluates the string in output.value
        output.value = eval(output.value);
    } // closes the if/else
}) // closes the eventListener


// clears the output value
clear.addEventListener('click', function() {
    output.value = "";
})



// These were the resources used as inspiration for this project

// for the regex
// https://regexr.com/
// https://www.w3schools.com/js/js_regexp.asp

// basic calculator functionality
// https://codepen.io/joshsmith01/pen/viotJ?editors=1010
// https://codepen.io/lalwanivikas/pen/eZxjqo
