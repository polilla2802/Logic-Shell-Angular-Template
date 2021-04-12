/// 1. Variables let && var (Scope) ///
let pokemon = "pikachu";
if (true) {
  let pokemon = "pichu";
  // console.log(pokemon);
}
pokemon = "raichu";
// console.log(pokemon);

/// 2. const ///
const WIZARD = "Harry Potter";

// cannot change const //
// WIZARD = "Ron Weasley";

// console.log(WIZARD);

const SPELLS = ["patronum", "wingardium", "abracadabra"];
// console.log(SPELLS);

// arrays can be changed because they are reference types (holds a pointer to the array) //
SPELLS.push("alojomora");
// console.log(SPELLS);

// also objects //
const pokemon1 = {
  name: "latios",
  type: "dragon",
  level: 42,
};

// console.log(pokemon1.name);

pokemon1.name = "latias";

// console.log(pokemon1.name);

/// 3. Hoisting ///
// hoisting is to asign a variable even if it is no declared first //

count = 26;
// console.log(count);
var count;

// it works diferent with let and const //

var hoisting = () => (pesos = 5);
let pesos;
hoisting();

// console.log(pesos);

/// 4. Arrow Functions ///

// without arguments //

var fn = () => {
  let a = 2;
  let b = 2;
  return a + b;
};

// console.log(fn());

// with arguments //

var fc = (a, b) => a + b;

// console.log(fc(2, +2));

// without parenthesis //

// if only one argument is provided you can write it without parenthesis //
// DOESNT WORK WITH TYPESCRIPT //

// var ft = c => c + 5;
// console.log(ft(4));

// setTimeout as an arrow function //

// setTimeout(() => console.log("timeout"), 1000);

/// 5. this keyword ///

// named function //
function fn1() {
  console.log(this);
}
// fn1();

// arrow function //
var fnbutton = () => console.log(this);
// fnbutton();

// both named and arrow refer to the global context //

// add button to html using .this //

// var button = document.querySelector('button');

// button.addEventListener('click',fn1);

// named function refers to the element (button) element depending where the function is called //

// button.addEventListener('click',fn1);

// arrow function refers to the context where the function is declared //

/// 6. Functions and default parameters ///

let a = 100;
function isEqualTo(number, compare = a){
  console.log(number);
  console.log(compare);
  return number == compare;
}

// console.log(isEqualTo(10));

/// 7. Object Literal Extensions ///

// if you have variables with the same name as the object properties, it will take them as default // 
let diginame = "agumon";
let size = "small";

let digimon = {
  diginame,
  size,
  greet(){
    console.log(this.diginame);
  },
  level: 32 // they can still be overwritten if defined inside the object // 
};

// digimon.greet();

// Personalized object property name //

let animal = {
  "animal name": "owl",
  size,
  "personalized function"(){
    console.log(animal["animal name"]);
  },
  level: 32 // they can still be overwritten if defined inside the object // 
};

// animal["personalized function"]();

// Dynamic Fields //
let age = 25;
let ageField = "age";

let job = {
  job: "progammer",
  salary: 11000,
  [ageField]:32
};
console.log(job);
console.log(job.age);
console.log(job[ageField]);
console.log(job["age"]);