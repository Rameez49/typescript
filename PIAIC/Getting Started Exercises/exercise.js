"use strict";
// Qno 1.) Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
// var stotreName:String = "Rameez Ul Hassan"
// console.log(`"Hello ${stotreName}, would you like to learn some python today?"`);
// Qno 3.) Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// var storeName:String= "Rameez Ul Hassan"
// var lowercase:String=storeName.toLowerCase()
// var upperCase:String=storeName.toUpperCase()
// var titleCase:String=storeName.toString()
// console.log(`Lowercase = `, lowercase);
// console.log(`Uppercase = `, upperCase);
// console.log(`Titlecase = `, titleCase);
// Qno 4.) Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
// var authorName:String = "Albert Einstein"
// var message:String= `"A person who never made a mistake never tried anything new."`
// console.log(`${authorName} once said, ${message}`);
// Qno 5.) Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
// var famous_person :String = "Albert Einstein"
// var message:String= `"A person who never made a mistake never tried anything new."`
// console.log(`${authorName} once said, ${message}`);
// Qno 6.) Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// var namewithWhiteSpace:String= "\t Rameez Ul Hassan \n"
// console.log(`Name with Whitespace Characteristics`);
// console.log(namewithWhiteSpace);
// var removeWhiteSpace:String=namewithWhiteSpace.trim()
// console.log(`Name remove Whitespace characteristics`);
// console.log(removeWhiteSpace);
// Qno 7.) Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// var addition= 4+4;
// console.log(`Addition = `,addition);
// var subtraction=12-4;
// console.log(`Subtraction = `,subtraction);
// var multiplication=4*2;
// console.log(`Multiplication = `,multiplication);
// var division=16/2;
// console.log(`Division = `,division);
// Qno 8.) You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
// console.log(5+3);
// console.log(12-4);
// console.log(4*2);
// console.log(16/2);
// Qno 9.) Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
// var favoriteNum:number= 5;
// var message=    `Your Favourite number is ${favoriteNum}`;
// console.log(message);
// Qno 11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
// var names:String[]= ["Rameez", "Ahmad", "Usman"]
// console.log(names[0],names[1],names[2]);
// Qno 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// var names:String[]= ["Rameez", "Ahmad", "Usman"]
//  var storeNames:String[]=names.map((value)=>{
//     console.log(value+ " is my best Friend");
//     return value 
//  })
// Qno 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// var favTransporation:String[]=["Motorcycle", "JHeavyBike","Car"]
// favTransporation.map((value)=>{
//     console.log(`I would like to own a ${value}`);
// })
// Qno 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// var names:String[]=["Rameez","Ahmad","Ali","Haseeb"]
// var message:String=", I would like to invite you in dinner"
// names.map((value)=>{
//     console.log(value,message);
// })
// Qno 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
// var names:String[]=["Rameez","Ahmad","Ali","Haseeb"]
// var message:String=", I would like to invite you in dinner"
// names.map((value)=>{
//     console.log(value,message);
// })
// var personNotCome:String="Haseeb";
// console.log(`\nUnfoetunately ${personNotCome}, not come in dinner\n`);
// names.pop();
// names.push("Javaid")
// names.map((value1)=>{
//     console.log(value1,message);
// })
// Qno 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// var names:String[]=["Rameez","Ahmad","Ali","Haseeb"]
// var message:String=", I would like to invite you in dinner"
// names.map((value)=>{
//     console.log(value,message);
// })
// var personNotCome:String="Haseeb";
// console.log(`\nUnfoetunately ${personNotCome}, not come in dinner\n`);
// names.pop();
// names.push("Javaid")
// names.map((value1)=>{
//     console.log(value1,message);
// })
// console.log(`\nNow Space is available for dinner and I want to invite some more people to dinner `);
// names.splice(0,0,"Abdullah")
// names.splice(names.length,0,"Faizan")
// names.splice(3,0,"Mateen")
// names.map((value2)=>{
//     console.log(value2,message);
// })
// Qno 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// var names:String[]=["Rameez","Ahmad","Ali","Haseeb"]
// var message:String=", I would like to invite you in dinner"
// names.map((value)=>{
//     console.log(value,message);
// })
// var personNotCome:String="Haseeb";
// console.log(`\nUnfoetunately ${personNotCome}, not come in dinner\n`);
// names.pop();
// names.push("Javaid")
// names.map((value1)=>{
//     console.log(value1,message);
// })
// console.log(`\nNow Space is available for dinner and I want to invite some more people to dinner `);
// names.splice(0,0,"Abdullah")
// names.splice(names.length,0,"Faizan")
// names.splice(3,0,"Mateen")
// names.map((value2)=>{
//     console.log(value2,message);
// })
// console.log(`Now i can Invite only two person`);
// Qno 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// var places:String[]=["Muree","Madinah","London","Azad Kashmir","Paris"]
// // places.sort();
// // use sort to print array in alphabetical order
// places.reverse();
// console.log(places);
//  ---------------------------
// Qno 20 Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// var countries:String[]=["Pakistan","China","India","Dubai",
// "Saudi Arabia","South Africa","England"
// ]
// countries.map((value,index)=>{
//     console.log(`${index+1}. ${value}`);
// })
// Qno 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// var someThing:{
//     Name:String;
//     Age:number;
//     Adress:String;
// } = {
// Name:"Rameez Ul Hassan",
// Age:19,
// Adress:"Malik Pur"
// }
// console.log(someThing.Name,"\n",someThing.Age,"\n",someThing.Adress);
// Qno 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// var array:number[]=[1,2,3,4]
// var invalidElement:number=10;
// var mainArray=array[invalidElement]
// if (mainArray==undefined){
//     console.log(`Error: index ${invalidElement} is out of bounds `)
// }
//     else {
//         console.log(`Element at index ${invalidElement}: ${mainArray}`);
//     }
// Qno 23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// let car = 'subaru';
// console.log(`Is car == 'subaru'? I predict True`);
// console.log(car == 'subaru');
// console.log(`Is car == 'honda'? I predict False`);
// console.log(car == 'honda');
// console.log(`Is car.lower()== 'subaru'? I predict True`);
// console.log(car.toLocaleLowerCase() =='subaru');
// console.log(`Is car.upper() == 'SUBARU'? I predict True`);
// console.log(car.toUpperCase()=='SUBARU');
// console.log(`Is car.length == '6'? I predict True`);
// console.log(car.length==6);
// console.log(`Is car.length== '10'? I predict False`);
// console.log(car.length==10);
// console.log(`Is car[0] == 's'? I predict True`);
// console.log(car[0]=='s');
// console.log(`Is car[0] == 'H'? I predict False`);
// console.log(car[0]=="H");
// console.log(`Is car == 'subaru' || car == 'honda'? I predict true`);
// console.log(car == 'subaru' || car == 'honda'); 
// console.log(`Is car == 'subaru' && car == 'honda'? I predict False`)
// console.log(car == 'subaru' && car == 'honda'); // False
// Qno 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
// var alien_color = "yellow";
// if (alien_color=='green'){
//     console.log(`You earned 5 points`);
// }
// else{
//     console.log(`Sorry you dont earned 5 points`);
// }
// Qno 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
// var alien_color = "yellow";
// if (alien_color=='green'){
//     console.log(`You earned 5 points`);
// }
// else{
//     console.log(`You just earned 10 points`);
// }
// Qno 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// var alien_color = "yellow";
// if (alien_color=='green'){
//     console.log(`You earned 5 points`);
// }
// else if(alien_color=='yellow'){
//     console.log(`You earned 10 points`);
// }
// else if(alien_color=='red'){
//     console.log(`You earned 15 points`);
// }
// else{
//     console.log(`Sorry you dont earned points`);
// }
// Qno 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
// var age = 2;
// if (age < 2){
//     console.log(`This person is baby because age = ${age}`);
// }
// else if (age>=2 && age <4){
//     console.log(`This person is toddler because age = ${age}`);
// }
// else if (age>=4 && age <13){
//     console.log(`This person is kid because age = ${age}`);
// }
// else if (age>=13 && age <20){
//     console.log(`This person is teenager because age = ${age}`);
// }
// else if (age>=20 && age <65){
//     console.log(`This person is adult because age = ${age}`);
// }
// else if (age>=65){
//     console.log(`This person is elder because age = ${age}`);
// }
// else {
//     console.log(`Plz type correct age`);
// }
// Qno 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// var favorite_fruits:String[]=[`Mango`,`Banana`,`Orange`]
// if (favorite_fruits.includes('Mango')){
//     console.log(`You realy like Mangoes!`);
// }
// else {
//     console.log(`I think you don't like mango as much`);
// }
// if (favorite_fruits.includes('Grapes')){
//     console.log(`You realy like Grapes!`);
// }
// else {
//     console.log(`I think you don't like grapes as much`);
// }
// if (favorite_fruits.includes('Banana')){
//     console.log(`You realy like Bananas!`);
// }
// else {
//     console.log(`I think you don't like bananas as much`);
// }
// if (favorite_fruits.includes('Orange')){
//     console.log(`You realy like Orange!`);
// }
// else {
//     console.log(`I think you don't like orange as much`);
// }
// if (favorite_fruits.includes('Apple')){
//     console.log(`You realy like Apple!`);
// }
// else {
//     console.log(`I think you don't like apple as much`);
// }
// Qno 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
// var arrayName:String[]=[`admin`,`rameez`,`faizan`,`ahmed`,`ali`]
// for (var i=0; i<arrayName.length; i++){
//     if (arrayName[i]=='admin'){
//         console.log(`Hello ${arrayName[i]}, would you like to see a status report?`);
//     }
//     else if (arrayName[i]!='admin'){
//         console.log(`Hello ${arrayName[i]}, thank you for logging in again`);
//     }
// }
// Qno 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var arrayName = [];
for (var i = 0; i < arrayName.length; i++) {
    if (arrayName[i] == 'admin') {
        console.log(`Hello ${arrayName[i]}, would you like to see a status report?`);
    }
    else if (arrayName[i] != 'admin') {
        console.log(`Hello ${arrayName[i]}, thank you for logging in again`);
    }
    else if (arrayName[i].length == 0) {
        console.log(`We need to find some error`);
    }
}
