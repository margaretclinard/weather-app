
var baseURL = "https://api.wunderground.com/api/92a66d84a6f9aaa7/forecast10day/q/";
var fileExt = ".json";
var userZip = document.getElementById("zipCode");


// Button needs to respond to user's click

// User enters zip

function addZip() {
    var userZip = document.getElementById("zipCode").value;
    document.getElementById("demo").innerHTML = userZip;  /* I don't think this is going to the right place... */
}


// .json gets added to the User's url

var changedZip = userZip.concat(fileExt);

// User's zip (w .json) gets added to the chopped url

var url = baseUrl.concat(changedZip);

/*
<html>
<head>
<script>
function display()
{
document.getElementById("displayarea").innerHTML = document.getElementById("myinput").value;    
document.getElementById("myinput").value = "";
}
</script>
</head>

<body>
<input type="text" name="myinput" id="myinput">
<input type="button" value="Submit" name="submit" id="submit" onClick="display()"/>
<div id="displayarea">Sample Text. This data will disappear if you press button</div>
</body>
</html>

*/