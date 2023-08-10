//Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.

console.log("Enter Product price in $\n")
var productPrice=67
var discount;

if (productPrice>=100)
{
    console.log(`Discount 10% = $${discount=10/100*productPrice}`)
}

else if (productPrice<100)
{
    console.log(`Discount 5% = $${discount=5/100*productPrice}`)
}

else {
    console.log("nvalid Price")
}