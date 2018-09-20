// Exercise​ ​One: 
// Prompt​ ​the​ ​user​ ​for​ ​a​ ​number.​ ​Write​ ​a​ ​​for​ ​loop​​ ​that​ ​will​ ​add​ ​all​ ​of​ ​the​ ​numbers​ ​leading 
// up​ ​to​ ​that​ ​number,​ ​and​ ​inclusive​ ​of​ ​that​ ​number​ ​together​ ​and​ ​log​ ​the​ ​result​ ​to​ ​the​ ​console. 
// (ex:​ ​A​ ​user​ ​enters​ ​5,​ ​and​ ​the​ ​output​ ​would​ ​be​ ​the​ ​result​ ​of​ ​1​ ​+​ ​2​ ​+​ ​3​ ​+​ ​4​ ​+​ ​5.) 
//  
// Prompt:​ ​‘Enter​ ​A​ ​Number!’​ ​>​ ​5 
// Output:​ ​15 

var Question = "Please enter a number";
var UserValue = prompt(Question);

var total = 0;
for (var i=0; i<=UserValue; i++) {
    total=total+i;
}
console.log(total);

//  
// Exercise​ ​Two: 
// Write​ ​a​ ​do..while​ ​loop​ ​that​ ​builds​ ​a​ ​string​ ​with​ ​multiple​ ​inputs​ ​from​ ​a​ ​user.​ ​Start​ ​by 
// prompting​ ​the​ ​user​ ​if​ ​they​ ​want​ ​to​ ​play.​ ​When​ ​the​ ​user​ ​answers​ ​yes,​ ​prompt​ ​the​ ​user​ ​to 
// enter​ ​a​ ​word.​ ​After​ ​the​ ​user​ ​enters​ ​a​ ​word,​ ​prompt​ ​the​ ​user​ ​if​ ​they​ ​would​ ​like​ ​to​ ​play​ ​again. 
// If​ ​no,​ ​console​ ​log​ ​their​ ​word.​ ​If​ ​yes,​ ​prompt​ ​the​ ​user​ ​for​ ​another​ ​word​ ​and​ ​add​ ​that​ ​word​ ​to 
// the​ ​original​ ​string,​ ​then​ ​prompt​ ​if​ ​they​ ​want​ ​to​ ​play​ ​again.​ ​Continue​ ​to​ ​add​ ​words​ ​to​ ​the 
// string​ ​every​ ​time​ ​the​ ​user​ ​answers​ ​yes​ ​and​ ​enters​ ​a​ ​word​ ​until​ ​the​ ​user​ ​indicates​ ​that​ ​he​ ​or 
// she​ ​does​ ​not​ ​want​ ​to​ ​play​ ​anymore. 
//  
// Prompt:​ ​‘Do​ ​you​ ​want​ ​to​ ​play?’​ ​>​ ​'yes'​ ​>​ ​Prompt:​ ​‘Enter​ ​a​ ​word.’​ ​> 
// 'dog'​ ​>​ ​Prompt:​ ​‘Do​ ​you​ ​want​ ​to​ ​play​ ​again?’​ ​>​ ​'yes'​ ​>​ ​Prompt:​ ​‘Enter 
// a​ ​word.'​ ​>​ ​'cat'​ ​>​ ​Prompt:​ ​‘Do​ ​you​ ​want​ ​to​ ​play​ ​again?’​ ​>​ ​'no'  
// Output:​ ​'dog​ ​cat' 

let FinalString;

let Playing = prompt("Do you want to play? Say 'yes' or 'no'");
if (Playing === "yes") {
    do {
        let WordPrompt = prompt("Enter a word");
        if (!FinalString){
            FinalString = WordPrompt;
        }
        else{
            FinalString = FinalString + " " + WordPrompt;
        }
       
        Playing = prompt("Do you want to play again? Say 'yes' or 'no'");

    }while(Playing === "yes");
}
if (Playing==="no" && !FinalString){
    console.log("game not played");
}
else if (Playing==="no" && FinalString){
    console.log(FinalString);
}
else {
    console.log("something went wrong");
}

