// Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax Where the tax amount will be calculated by the amount of bill.

var unitConsumed= 250;

if (unitConsumed>=100){
    console.log(`Tax include your bill = ${unitConsumed=10/100*unitConsumed}%`)
}
else if(unitConsumed>=200)
{
    console.log(`Tax include your bill = ${unitConsumed= 15/100*unitConsumed}%`)
}
else if (unitConsumed>=500)
{
    console.log(`Tax include your bill = ${unitConsumed=25/100*unitConsumed}%`)
}
else 
{
    console.log(`No tax include in your bill`)
}