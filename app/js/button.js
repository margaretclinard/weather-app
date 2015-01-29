/* 
CONDITIONS_BASE_URL: https://api.wunderground.com/api/92a66d84a6f9aaa7/conditions/q/

City & state location is here:  response.current_observation.display_location.full

MAYBE THIS?  BUT I CAN'T GET IT TO WORK
<input type="button" value="Reload Page" onClick="document.location.reload(true)">

*/

document.getElementById("submit").addEventListener('click', getWeather);

function getWeather(){
	var url = makeUrl();
	/*  here is probably where we need a clearing function */
	getJSON(url, display);
}

function getJSON(url, cb){
  var request = new XMLHttpRequest();
  request.open('GET', url);

  request.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      cb(JSON.parse(this.response));
    }
  }
  request.send();
 }

function makeUrl() {
	var JSON_END = ".json",   /* The .json fragment that needs to be added */
	    BASE_URL = "https://api.wunderground.com/api/92a66d84a6f9aaa7/forecast10day/q/"; /*  Wunderground url without zip and json */

	var zip = getZip();
	var url = BASE_URL + zip + JSON_END;
	return url;
}


function getZip() {
  return document.getElementById("zipcode").value;
}
