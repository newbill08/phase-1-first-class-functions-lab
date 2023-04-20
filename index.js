// Code your solution in this file!
// Declare the variable "returnFirstTwoDrivers" with const and assign an anonymous function to it. The assigned function 
//should take one argument, an array containing the names of Scuber's drivers, and return a new array containing the 
//first two drivers in the array:
//drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function (drivers) {
    // ".slice" --Nondestructive of the original element: [...array.slice(keepStart_0,keepEnd_0+1)]
    return drivers.slice(0, 2);
}

//returnFirstTwoDrivers(drivers)

const returnLastTwoDrivers = function (drivers) {
    // ".slice" --Nondestructive of the original element: [...array.slice(keepStart_0,keepEnd_0+1)]
    return drivers.slice(2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// ?? why/ r can createFareMultiplier be activated without internal call??
//higer order Fun... a Fun... that takes or return another function
function createFareMultiplier(multiplier) {
    return function fair(multiplier) { return multiplier * 5 };
}


let fareDoubler = function (somevalue) {
    return 2 * (somevalue)
}

const fareTripler = function (somevalue) {
    return somevalue * 3
}

function selectDifferentDrivers(arrayOfDrivers, func) {
    if (func === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayOfDrivers)
    }
    else {
        return returnLastTwoDrivers(arrayOfDrivers)
    }
    //Practice    Ternary Expression
    //return func = returnFirstTwoDrivers ? returnLastTwoDrivers(arrayOfDrivers)  : returnFirstTwoDrivers(arrayOfDrivers);


}  
