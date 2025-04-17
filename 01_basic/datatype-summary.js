// Primitive 

// 7 types : String, Number, Boolean, Null, Undefine, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = true;

const outsideTemp = null;

let userEmail =  undefined;

const id = Symbol('123')

const anotherId = Symbol('123');

console.log(id === anotherId);

const BigInt = 123232123112213n;



// Reference type (Non - Primitive) ==> jinka mamory me reference allocate kiya ja skta h 

// Array, Objects, Functions

const heros = ["shaktiman", "Spider-man"];

let myObjValue = {
    name : "hitesh", 
    age : 22,
}

const myFunction = function(){
    console.log("hello world");   
}  // function 

console.log(typeof BigInt);  // return type bigint
console.log(typeof myFunction); // return type function
console.log(typeof heros); // return type objet 
console.log(typeof  score); // return type number


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//Mamory - Concept

//Stack (Primitive), Heap(Non - Primitive)

let mySchool = "govt";                                                          // In stack mamory take the copy of value eg. ==>
                                                                                    
let myNewSchool = mySchool;

mySchool = "private";

console.log(myNewSchool);
console.log(mySchool);


let Information = {
    email : "prakash@gmail.com",
    upi : "prakash@payment"
}

let updateInformation = Information;

updateInformation.email = "pk@pytem";

console.log(updateInformation.email);
console.log( Information.email);

