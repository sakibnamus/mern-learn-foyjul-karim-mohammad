// 10
/**
 * 1. Length
 * 2. isArray (alternative :  instanceof )
 *
 */
let arr = [1, 2, 3, 4, 5];
console.log("arr.length : ", arr.length); // 5
const createArray = Array.from("simple");
console.log("createArray : ", createArray);

console.log(
    "Array class er instance kina sheta check kortesi : ",
    arr instanceof Array
);

console.log(
    "Array class er instance kina sheta check kortesi : ",
    createArray instanceof Array
);

const isGreater = (x) => x > 20;
arr = [1, 5, 10, 25, 35];
resultArray = arr.filter(isGreater);
console.log("resultArray : ", resultArray);

resultArray1 = arr.filter((x) => x < 10);
console.log("resultArray1 : ", resultArray1); // new array create hoyeche ..

resultArray1 = arr.find((x) => x < 10);
console.log("resultArray1 : ", resultArray1); // prothom jeta pabe sheta amader ke return korbe

resultArray1 = arr.map((x) => x < 10);
console.log("resultArray1 : ", resultArray1); // proti ta element er upor e she kaj kore ..
// ekta result er array create korbe ..

const arr1 = [3, 3];
resultArray1 = arr1.reduce(
    (prevValue, currentValue) => prevValue + currentValue,
    0
); // last e initial value dilam ..
console.log("resultArray1 : ", resultArray1); // ekta value evaluate kore .. new ekta value produce kore

// baki gula practice kore felte hobe ..
