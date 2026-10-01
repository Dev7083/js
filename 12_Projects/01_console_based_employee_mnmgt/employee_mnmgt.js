//for reading input from terminal
const input = require("readline-sync");

let employees = [];

//add employee fn
function addEmployee() {
    let id = input.question("Enter ID: ");
    let name = input.question("Enter Name: ");
    let employee = {
        id: id,
        name: name
    };
    employees.push(employee);
    console.log("Employee added!");
}
//show employee fn
function showEmployees() {
    for (let i = 0; i < employees.length; i++) {
        console.log(
            employees[i].id + " - " +
            employees[i].name
        );
    }
}
//search employee fn 
function searchEmployee() {
    let id = input.question("Enter ID: ");
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id == id) {
            console.log("Employee Found!");
            console.log(employees[i]);
            return;
        }
    }
    console.log("Employee Not Found!");
}
//delete employee fn
function deleteEmployee() {
    let id = input.question("Enter ID: ");
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id == id) {
            employees.splice(i, 1);
            console.log("Employee Deleted!");
            return;
        }
    }
    console.log("Employee Not Found!");
}


// Main menu

while (true) {
    console.log("\n1. Add Employee");
    console.log("2. Show Employees");
    console.log("3. Search Employee");
    console.log("4. Delete Employee");
    console.log("5. Exit");

    let choice = input.question("Enter choice: ");

    if (choice == "1") {
        addEmployee();
    }
    else if (choice == "2") {
        showEmployees();
    }
    else if (choice == "3") {
        searchEmployee();
    }
    else if (choice == "4") {
        deleteEmployee();
    }
    else if (choice == "5") {
        console.log("Goodbye!");
        break;
    }
    else {
        console.log("Invalid choice!");
    }
}