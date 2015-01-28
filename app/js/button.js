
var baseURL = "https://api.wunderground.com/api/92a66d84a6f9aaa7/forecast10day/q/";
var fileExt = ".json";
var userZip = document.getElementById("myText");


// Button needs to respond to user's click

// User enters zip

function addZip() {
    var userZip = document.getElementById("zipCode").value;
    document.getElementById("demo").innerHTML = userZip;
}


// .json gets added to the User's url

var changedZip = userZip.concat(fileExt);

// User's zip (w .json) gets added to the chopped url

var url = baseUrl.concat(changedZip);