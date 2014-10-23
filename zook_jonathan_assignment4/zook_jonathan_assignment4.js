// Jonathan Zook
// 10-23-2014
// Project 4
// Collection of Functions

var phoneNumberBad = "123-45-67"
var phoneNumberGood = "407-695-0100"
var phoneNumberShort = "407-695-010"
var emailGood1 = "myemail@server.net"
var emailGood2 = "a@server.co"
var emailBad1 = "myemail@server"
var emailBad2 = "myemail@.com"
var emailBad3 = "server.com"


//Functions

var phoneVerify = function (phoneNumber) {
    if (phoneNumber.indexOf("-") === 3 && phoneNumber.lastIndexOf("-") === 7 && phoneNumber.length === 12) {
        return true;
    } else {
    return false;
    };
};  // phoneVerify Function

var emailVerify = function (email) {
    if (email.indexOf("@") > 0 && email.indexOf(".") < (email.length - 2) && email.indexOf("@") < (email.indexOf(".") - 1)) {
        return true;
    } else {
        return false;
    };
};

//Program

console.log("Let's check some phone numbers!");
console.log("Is " + phoneNumberBad + " in the pattern of a phone number? Answer: " + phoneVerify(phoneNumberBad));
console.log("Is " + phoneNumberGood + " in the pattern of a phone number? Answer: " + phoneVerify(phoneNumberGood));
console.log("Is " + phoneNumberShort + " in the pattern of a phone number? Answer: " + phoneVerify(phoneNumberShort));

console.log("Let's check some email addresses!");
console.log("Is " + emailGood1 + " in the pattern of an email address? Answer: " + emailVerify(emailGood1));
console.log("Is " + emailGood2 + " in the pattern of an email address? Answer: " + emailVerify(emailGood2));
console.log("Is " + emailBad1 + " in the pattern of an email address? Answer: " + emailVerify(emailBad1));
console.log("Is " + emailBad2 + " in the pattern of an email address? Answer: " + emailVerify(emailBad2));
console.log("Is " + emailBad3 + " in the pattern of an email address? Answer: " + emailVerify(emailBad3));
