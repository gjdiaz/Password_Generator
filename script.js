
var lower = document.querySelector("#lower");
var upper = document.querySelector("#upper");
var numbers = document.querySelector("#numbers");
var special = document.querySelector("#special");
var chosenLength = document.querySelector("#chosenLength");
var generate = document.querySelector(".generate");

const buttonElement = document.getElementById('btn');

// invoke/call/execute function 
validateLength();
// declare function = function definition. It is a type of value
// parameters/inputs go between the parentheses and are just variables function has access to when it's called
function validateLength()  {
    if (chosenLength < 8)  {
        alert("Please select a minimum of eight characters");
    }
    if (chosenLength > 128)  {
        alert("Please select fewer than 129 characters");
    }
    if (NaN === true)  {
        alert("Invalid input");
    }
 }

// function checkCharacters(lower, upper, numbers, special) {}

// function generatePassword(parameter/inputs)


const random = chosenLength;
var chars = ["lower", "upper", "numbers", "special"]

checkChars()
generatePassword()

// verify character types chosen
function checkChars() {
    if (lower === true)  {
        return result;
    } else {
    }
    if (upper === true)  {
        return result;
    } else {
    } 
    if (numbers === true)  {
        return result;
    } else {
    }
    if (special === true)  {
        return result;
    } else {
    } 
}

// incorporate result of checkChars into generatePassword function
function generatePassword() {
// declare all characters 
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*?+=';
// pick characters randomly
    var str = '';
    for (let i = 0; i < length; i++)  {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
}