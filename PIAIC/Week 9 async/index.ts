import inquirer from "inquirer";

async function calculator() {
    try {

        const array = [
            {
                type: "input",
                name: "num1",
                message: "Enter 1 Number",
            },

            {
                type: "input",
                name: "num2",
                message: "Enter 2 Number",
            },
            {
                type: "list",
                name: "Operation",
                message: "Select Any Operation",
                choices: ["Add", "Subtract", "Multiplication", "Division", "Modulus"]
            }
        ]
       

        var message = await inquirer.prompt(array);
        const num1 = parseFloat(message.num1);
        const num2 = parseFloat(message.num2);

       
        if (!isNaN(message.num1) && !isNaN(message.num2)) {

            switch (message.Operation) {
                case "Add":
                    console.log(`${message.num1} + ${message.num2} = `, num1 + num2);


                    break;
                case "Subtract":
                    console.log(`${message.num1} - ${message.num2} = `, num1 - num2);
                    break;
                case "Multiplication":
                    console.log(`${message.num1} * ${message.num2} = `, num1 * num2);
                    break;
                case "Division":
                    console.log(`${message.num1} / ${message.num2} = `, num1 / num2);
                    break;
                case "Modulus":
                    console.log(`${message.num1} % ${message.num2} = `, num1 % num2);
                    break;



                default:
                    console.log(`Invalid Operation`);

            }



        }
        else {
            console.log("Please Enter Valid Number");

        }

    }
    catch (error) {
        console.log(error);


    }

}

calculator()
