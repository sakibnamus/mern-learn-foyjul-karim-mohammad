// lecture ---------------------------------------- 9
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
