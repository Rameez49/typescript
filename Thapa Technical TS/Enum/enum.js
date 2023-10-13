"use strict";
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
const adminDetails = {
    name: "Rameez",
    email: "rameez@gmail.com",
    password: "Rameez12",
    role: Roles.admin,
};
const userDetails = {
    name: "Usman",
    email: "usman@gmail.com",
    password: "Usman12",
    role: Roles.user,
};
const isAdmin = (checker) => {
    const { email, role } = adminDetails;
    return role == "admin" ? `${email} is allow to edit website` : `${email} is not allowed to edit website`;
};
var result = isAdmin(adminDetails);
console.log(result);
