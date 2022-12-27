// -------------------- 11
// this means .. immediate parent context

// annonymous function e this diye parent kichu ke access kora jabe na ..

name2 = "awesomeness2";
c1 = {
    name: "MERN",
    lang: "javascript",
    getDetails: function () {
        name = "MERN 2 ";
        return "Names 🔴" + name + " 🔴 " + this.name + " 🔴 " + name2;
    },
    getDetails2: () => {
        name = "MERN 3 ";
        return `Names 2 : 🔵 ${name} 🔵  ${this.name} 🔵  ${name2}`;
        // this diye immediate parent er variable access kora jabe na arrow function e
    },
};
console.log("this is C1", c1);
console.log("------------------------------------------------------------");
console.log(c1.getDetails()); // object er function ta call korlam
console.log(c1.getDetails2());

console.log("==============================================================");

c2 = {
    name: "MERN",
    lang: "javascript",
    getDetails: function () {
        name = "MERN 2 ";
        return "Names 🔴" + name + " 🔴 " + this.name + " 🔴 " + name2;
    },
    getDetails2: function () {
        // instead of string .. we will return JSON

        return {
            name: "MERN 4",
            getDetails3: function () {
                name = "MERN 3 ";
                return "Names 🔴" + name + " 🔴 " + this.name + " 🔴 " + name2;
            },
        };
    },
};
console.log("this is C2", c2);
console.log("inner inner function from C2", c2.getDetails2().getDetails3());
