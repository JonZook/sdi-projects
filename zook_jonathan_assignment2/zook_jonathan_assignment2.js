// Jonathan Zook
// 10-09-2014
// Project 2
// Theme

//Global Variables

var romantic = "yes";
var realName = "So-and-so";
var knightMe = true;
var royalTitle = "Sir";
var fullName = "Sir So-and-so"

//Procedures

var romance = function (romantic, realName) {
    if (romantic === "yes") {
        console.log(realName + ", romance is out there for the right person.");
    }else {
        console.log(realName + ", courtly romance is not always about love.");
    };  //"romantic" is re-used here but is not the global variable   
};  //romance procedure


//Functions

var getTitle = function (knightMe) {
    var title;
    if (knightMe === true) {
        title = "Sir";
    }else {
        title = "Princess";    
    }
    return title
};  //getTitle function (not part of assignment)

var getName = function (royalTitle, realName) {
    var fullName = royalTitle + " " + realName;
    return fullName;
};  //getName function


var joust = function (knightMe, realName) {
    
    
}; //joust function



//Project 2 Start

realName = prompt ("What is your name?");

romantic = prompt ("Are you a romantic, yes or no?");

romance(romantic, realName);

knightMe = confirm("Courtly romance in medieval times was between a Knight and a Princess.  Are you a Knight?");

royalTitle = getTitle(knightMe);

fullName = getName(royalTitle, realName);

console.log(fullName);

joust(knightMe, realName);