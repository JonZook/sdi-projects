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

var romance = function (romantic, realName, royalTitle) {
    if (royalTitle === "Sir") {
        if (romantic === "yes") {
            console.log(royalTitle + " " + realName + ", romance is out there for knights who win jousts.");
        }else {
            console.log(royalTitle + " " + realName + ", courtly romance is more about conquest than love.");
        };  //"romantic" is re-used here but is not the global variable
    }else {
        if (romantic === "yes") {
            console.log(royalTitle + " " + realName + ", romance is waiting for a princess who is in demand.");
        }else {
            console.log(royalTitle + " " + realName + ", courtly romance is more about intrigue than love.");
        };  //"romantic" is re-used here but is not the global variable        
    };
};  //romance procedure with nested conditional


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


var getSocial = function (socialState, trips) {
    var party = ["Royal Ball", "Festival", "Feast", "Royal Excursion", "Royal Hunt"];
    var bonusEvent = party.pop ();
    party[party.length] = "Royal Court";
    var maxTrips = party.length;
    while (trips < maxTrips) {
        if (socialState == true) {
            console.log("You've got your eye on someone special!");
            return socialState;
        };
        trips++;
        console.log("You attend a " + party[trips - 1] + ".  " + trips + " social shindigs attended.");
    };
    console.log("A " + bonusEvent + " is coming up but, " + trips + " events should be enough to find a romantic interest.");
    return true;
};  //getSocial (Boolean) function



//Project 2 Start

realName = prompt ("What is your name?");

knightMe = confirm("Courtly romance in medieval times was between a Knight and a Princess.  Are you a Knight?");

romantic = prompt ("Are you a romantic, yes or no?");

royalTitle = getTitle(knightMe);

romance(romantic, realName, royalTitle);

fullName = getName(royalTitle, realName);

socialState = confirm("You will need to attend many events to find a person to court.  Are you a social butterfly?");

goneSocial = getSocial (socialState, 0);

joustWins = joust(10);

console.log(fullName + ", it is " + goneSocial + " that you are accepted in royal court.");
console.log("A Knight that has won at least " + joustWins + " tournaments and a Princess can find romance.");