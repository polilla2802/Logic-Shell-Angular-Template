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

age = 26;
// console.log(age);
var age;

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
fn1();

// add button to html using .this //

var button = document.querySelector('button');

// arrow function //
var fnbutton = () => console.log(this);
fn2();
// both refer to the global context //

button.addEventListener('click',fnbutton);

