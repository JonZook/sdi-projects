// Jonathan Zook
// 10-09-2014
// Project 2
// Theme

//Global Variables

var romantic = "yes"
var realName = "So-and-so"

//Procedures

var romance = function (romantic, realName) {
    if (romantic === "yes") {
        console.log(realName + ", romance is out there for the right person.");
    }else {
        console.log(realName + ", courtly romance is not always about love.")
    };  //"romantic" is re-used here but is not the global variable   
};  //romance procedure


//Functions




//Project 2 Start

realName = prompt ("What is your name?");

romantic = prompt ("Are you a romantic, yes or no?");

romance(romantic, realName);
