// Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.

var days= 7;

var weeks = Math.floor(days/7);
var andDays = days%7;

if (days%7==0){
    console.log(`${weeks} weeks`)
}
else if (days<7)
{
    console.log(`${days} Days`)
}


else if (days>7){
    console.log(`${weeks} weeks and ${andDays} days`)
}

else 
{
    console.log(`This is invalid number`)
}