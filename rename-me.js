/*
Dylan R. Wahlstrom 
SDI 1209
Project 3
*/

// Declare Varibles
var bandneed = "budget";
var transport = "van";
var booVariable = true
var Style = "poprock"

// Procedure
var hoursoftravel = function(totalmiles, averagemph) {
	var outcome = totalmiles/averagemph;

	console.log("The total hours of travel on tour is " + outcome + " hours.");
	
};

// Boolean Function
 
	if (bandneed !== "budget")
		console.log("The band will be able to afford hotels, gas, and pay each band member as well as the crew.");
		else {
		console.log("The band will not be successful on tour and not make a profit.");
	};
	


// Number Function
var milestonextcity = 250; 
while (milestonextcity > 0) {
	console.log(milestonextcity + " miles to the next city.");
	milestonextcity--;
}; 

// String Function
	
if (bandneed === "budget"){
	console.log("Every band needs to create a " + bandneed + " to be successful in a band.");
}
	console.log("Without a " + transport + " no band will be able to tour.");
	
// Array Function

var countUp = function(){

    for(venues=0;venues<=9;venues++){
        console.log(venues + " left on tour.");
        
        
        if (venues < 1){
            console.log("You are headed home and get to sleep in your own bed!");
              
        }else{
            console.log("You still have venues and more shows to play!");   
        };
        console.log(" ");
    };
    return venues;
};	

Array.newTour = function(){
	var newArray = ["24 shows", "3000 miles"];
	this.push.apply(this, newArray);
};

// Object Function
var getStyle = function () { return Style; };

	var bandAccessories = { 
	name: "The Reckless",  
	equipment: [
		"Marshall JCM-900", 
		"Pork Pie Custom Drums", 
		"Fender Jaguar Modern Player guitar", 
		"Orange 4x12 Cab"
	],
	rockRoll: function () {
		console.log("Rock and Roll!")
	}
};
console.log( bandAccessories["equipment"] );
	
	






// Main Code - function calls
var poprock = style("poprock");
hoursoftravel(3000,60)
var numOfVenues = countUp(10);
console.log("Number of venues played: " + numOfVenues);
bandAccessories.rockRoll();



