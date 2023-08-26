// 1) Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.

// var names = ["Rameez", "Ahmed", "Ali"]

// function addIndex(index:number, value:number, name1:String){
//     names.splice(2,0,"Abdullah");
//     console.log(names)

// }

// addIndex(2,0,"Abdullah")

// 2) Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation

// var addItmes:String[]=[];

// function cartProgram(){

//    addItmes.splice(0,0,"Shirt"," Pent"," Glasses"," watch")
//    console.log(`Add Things ==> ${addItmes}\n`)

//    addItmes.splice(0,1)
//    console.log(`After Delete ==> ${addItmes}\n`)

//    addItmes.splice(0,1,"Perfume")
//    console.log(`After Update  ==> ${addItmes}`)
// }

// cartProgram();

// 3) Write a program that uses a while loop to print the first 25 integers.

// var integer = 1;

// while(integer<=25){
//     console.log(`First 25 Integers = ${integer}`)
//     integer++;
// }

// 4) Write a program that uses a while loop to print the first 10 even numbers.
// var number = 1;

// while(number<=10){
//     if(number%2==0){
//         console.log(`First 10 Even Numbers ==> ${number}`)
        
//     }
//     number++;
// }

// 5) Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.

// function makeFactorial(integer:number){
//     if(integer>0){
//         while(integer>0){
//             console.log(`Factorial of the Number ==> ${integer}`)
//             integer--;
//         }
//     }
// }
// makeFactorial(8);

// 6) Write a program having an array of numbers if the number is negative it should remove the negative number from the array.

// var numbers : number[] = [2,7,-8,-6,11]
// var i =0;
// while(i<numbers.length){
// var elements = numbers[i];
// if (elements>0)
// {
//     console.log(`After Remove Negative Values`,elements)
// }


// i++;
// }

// 7) Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.

// function takeArray (array:number[]){
//     var i =0;
//     var sum = 0;
//     while(i<array.length){
//         sum = sum + array[i];
//         i++;
//     }
//     return sum;
// }

// var result = takeArray([1,2,5,9])
// console.log(result)

// Implement a program that takes a list of temperatures in Celsius. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.

// var Ctemp:number[]= [45,60,23]
// var listFTemp:number[]=[];

// for (var i=0; i<Ctemp.length; i++){
//     var Ftemp = (Ctemp[i]*9/5)+32;
//     listFTemp.push(Ftemp)
//     console.log(Ctemp[i], "C = ",listFTemp[i],"F");
    
// }