document.getElementById("submit").addEventListener('click', getWeather);

function getWeather(){
	var url = makeUrl();
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
