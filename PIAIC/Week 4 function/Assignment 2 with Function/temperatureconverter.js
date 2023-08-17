"use strict";
// Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
function converttemp(Ctemp) {
    console.log(`Celcius to Farhenhite`);
    Ctemp = (Ctemp * 9 / 5) + 32;
    return Ctemp;
}
var CtoF = converttemp(32);
console.log(`${CtoF}F `);
