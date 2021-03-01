// Write your solution in this file!
const employee = {name:'barry', streetAdress:'burke road, deepdene'};

function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    const newemployee = { ...employee};
    newemployee[name] = streetAddress; 
    return newemployee;
  }

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    employee[name]= streetAddress;
    return employee;
  }


function deleteFromEmployeeByKey(employee, name) {
    const newemployee = { ...employee};
    delete newemployee.name
    return newemployee
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name
    return employee
}
