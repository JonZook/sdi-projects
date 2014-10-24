// Jonathan Zook
// 10-23-2014
// Project 4
// Collection of Functions

var phoneNumberBad = "123-45-67";
var phoneNumberGood = "407-695-0100";
var phoneNumberShort = "407-695-010";
var emailGood1 = "myemail@server.net";
var emailGood2 = "a@server.co";
var emailBad1 = "myemail@server";
var emailBad2 = "myemail@.com";
var emailBad3 = "server.com";
var webGood1 = "http://web.com";
var webGood2 = "https://web.com";
var webBad1 = "http:/web.com";
var webBad2 = "web.com";
var stringNumber1 = "42";
var stringNumber2 = "195";
var decimal1 = 3;
var decimal2 = 2;
var decNumber = 3.14159;
var sentence = "How about those apples."



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
};  // emailVerify Function

var urlVerify = function (url) {
    if (url.substring(0,8) === "https://" || url.substring(0,7) === "http://") {
        return true;
    } else {
    return false;
    };
};  // urlVerify Function

var getNumber = function (stringNumber) {
    realNumber = parseInt(stringNumber);
    return realNumber;
};  // Convert to Number function

var getDecimal = function (number, decPlaces) {
    newNumber = number.toFixed(decPlaces);
    return newNumber;
};  //Decimal Place Function

var capWords = function (sentence) {
    var start = 0;
    var newSentence = "";
    while (sentence.indexOf(" ") != -1) {
        chunk = sentence.substring(start, sentence.indexOf(" "));
        firstLetter = chunk.charAt(0);
        firstLetter = firstLetter.toUpperCase();
        chunk = chunk.substring(1, chunk.length);
        newSentence = newSentence + firstLetter + chunk + " ";
        sentence = sentence.substring(sentence.indexOf(" ") + 1, sentence.length);
    };
    console.log(sentence);
    firstLetter = sentence.charAt(0);
    firstLetter = firstLetter.toUpperCase();
    chunk = sentence.substring(1, sentence.length);
    newSentence = newSentence + firstLetter + chunk;
    return newSentence;
};  //Capitalize words function

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

console.log("Let's check some URLs!");
console.log("Does " + webGood1 + " start with http:// or https://? Answer: " + urlVerify(webGood1));
console.log("Does " + webGood2 + " start with http:// or https://? Answer: " + urlVerify(webGood2));
console.log("Does " + webBad1 + " start with http:// or https://? Answer: " + urlVerify(webBad1));
console.log("Does " + webBad2 + " start with http:// or https://? Answer: " + urlVerify(webBad2));

console.log("Let's turn some strings into numbers!");
console.log(stringNumber1 + " sure would look better as a number, like this:  " + getNumber(stringNumber1));
console.log(stringNumber2 + " sure would look better as a number, like this:  " + getNumber(stringNumber2));

console.log("Let's narrow down a number to a few decimal places!");
console.log(getDecimal(decNumber, decimal1) + " is what " + decNumber + " would look like with only " + decimal1 + " decimal places.");
console.log(getDecimal(decNumber, decimal2) + " is what " + decNumber + " would look like with only " + decimal2 + " decimal places.");

console.log("Let's capitalize the first letter of each word in a sentence.");
console.log("'" + sentence + "' looks a bit strange when written as, '" + capWords(sentence) + "'");
