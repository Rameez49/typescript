type studentType= {
    name:string;
    age:number;
    greet:(country:String)=>String;
    // Here type of call signature is declared
}

const Student1:studentType={
    name:"Rameez Ul Hassan",
    age:19,
    greet:(country): string => `Hy My name is ${Student1.name} and I am ${Student1.age} years old and I am from ${country}`
}


console.log(Student1.greet("Pakistan"));
