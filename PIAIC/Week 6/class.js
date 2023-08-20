"use strict";
// write a program in typescript, take value 1-100 in even number and print sum.
var sum = 0;
var array = [];
for (var i = 1; i < 100; i++) {
    if (i % 2 == 0) {
        sum = sum + i;
        array.push(i);
    }
}
console.log(sum, array);
