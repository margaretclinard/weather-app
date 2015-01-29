getJSON('https://api.wunderground.com/api/92a66d84a6f9aaa7/forecast10day/q/37216.json', display);

getJSON('https://api.wunderground.com/api/92a66d84a6f9aaa7/conditions/q/37216.json', createCityHeader);

document.getElementById('submit').addEventListener('click', getWeather);

var data;
var city;


function getWeather(){
  clearPage();
  var url = makeForecastUrl();
	getJSON(url, display);
  var url2 = makeConditionUrl();
  getJSON(url2, createCityHeader);
}

function getJSON(url, cb){
  var request = new XMLHttpRequest();
  request.open('GET', url);

  request.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      cb(JSON.parse(this.response));
    }
  };

  request.send();
}

function makeForecastUrl() {
  var JSON_END = '.json',
      BASE_URL = 'https://api.wunderground.com/api/92a66d84a6f9aaa7/forecast10day/q/';
  var zip = getZip();
  var url = BASE_URL + zip + JSON_END;
  return url;
}

function makeConditionUrl() {
  var JSON_END = '.json',
      BASE_URL = 'https://api.wunderground.com/api/92a66d84a6f9aaa7/conditions/q/';
  var zip = getZip();
  var url = BASE_URL + zip + JSON_END;
  return url;
}

function getZip() {
  return document.getElementById('zipcode').value;
}

function clearCityName() {
  document.getElementById('city').innerHTML = "";
}

function clearPage() {
  document.getElementById('featured').innerHTML = "";
  document.getElementById('dayTitle1').innerHTML = "";
  document.getElementById('dayDescrip').innerHTML = "";
  document.getElementById('img2').innerHTML = "";
  document.getElementById('dayTitle2').innerHTML = "";
  document.getElementById('dayDescrip2').innerHTML = "";
  document.getElementById('img3').innerHTML = "";
  document.getElementById('dayTitle3').innerHTML = "";
  document.getElementById('dayDescrip3').innerHTML = "";
  document.getElementById('img4').innerHTML = "";
  document.getElementById('dayTitle4').innerHTML = "";
  document.getElementById('dayDescrip4').innerHTML = "";
  document.getElementById('img5').innerHTML = "";
  document.getElementById('dayTitle5').innerHTML = "";
  document.getElementById('dayDescrip5').innerHTML = "";
}


function createCityHeader(city){
  clearCityName();
  var cityData = city.current_observation.display_location.full;

  var docFragCity = document.createDocumentFragment();

  var h1 = document.createElement('h1');
  docFragCity.appendChild(h1);
  var cityText = document.createTextNode(cityData);
  h1.appendChild(cityText);
  var cityFromZip = document.querySelector('#city');
  cityFromZip.appendChild(cityText);
}

function display(data){
  var forecastData = data.forecast.txt_forecast.forecastday;
  var docFrag = document.createDocumentFragment();

  var img1 = document.createElement('IMG');
  img1.setAttribute("src", forecastData[0].icon_url);
  docFrag.appendChild(img1);
  var mainPic = document.querySelector('#featured');
  mainPic.appendChild(docFrag);

  var img = document.createElement('IMG');
  img.setAttribute("src", forecastData[2].icon_url);
  docFrag.appendChild(img);
  var secondPic = document.querySelector('#img2');
  secondPic.appendChild(docFrag);

  var img = document.createElement('IMG');
  img.setAttribute("src", forecastData[4].icon_url);
  docFrag.appendChild(img);
  var thirdPic = document.querySelector('#img3');
  thirdPic.appendChild(docFrag);

  var img = document.createElement('IMG');
  img.setAttribute("src", forecastData[6].icon_url);
  docFrag.appendChild(img);
  var fourthPic = document.querySelector('#img4');
  fourthPic.appendChild(docFrag);

  var img = document.createElement('IMG');
  img.setAttribute("src", forecastData[8].icon_url);
  docFrag.appendChild(img);
  var fifthPic = document.querySelector('#img5');
  fifthPic.appendChild(docFrag);

  var h6 = document.createElement('H6');
  docFrag.appendChild(h6);
  var text = document.createTextNode(forecastData[0].fcttext);
  h6.appendChild(text);
  var day1 = document.querySelector('#dayDescrip');
  day1.appendChild(text);

  var h6 = document.createElement('H6');
  docFrag.appendChild(h6);
  var text = document.createTextNode(forecastData[2].fcttext);
  h6.appendChild(text);
  var day2 = document.querySelector('#dayDescrip2');
  day2.appendChild(text);

  var h6 = document.createElement('H6');
  docFrag.appendChild(h6);
  var text = document.createTextNode(forecastData[4].fcttext);
  h6.appendChild(text);
  var day3 = document.querySelector('#dayDescrip3');
  day3.appendChild(text);

  var h6 = document.createElement('H6');
  docFrag.appendChild(h6);
  var text = document.createTextNode(forecastData[6].fcttext);
  h6.appendChild(text);
  var day4 = document.querySelector('#dayDescrip4');
  day4.appendChild(text);

  var h6 = document.createElement('H6');
  docFrag.appendChild(h6);
  var text = document.createTextNode(forecastData[8].fcttext);
  h6.appendChild(text);
  var day5 = document.querySelector('#dayDescrip5');
  day5.appendChild(text);

  var h2 = document.createElement('h2');
  docFrag.appendChild(h2);
  var text = document.createTextNode(forecastData[0].title);
  h2.appendChild(text);
  var dayTitle1 = document.querySelector('#dayTitle1');
  dayTitle1.appendChild(text);

  var h2 = document.createElement('h2');
  docFrag.appendChild(h2);
  var text = document.createTextNode(forecastData[2].title);
  h2.appendChild(text);
  var dayTitle2 = document.querySelector('#dayTitle2');
  dayTitle2.appendChild(text);

  var h2 = document.createElement('h2');
  docFrag.appendChild(h2);
  var text = document.createTextNode(forecastData[4].title);
  h2.appendChild(text);
  var dayTitle3 = document.querySelector('#dayTitle3');
  dayTitle3.appendChild(text);

  var h2 = document.createElement('h2');
  docFrag.appendChild(h2);
  var text = document.createTextNode(forecastData[6].title);
  h2.appendChild(text);
  var dayTitle4 = document.querySelector('#dayTitle4');
  dayTitle4.appendChild(text);

  var h2 = document.createElement('h2');
  docFrag.appendChild(h2);
  var text = document.createTextNode(forecastData[8].title);
  h2.appendChild(text);
  var dayTitle5 = document.querySelector('#dayTitle5');
  dayTitle5.appendChild(text);
}
