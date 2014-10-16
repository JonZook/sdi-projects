// Jonathan Zook
// 10-16-2014
// Project 3
// Courtly Romance

//Global Variables

var romantic = "yes";
var realName = "So-and-so";
var knightMe = true;
var royalTitle = "Sir";
var fullName = "Sir So-and-so"
var joustWins = 0;
var socialState = false
var goneSocial = false

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
};  //getName (string) function


var joust = function (joustRounds) {
    var round = 0;
    console.log("Knights win favor in the courts and with Princesses by winning Jousts.");
    for (var round = 1; round < joustRounds; round++) {
        console.log(round + " jousts won!");
    };
    console.log(round + " wins should be enough to get noticed!");
    return round;
}; //joust (number) function


var getSocial = function (socialState, maxTrips) {
    var trips = 0;
    while (trips < maxTrips) {
        if (socialState == true) {
            console.log("You've got your eye on someone special!");
            return socialState;
        };
        trips++;
        console.log(trips + " social shindigs attended");
    };
    console.log(trips + " events should be enough to find a romantic interest.");
    return true;
};  //getSocial (Boolean) function



//Project 2 Start

realName = prompt ("What is your name?");

romantic = prompt ("Are you a romantic, yes or no?");

romance(romantic, realName);

knightMe = confirm("Courtly romance in medieval times was between a Knight and a Princess.  Are you a Knight?");

royalTitle = getTitle(knightMe);

fullName = getName(royalTitle, realName);

socialState = confirm("You will need to attend many events to find a person to court.  Are you a social butterfly?");

goneSocial = getSocial (socialState, 5);

joustWins = joust(10);

console.log(fullName + ", it is " + goneSocial + " that you are accepted in royal court.");
console.log("A Knight that has won at least " + joustWins + " tournaments and a Princess can find romance.");