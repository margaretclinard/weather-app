
// This is where the concatenation function begins:


var url,		/* This is the url needed to show the next city's data */
	zipJsoned,	/* This is the user-entered zipcode + the .json fragment */
	userZip,    /*  Needs to be the input from the submit button */
	jsonEnd  = ".json",   /* The .json fragment that needs to be added */
	baseURL = "https://api.wunderground.com/api/92a66d84a6f9aaa7/forecast10day/q/"; /*  This is the wunderground url with the zip and json chopped off */

function chosenZip(userZip) {
	zipJsoned = userZip + jsonEnd;
	url = baseURL + zipJsoned;

// Not sure how to grab the user-entered zip and put it in the chosenZip function...


function getZip() {
    var userZip = document.getElementById("zipCode").value;
}
