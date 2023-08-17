"use strict";
// PUSH use to add string and number in last array. And POP use to delete in last.
//  var names = ["Ali", "Mateen"]
// names.push("Rameez") //here we add Rameez in last.
// console.log(names) //output is Ali, Mateen, Rameez
//------------------------------/
// var names = ["Ali", "Mateen"]
// names.pop();
// console.log(names) //output is Ali
//--------------------/
// SHIFT is used to remove first element in array. And UNSHIFT used to add first element in array.
// var names = ["Ali", "Mateen"]
// names.shift();
// console.log(names) //output is Mateen
//--------------------/
// var names = ["Ali", "Mateen"]
// names.unshift("Rameez");
// console.log(names) //'Rameez', 'Ali', 'Mateen'
//------------------/
//SPLICE is used to remove and add any element jahan se marzi.
// var names = ["Ali", "Rameez"]
// names.splice(1,0,"Mateen") //here 1 mean to add here in array and 0 mean not remove element in array.
// console.log(names) //'Ali', 'Mateen', 'Rameez'
var names = ["Ali", "Mateen", "Rameez"];
names.splice(0, 1);
console.log(names);
