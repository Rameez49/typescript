"use strict";
// Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
var temperature = 0;
if (temperature <= 0 && temperature <= 10) {
    console.log(`Wear warm clothes because temperature is = ${temperature}`);
}
else if (temperature > 10 && temperature < 25) {
    console.log(`Temperature is normal so dont worry`);
}
else if (temperature > 26) {
    console.log(`Temperature is so hot because temperature is ${temperature}`);
}
else
    (`Invalid Temperatur`);
