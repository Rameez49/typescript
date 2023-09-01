"use strict";
// 1). Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
// var num1= 30;
// var sum=0;
// for (var i=2; i<=num1; i+=2){
//     sum = sum + i;
// }
// console.log(`the first ${num1} even numbers sum = `,sum);
// 2). Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
//  var array:number[]=[2,4,7,9,44];
//  for (var i=0; i<array.length; i++){
//     if(array[i]%2==0){
//         console.log(`Even numbers in this array ${array[i]}`);
//     }
//  }
// 3). Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones.
// var array:number[]=[1,2,5,8,12,7]
//  for (var i=0;i<array.length; i++){
//     if(array[i]%2!=0){
//         console.log(`These are odd Numbers ${array}`)
//     }
//  }
// 4). Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
// function CalareaCircle(radius:number){
//     var areaofCicle=Math.PI*Math.pow(radius,2)
//     return areaofCicle
// }
// var result = CalareaCircle(2)
// console.log(`The Area of Circle = ${result}`);
// 5).Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
// var marks:number[]=[42,76,82,91,45]
// for (var i=marks.length -1; i>=0;i--){
//     if (marks[i]<50){
//         marks.splice(i,1)
//     }
// }
// console.log(`After removing Failing Grades `,marks);
// var marks:number[]=[52,76,97,81,60,31]
//  for (var i=0; i<marks.length; i++){
//     if (marks[i]>=80 && marks[i]<=100){
//         console.log(`Grade is A`);
//     }
//     else if (marks[i]>=70 && marks[i]<=79){
//         console.log(`Grade is B`);
//     }
//     else if (marks[i]>=50 && marks[i]<=69){
//         console.log(`Grade is C`);
//     }
//     else if (marks[i]<50){
//         marks.splice(i,1)
//     }
//  }
//  6). Write a program that uses a function to find the largest element in an array of numbers.
var array = [3, 12, 7, 32, 21];
var storeNum = array[0];
for (var i = 0; i < array.length; i++) {
    if (array[i] > storeNum) {
        storeNum = array[i];
    }
}
console.log(`Largest Number in Array = ${storeNum}`);