// Exercise​ ​Three: 
// Write​ ​a​ ​while​ ​loop​ ​that​ ​will​ ​prompt​ ​the​ ​user​ ​if​ ​they​ ​would​ ​like​ ​to​ ​print​ ​their​ ​name.​ ​If​ ​the 
// answer​ ​is​ ​yes,​ ​log​ ​their​ ​name​ ​to​ ​the​ ​console​ ​then​ ​prompt​ ​them​ ​if​ ​they​ ​would​ ​like​ ​to​ ​print 
// their​ ​name​ ​again.​ ​If​ ​yes,​ ​log​ ​their​ ​name​ ​to​ ​the​ ​console​ ​again​ ​but​ ​this​ ​time​ ​add​ ​an 
// exclamation​ ​point​ ​at​ ​the​ ​end​ ​of​ ​the​ ​string.​ ​Continue​ ​to​ ​add​ ​an​ ​exclamation​ ​point​ ​for​ ​every 
// time​ ​the​ ​user​ ​agrees​ ​to​ ​wanting​ ​to​ ​print​ ​his​ ​or​ ​her​ ​name.  
//  
// Prompt:​ ​‘Would​ ​you​ ​like​ ​to​ ​print​ ​your​ ​name?’​ ​>​ ​'yes' 
// Output:​ ​'Hello.​ ​My​ ​name​ ​is​ ​Adam'  
// Prompt:​ ​‘Would​ ​you​ ​like​ ​to​ ​print​ ​this​ ​again?’​ ​>​ ​'yes' 
// Output:​ ​‘Hello.​ ​My​ ​name​ ​is​ ​Adam!' 
// Prompt:​ ​‘Would​ ​you​ ​like​ ​to​ ​print​ ​this​ ​again?’​ ​>​ ​'yes' 
// Output:​ ​'Hello.​ ​My​ ​name​ ​is​ ​Adam!!' 
// Prompt:​ ​‘Would​ ​you​ ​like​ ​to​ ​print​ ​this​ ​again?’​ ​>​ ​'no' 

let UserName= prompt("Enter your Name");
let UserAnswer = prompt("Would you like to print your name?");
while(UserAnswer==="yes"){
    console.log("Hello. My name is " + UserName);
    UserName = UserName + "!";
    UserAnswer = prompt("Would you like to print this again?");
}




//  
// Exercise​ ​Four: 
// Prompt​ ​the​ ​user​ ​for​ ​a​ ​time​ ​of​ ​day​ ​(morning,​ ​noon,​ ​or​ ​evening).​ ​Based​ ​on​ ​their​ ​input,​ ​log​ ​a 
// string​ ​to​ ​the​ ​console​ ​that​ ​will​ ​let​ ​the​ ​user​ ​know​ ​what​ ​they​ ​should​ ​be​ ​eating​ ​for​ ​that​ ​specific 
// meal.​ ​Use​ ​the​ ​tables​ ​below​ ​to​ ​guide​ ​your​ ​logic. 
//  
// Meal​ ​Type  Food​ ​Suggestion 
// breakfast  eggs​ ​and​ ​toast 
// lunch  a​ ​salad 
// dinner  chicken​ ​and​ ​rice 
//  
// Time​ ​of​ ​Day  Meal​ ​Type 
// morning  breakfast 
// noon  lunch 
// evening  dinner 
//  
// Example​ ​Outputs:  
// Prompt:​ ​‘What​ ​time​ ​of​ ​day​ ​is​ ​it?’​ ​>​ ​‘morning’ 
// Output:​ ​‘Since​ ​it​ ​is​ ​morning,​ ​you​ ​should​ ​be​ ​eating​ ​breakfast.​ ​We 
// suggest​ ​eggs​ ​and​ ​toast.’ 
// Prompt:​ ​‘What​ ​time​ ​of​ ​day​ ​is​ ​it?’​ ​>​ ​‘evening’ 
// Output:​ ​‘Since​ ​it​ ​is​ ​evening,​ ​you​ ​should​ ​be​ ​eating​ ​dinner.​ ​We​ ​suggest 
// chicken​ ​and​ ​rice.’ 

let TimeOfDay = prompt("What time of day is it? Enter morning, noon, or evening.")

if (TimeOfDay==="morning"){
    console.log("Since it is morning, you should be eating breakfast.  ​We suggest​ ​eggs​ ​and​ ​toast.");
}
else if (TimeOfDay==="noon"){
    console.log("Since it is noon, you should be eating lunch.  ​We suggest​ ​a salad.");
}
else if (TimeOfDay==="evening"){
    console.log("Since it is " + TimeOfDay + ", you should be eating dinner.  ​We suggest​ ​chicken and rice.");
}
else{
    Console.log("invalid entry");
}