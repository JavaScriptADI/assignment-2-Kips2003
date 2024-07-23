//  assignement N2

// #1

let str = "giorgi";

console.log(str);


// #2 

// "5" is assaigned as string and 5 is assaigned as number

console.log("5" + 5);

// in other porgramming languages this code will be error
// but in javascript it will output "55";



// #3

let num = 11;

console.log(num);

// #4

let bool = true;

console.log(bool);

// #5

// if we need to get boolean result, we need to use boolean functions
// it can be made by this operators : &&, ||, !=, ==, <, >, <=, >=;

console.log(5 < 7 );

console.log(5 > 7);


// #6

let hello = "Hello";

console.log(hello.toUpperCase());

// #7

let world = "World";

console.log(world.toLowerCase());

// #8

// let text = 'Hello';
// text.toUpperCase();
// console.log(text);

// before the value for text is 'Hello' and after .toUpperCase Method it will be "HELLO"


// #9

// let text;
// console.log(text);

// in this case text will be undefined, because it cant detect which type it is


// #10

// let text = 'Hello';
// console.log(text.toLowercase());

// in this code error should be .toLowercase Method, because it should be .toLowerCase()
// method and varable names are Case Sensitive


// #11

// let age = prompt('How old are you?');
// let nextAge = age + 1;
// console.log(`Next year you will be ${nextAge}`);

// this is the code which needs to be changed;

let age = prompt(`How old are you?`);
age = Number(age);
let nextAge = age + 1;
console.log(`Next year you will be ${nextAge}`);

// this is the solution


// #12

let name = prompt('What is your name?');
let age1 = Number(prompt('How old are you?'));
let isInSixties;
let isINSixtiesBoolAlpha;
if(age1 > 60){
    isInSixties = true;
    isINSixtiesBoolAlpha = "Yes";
}
else{
    isInSixties = false;
    isINSixtiesBoolAlpha = "No"
}
console.log(`${name} is in sixties: ${isINSixtiesBoolAlpha}`);


// #13

// let x = 5;
// console.log(x++);
// console.log(x);

// the value should be 6


// #14


// let y = 5;
// console.log(++y);
// console.log(y);

// the value of y should be 6


// #15

// increment and decrement operrators
// x++ is increment which will add 1 to the value
// and x-- is decrement which will subtract 1 to the value


// #16

// the differance between x++ and ++x
// if console.log x++ the value will not change 
// the value will be changed after executing
// and for ++x the value will be change right away
// in other words the difference is execution order


// #17

// if we declare variable without any value it will automatically be undeclared 


// #18

console.log(10 == 10);
console.log(10 == 11);

// #19

console.log(10 != 10);
console.log(10 != 11);

// #20

// when someone writes programming language he should define what the opperators can do
// it can have differant meanings, it depends on how will that person declares it
// like in c++ you can overload operrators
// i dont remmember well but it was like this
// ostream opperator+()
// after that you could declare what the opperator should do
// in the javascript + opperator is declared like this
// when the numer is added to the string, the number will be casted into string
// and the reasolt will be string
// but in many languages this would be an error