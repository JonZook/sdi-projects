// Jonathan Zook
// 10-23-2014
// Project 4
// Collection of Functions

var phoneNumberBad = "123-45-67"
var phoneNumberGood = "407-695-0100"


//Functions

var phoneVerify = function (phoneNumber) {
    if (phoneNumber.indexOf("-") === 3) {
        if (phoneNumber.lastIndexOf("-") === 7) {
            if (phoneNumber.length === 12) {
            return true;
            };
        };
    return false;
    };
};  // phoneVerify Function




//Program

console.log("Is " + phoneNumberBad + " in the pattern of a phone number? Answer: " + phoneVerify(phoneNumberBad));
console.log("Is " + phoneNumberGood + " in the pattern of a phone number? Answer: " + phoneVerify(phoneNumberGood));