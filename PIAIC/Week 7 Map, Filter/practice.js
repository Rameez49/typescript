"use strict";
// 1). Write a program that uses filter to remove all negative numbers from an array of numbers
// var array:number[]=[-2,3,-5,6,9]
// var removeNegativeNum:number[]=array.filter((calValue:number)=>calValue>=0)
// console.log(`After Remove all Negative Number => ${removeNegativeNum}`);
// 2). Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2. 
// const numbers: number[] = [1, 2, 3, 4, 5];
// var secondArray:number[]=numbers.map((num1:number) => num1*2)
// console.log(`After Multiply by 2 => `,secondArray);
// 3). Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
// var arrayFruits:String[]=["apple","banana","cherry","date","grape"];
// var fiveCharacter:String[]=arrayFruits.filter((storeFruits:String)=> storeFruits.length>5)
// console.log(`Fruits who length greater than 5 => ${fiveCharacter}`);
// 4). Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
// var numbers:number[]=[1,2,3,4,5,6,7,8,9,10]          
// var secondNumber:number[]=numbers.filter((index:number)=> index%2==0)
// var thirdNumber:number[]=secondNumber.map((index2:number) => index2*2)
// console.log(thirdNumber);
// 5). Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
// var celTemp:number[]=[0,10,20,30,40]
// var FTemp:number[]=celTemp.map((convert:number)=>(convert*9/5)+32)
// console.log(FTemp);
// 6). Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.
// var numbers =[3,6,9,12,15,18]
// var doubleArray= numbers
// .filter((num1)=> num1%2!=0)
// .map((num1)=> num1*2)
// console.log(doubleArray);
// 7). Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
// var names = ["Alice","Bob","Charlie","David","Emily"]
const names = ["Alice", "Bob", "Charlie", "David", "Emily"];
names.forEach((name1) => {
    console.log(name1 + "!");
});
