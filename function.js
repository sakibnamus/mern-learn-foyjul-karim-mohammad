// Function Declaration 
/**
 * named function
 * variable function 
 * arrow function 
 * inline arrow function  
 *  Minimal function  
 * Return data
 * return function 
 * 
 * execution 
 * 
 * function call 
 * self executing function
 * 
 * scope 
 * nested function 
 * how to give input to a function 
 * Arguments 
 */
function function1(){ // Declaration .. 
    console.log(Date.now()); // Date hocche ekta built in class 
}
// calling 
function1();
// create a function and store it into a variable 
const now  = function () {
    console.log(Date.now());
}
now(); // now function ta call korleo .. same kaj korbe .. 

// named function er scoping style different 

// arrow function 
const arrowFunction = () => {
    // function er body 
    // variable na dile .. call korbo kivabe .. 
    console.log("test arrow function ");
}
arrowFunction(); // arrow function calling .. 

// inline arrow function 
const calculation = (num, fn) => {
    let result  = 0;
    for(let i = 0; i < num ; i++){
        let temp = fn(i);
        result +=temp;
    }
    return result;
}
console.log("inline function")
const sum = calculation(10, (x) => x+x );
console.log("SUM calculation function  = ", sum);

const multiplication = calculation(10, (x) => x*x ); // inline function
console.log("MULTIPLICATION calculation function  = ", multiplication);

// minimul function 
console.log("minimal function ");
() => 10; // ei function ta shob shomoy 10 return korbe .. 
(x) => x*x; // x pathaile .. x*x return korbe .. 

const square = (x) => x*x;
console.log("square function =>minimal funciton => ", square(10));

// function
const square2 = (x) => {
    return fn  = function () {
        return x*x;
    }
    return fn;
}


console.log("square2(10) ... this returns function body ", square2(10)); // it returns function body .. not result ..

console.log("square2(10)() ... this returns result ", square2(10)()); // eita result return kore .. 


// self executing function
(() => {return new Date();})() // she nijei ekta return statement hoye gese .. 
(new Date());  // 

//--------------------- lecture ---------------------------------------- 9
console.log("function started ");

var m = { x: 10 };
function change() {
    var m = { x: 20 }; // evabe change korle bairer jinish change hobe na ..
    console.log("value of m  inside function: ", m);
}
// function call
change();
console.log("value of m  outside function: ", m);

// object ta ke dot diye dhorte gele .. sheta reference hobe ..

function change2(n) {
    n.x = 30; // evabe change korle bairer jinish o change hoye jabe
    console.log("value of m  inside function: ", m);
}

change2(m);
console.log("value of m  outside function: ", m);

//////////////////////////////////////////////////
function inputType({ name }) {
    // receiver
    console.log("print name : ", name);
}

inputType({ name: "hello" }); // sender
console.log("=------------------------------------------");

function inputType2({ name, age, ...rest }) {
    // receiver // rest mane baki shob kichu // baki shob parameter .. she ekta array baniye rest er moddhe
    // set kore dibe ..
    console.log("print name : ", name);
    console.log("print age : ", age);
    console.log("print rest : ", rest);
    console.log("..................................................");
    console.log("arguments", arguments);
}

inputType2({
    name: "hello",
    age: "3",
    subject1: "bangla",
    subject2: "english",
}); // sender

console.log("--------------------------------------------------");

// arguments hocche built in types ..
