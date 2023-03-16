let employee = {
    Id : 01,
    Name : "Abc",
    Address : "xyz",
    salary : 123,
    

};
//console.log("PRINTING VALUE OF OBJECT: ");
for(let i in employee)
{
    console.log(employee[i]);
}
console.log("Id of employee is ", employee["Id"]);
console.log("NAME OF EMPLOYEE IS ",employee.Name);
// Adding details
employee.FatherName= "jkl";
console.log("Result is " ,employee);
//change
employee.Id = 1;
console.log(employee.Id);
//delete
delete employee.salary;
console.log("Result after deleting salary: ",employee);
