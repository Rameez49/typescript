"use strict";
// Qno 9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
// var fNum = 13;
// console.log(`My Favourite Number is = ${fNum}`)
// Qno 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// Qno 11.Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
// var names : String[] = ["Rameez", "Usman", "Faizan"]
// console.log(`First Friend ${names[0]} \n ${names[1]} \n ${names[2]}`)
// Qno 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// var names : String[] = ["Rameez", "Usman", "Faizan"]
// var Print = " is my best friend"
// console.log(names[0], Print, "\n" ,names[1], Print,"\n", names[2],Print);
// Qno 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// var array = ["Motorcycle", "Car","Heavy Bike"];
// var Print = "I would like to own a";
// console.log(Print, array[0],"\n",Print , array[1])
// Qno 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// var invitation = ["Usman","Faizan", "Ahmad"];
// var message = "I would like to invite for dinner";
// console.log(message, invitation[0], "\n", message, invitation[1],"\n", message, invitation[2])
// Qno 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// This program invites three people to dinner
const guests = ["Albert Einstein", "Stephen Hawking", "Marie Curie"];
for (const guest of guests) {
    console.log(`Dear ${guest}, I would like to invite you to dinner.`);
}
