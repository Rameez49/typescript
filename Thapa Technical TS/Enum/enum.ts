enum Roles {
    user = "user",
    admin = "admin",
}

type loginDetails = {
    name?: String,
    email: String,
    password: String,
    role: Roles
}



const adminDetails:loginDetails= {
    name:"Rameez",
    email:"rameez@gmail.com",
    password: "Rameez12",
    role : Roles.admin,
}

const userDetails:loginDetails = {
    name: "Usman",
    email: "usman@gmail.com",
    password: "Usman12",
    role: Roles.user,
}

const isAdmin = (checker:loginDetails): string =>{
    const {email,role}=adminDetails;
    return role == "admin" ? `${email} is allow to edit website`: `${email} is not allowed to edit website`
}

var result = isAdmin(adminDetails);
console.log(result);

