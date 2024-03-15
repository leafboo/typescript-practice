"use strict";
// Basic Types
let id = 5;
let company = 'Google';
let isRested = true;
let x = "yes'nt";
x = true;
// tuple 
let person = [1, "br", true];
let employee;
employee = [
    {
        id: 1,
        firstName: "sam"
    },
    {
        id: 2,
        firstName: "John"
    }
];
// Union
let pid;
pid = 12;
pid = "E36aUo";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 3] = "Up";
    Direction1[Direction1["Down"] = 4] = "Down";
    Direction1[Direction1["Left"] = 5] = "Left";
    Direction1[Direction1["Right"] = 6] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
for (const direction in Direction1) {
    if (Number(direction)) {
        console.log(direction);
    }
}
const user = {
    id: 1,
    name: 'John'
};
// Type Assertion
let cid = 1;
let customerId = cid;
