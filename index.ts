import inquirer from "inquirer";

//Basic Function


function halfFryEgg () {
    let cooked = 1 + 1.5 +2;
    //Egg + Butter + Salt
    console.log(cooked);
}
halfFryEgg();

//Returning Function Value

function halfFryEgg2 (): number {
    let cooked = 1 + 1.5 +2;
    //Egg + Butter + Salt
    return cooked
}
let result: number = halfFryEgg2();
console.log(result);

//Fuctions With Parameters

function halfFryEgg3 (egg: number, butter: number, salt: number):number {
    return egg + butter + salt;
}

let response: number = halfFryEgg3(1, 1.5, 2)
console.log(response);

//Add Numbers

function addNumbers (a: number, b: number):number {
    return a + b;
}
let sum: number = addNumbers(3, 3)
console.log(sum);

//Calculate Area

function calculateArea (height: number, width: number):number {
    return height * width;
}
let calculation: number = calculateArea(50, 100);

//Default Parameters

function halfFryEgg4 (egg: number = 1, butter: number = 1.5, salt: number = 2) {
    return egg + butter + salt;
}
let response2: number = halfFryEgg4(1, 1.5, 3);
console.log(response2);

//Rest Parameters
function halfFryEgg5 (egg: number = 1, ...ingredients: number[]) {
    console.log(egg);
    console.log(ingredients);
}
halfFryEgg5(1, 1.5, 2, 5);

//Spread Operator

function halfFryEgg6 (egg: number = 1, ...ingredients: number[]) {
    console.log(egg);
    console.log(...ingredients);
}
halfFryEgg5(1, 1.5, 2, 5);

//Arrow Functions

let halfFryEgg7 = () => 1 + 1.5 + 2;
                    //egg + butter + salt;
let response3: number = halfFryEgg7()
console.log(response3);

//2nd Example;

let halfFryEgg8 = (egg: number, butter: number, salt: number): number => (
    egg + butter + salt
)
let response4: number = halfFryEgg8(1, 1.5, 2)
console.log(response4);

//3rd Example:

let halfFryEgg9 = () => { return 1 + 1.5 +3};

let response5: number = halfFryEgg9();
console.log(response5);

//4th Example:

let halfFryEgg10 = () => {
    let cooked2 = 1 + 1.5 + 3;
    return cooked2
};
let response6: number = halfFryEgg10();
console.log(response6);

//5th Example:

let halfFryEgg11 = (egg: number, butter: number, salt: number): number => {
    let cooked3 = egg + butter + salt;
    return cooked3
};
let response7 = halfFryEgg11(1, 1.5, 3);
console.log(response7);

//Variables Scope:
let globalVar = "Accessible everywhere";

function showExample () {
    let localVar = "Accessible only inside this function";
    console.log(globalVar); //Works
}
//console.log(localVar); //Error : localVar is not defined.

//Anonymous Function:
let halfFryEgg12 = function () {
    let cooked4 = 1 + 1.5 + 2;
    console.log(cooked4);
}
halfFryEgg12();

//Immediately Invoked Function Expression (IIFE):

(function() {
    console.log("Runs Immediately");
})();

//Recursive Function:

function countDown (number: number): void {
    if (number <= 0) {
        console.log("Done !");
        return;
    }
    console.log(number);
    countDown(number - 1);
}
countDown(5);

// Another Recursive:

function factorial (n: number): number {
    if (n === 0) {
        return 1;
    }
    return n * factorial (n - 1);
}
let response8 = factorial (5);
console.log(response8);

//Nested Functions:

function outerFunction() {
    const innerFunction = function () {
        console.log("Hello from inside");
    }
    innerFunction();
}
outerFunction();

//Function Callbacks:

function processUserInput (callback: (name: string) => void) {
    let name = "Sir Ameen Alam";
    callback(name);
}
processUserInput(function(name:string) {
    console.log("Hello, " + name);
});

// Set Timeout:

setTimeout(() => {
    console.log("Cake is ready!");    
}, 2000);

// Self-Check Quiz:

let input1 = await inquirer.prompt([{
    name: "userAnswer",
    type: "input",
    message: "What is the capital of france ?"
}]);
function quiz(question: string, correctAnswer: string) {
    if(input1.userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        console.log("Correct!");
} else {
    console.log("Wrong Answer. Try Again !");
}
}
quiz("What is the capital of france?", "paris");

