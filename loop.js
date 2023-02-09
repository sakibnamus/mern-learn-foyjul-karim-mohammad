// -------------------------------- 7
let x = 10;
while(x < 0 ){
    console.log(x);
    x++;
}
// Now For In Concept 
j = {
    name : "mern",
    type : 'course',
    lang : "js",
}

console.log("-------------------------------- Print All Keys of J Array");
for(let k in j){ // k means keys .. 
    console.log(k); // print all keys .. 
}
/*
for (let v of j) // v means values 
{
    console.log(v); // print all values 
    // keys gula she iterate korte pare .. kintu value gula she iterate korte
    // pare na ... 
}
*/
// print values of Arr 
console.log("-------------------------------------Print Values of Arr");
arr = [10, 20, 30];
for (let value of arr){
    console.log(value);
}

// ekhon jodi duita jinish ke merge kori .. 
// mane key value duita kei print korte chai .. 

console.log("-------------------------------- Print All Values of J Array");
for(let k in j){ // k means keys .. 
    console.log(j[k]); // print all values  .. 
}

j["Phone"] = "123";

console.log("-------------------------------- Print All Values of J Array after assign phone = 123");
for(let k in j){ // k means keys .. 
    console.log(j[k]); // print all values  .. after assign phone = 123 
}

/**
 * basic ... 
 * 
 * Iterable thing  -> For of 
 * Object          -> For in 
 */
