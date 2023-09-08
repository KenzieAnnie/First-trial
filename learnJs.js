var a = 5;
var b = 10;
var c = "I am a";
console.log(a)
a = a + 1;
b = b + 5;
c = c + " String!";
console.log(a)


var difference = 45 - 10;
console.log(difference)

var myVar = 21;
myVar = myVar + 2;
console.log(myVar)

var myDecimal = 0.123 * 200;

console.log(myDecimal)

var remainder;
remainder = 11 % 3;
console.log(remainder)

// Indexing

var firstName = "Ekenedilichukwu";
var firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName)

var lastLetterOfFirstName = firstName[firstName.length - 1];
console.log(lastLetterOfFirstName)

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = " "
    result += "The " + " " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb

    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"))

var myFirstName = "Ekenedilichukwu ";
var myLastName = "Ojukwu";
console.log(myFirstName + myLastName)

//Escape Character

var myStr = "I am a \"double quoted\" string inside a \"double quote\"";
console.log(myStr)

var Str = "myFirstName\n\t\mySecondName\nmyThirdName";
console.log(Str)

//Concactenating Strings

var bothStr = "My name is " + myFirstName + " Ojukwu";
console.log(bothStr)

var ourStr = "From prison ";
ourStr += "to palace";
console.log(ourStr)

var anAdj = "fun!";
var loveMath = "I love Math. It's ";
loveMath += anAdj

console.log(loveMath)

//Finding the length of a String

console.log(myFirstName.length)



//Bracket notation character indexing

var firstLetterOfFirstName = myFirstName[0];
console.log(firstLetterOfFirstName)

var thirdLetterOfLastName = myLastName[3];
console.log(thirdLetterOfLastName)

var lastLetterOfFirstName = myFirstName[myFirstName.length - 1];
console.log(lastLetterOfFirstName)
// It'll be .length -1 because we start counting from 0

// Write re-usable code with Functions
function myReusableFunction() {
    console.log("Hey, World");

}

myReusableFunction();
myReusableFunction();
myReusableFunction();

// Passing Values to functions with Arguments i.e Parameters

function ourFunctionWithArgs(a, b) {
    console.log(a * b);

}
ourFunctionWithArgs(10, 523)
ourFunctionWithArgs(52, 78)

// Global Scope & Functions (Can be seen everywhere in the JS code)
// Local Scope & Function (only Visible within the function. If the variable is run outside the function, there would be an error)

// Global vs. Local Scope in Functions (Local variables take
// precedents over global)

var outerWear = "T-Shirt";

function myOutfit() {

    return outerWear

}

console.log(myOutfit());
// This returns T-Shirt   (Global)

function myOutfit() {
    var outerWear = "Sweater"
    return outerWear
}

console.log(myOutfit())
// This returns Sweater   (Local takes preceedent in the function)

console.log(outerWear)
// This returns the global variable T-Shirt


// Return a Value from a Function with return
function minusSeven(num) {
    return num - 7

}
console.log(minusSeven(20));

function GTS(childsName) {
    return childsName + " goes to school"

}
console.log(GTS("Ayden"));
console.log(GTS("Obi"))

// Understanding Undefined Value Returned from a Function
// i.e, if 

// Assigning a returned value to a variable

var changed = 0;

function change(num) {
    return (num + 115) / 15
}

changed = change(254);
console.log(changed);


var processed = 0;

function processArg(x) {
    return (x * x) + x - 2
}

processed = processArg

console.log(processed(4));

// Simulating a queue i.e Stand in Line
// JSON.stringify changes an array to a string

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + testArr);

console.log("Before: " + JSON.stringify(testArr));


function nextInLine(arr, item) {
    arr.push(item)
    return arr.shift()
}

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 8));

console.log("After: " + JSON.stringify(testArr));


console.log(nextInLine(testArr, 9));

console.log("After: " + JSON.stringify(testArr));

// Boolean
function welcomeToCanada(){
    return false;
}

// If statement
function quizBank(isItTrue){
    if(isItTrue){
        return "Yes, that's true";
    }
    return "No, that's false";
}

console.log("Is Nigeria in North America? " + quizBank(false));

function val(answer){
    // Single equal sign is an assignment operator, hence the double equal sign
    if(answer == 12){
        return "Correct"
    }
    return "Incorrect"
}
console.log(val(15));

    // Strict equal operator = triple equal sign (===)
    // 3 == 3 or 3 == "3" (is 3)    
    // But 3 === 3 (is 3); 3 === "3" (is NOT 3)     i.e === doesn't do type conversion
    // not equal is !=
    // strict not equal is !==
var a = 100
var b = 4
console.log((a*3)/4);

// Check if 2 things are true at the same time

function testLogicalNestedIf(val){
    // Nested if Statement
    if (val <=50 ){
        if(val >= 25){
            return "Yes"
        }
    }
    return "No"
}
console.log(testLogicalNestedIf(23));
console.log(testLogicalNestedIf(25));
console.log(testLogicalNestedIf(50));

function testLogicalAnd(val){
    // And Statement
    if (val <=50 && val >= 25){
            return "Yes"
        }
    
    return "No"
}
console.log(testLogicalAnd(23));
console.log(testLogicalAnd(25));
console.log(testLogicalAnd(50));

function testLogicalElse(val){
    // Nested if Statement
    if (val < 10 ){
        return "Less than 10"
    }
    else if (val > 15){
        return "Greater than 15"
    }
    else {
        return "Between 10 & 15"
    }
}
console.log(testLogicalElse(15));
console.log(testLogicalElse(0.5));
console.log(testLogicalElse(17.25));

// Order in Else if statements

function orderInElse(num){
    if (num < 10){
        return "Less than 10"
    }
    else if (num < 5){
        return "Less than 5"
    }
    else {
        return "Greater than or equal to 10"
    }
    
    
}

console.log(orderInElse(7));
console.log(orderInElse(3));
// Once the first condition is met, it doesn't check the others
// So, be careful of the order.
function properOrderInElse(num){
    if (num < 5){
        return "Less than 5"
    }
    else if (num < 10){
        return "Less than 10"
    }
    else {
        return "Greater than or equal to 10"
    }
    
    
}

console.log(properOrderInElse(7));
console.log(properOrderInElse(3));


var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go, Home!"]
function golfScore(par, strokes){
    if (strokes == 1){
        return names[0]
    } else if (strokes <= par - 2){
        return names[1]
    } else if (strokes == par - 1){
        return names[2]
    } else if (strokes == par ){
        return names[3]
    } else if (strokes == par + 1){
        return names[4]
    } else if (strokes == par + 2){
        return names[5]
    } else if (strokes == par + 3){
        return names[6]
    }

}

// What is par???????

console.log(golfScore(5, 1));
console.log(golfScore(5, 3));
console.log(golfScore(4, 1));
console.log(golfScore(4, 2));

// Switch statements in place of chained else if statements

function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1: 
          answer = "alpha"
          break;
        case 2:
          answer = "beta"
          break;
        case 3:
          answer = "gamma" 
          break;
        case 4:
          answer = "phi"
          break;

    }
    return answer;
}

console.log(caseInSwitch(2));





