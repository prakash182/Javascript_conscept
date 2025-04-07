let age = 23; // it is a number 

console.log(typeof('' + age)); // it is conversion from number to string
console.log(String(age));


let name = "123"; // it is a string

console.log(typeof(parseInt(name))); // it is conversion from string to number
console.log(Number(name));


let num = 123.7;
console.log(typeof(parseFloat(num)));


let score = "232sdx";

let ValueInNumber = Number(score);

console.log(typeof(ValueInNumber));

console.log(ValueInNumber);

//  true => 1,    false => 0
// "" => false
// "prakash" => true

let pass = "prakash";

console.log(typeof(Boolean(pass)));


// ****************************************************operations********************************************************************



let value = 3;

let nagetaiveNumber = - value;

console.log(nagetaiveNumber);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2);

console.log(2 + "2");

console.log("2" + 2);

console.log("2" + "2");

console.log(1 + 2 + "3");

console.log("2" + 1 + 2);


let num1, num2, num3 ; 
num1 = num2 = num3 = 2+2 // it is wring way to declare, please ensure that try to code write in readability way

let gameCounter = 100;
gameCounter++; //postfix
console.log(gameCounter); // 101

++gameCounter; //prefix
console.log(gameCounter); //101

//postfix and prefix both are different => check difference on MDN




