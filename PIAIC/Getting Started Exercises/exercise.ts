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

