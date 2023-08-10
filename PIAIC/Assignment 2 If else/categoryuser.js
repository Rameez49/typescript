"use strict";
// Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
var userAge = 23;
if (userAge >= 0 && userAge <= 12) {
    console.log(`Your age = ${userAge}, So you are "Child"`);
}
else if (userAge >= 13 && userAge <= 19) {
    console.log(`Your age = ${userAge}, So you are "Teenager"`);
}
else if (userAge >= 20) {
    console.log(`Your Age = ${userAge}, so you are "Adult"`);
}
else {
    console.log("Please Enter Valid Age");
}
