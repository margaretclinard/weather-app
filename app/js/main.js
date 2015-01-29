/*
var url = 'https://api.wunderground.com/api/2691a5c498cbd94e/forecast10day/q/37206.json';
var data;
getJSON(url, display);

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
ADAM B. SAYS IT MAKES MORE SENSE TO HAVE THE ABOVE CODE IN THE BUTTON.JS FILE INSTEAD

*/

function display(data){
  var forecastData = data.forecast.txt_forecast.forecastday;

/* DO WE WANT TO MAKE THE LOCATION A VARIABLE HERE?
  var city-state = document.createDocumentFragment();*/

  var docFragPic1 = document.createDocumentFragment();

  var img = document.createElement('IMG');
  img.setAttribute("src", forecastData[0].icon_url);
  docFragPic1.appendChild(img);
  var mainPic = document.querySelector('#featured');
  mainPic.appendChild(docFragPic1);

  var docFragPic2 = document.createDocumentFragment();

  var img = document.createElement('IMG');
  img.setAttribute("src", forecastData[2].icon_url);
  docFragPic2.appendChild(img);
  var secondPic = document.querySelector('#img2');
  secondPic.appendChild(docFragPic2);

  var docFragPic3 = document.createDocumentFragment();

  var img = document.createElement('IMG');
  img.setAttribute("src", forecastData[4].icon_url);
  docFragPic3.appendChild(img);
  var thirdPic = document.querySelector('#img3');
  thirdPic.appendChild(docFragPic3);

  var docFragPic4 = document.createDocumentFragment();

  var img = document.createElement('IMG');
  img.setAttribute("src", forecastData[6].icon_url);
  docFragPic4.appendChild(img);
  var fourthPic = document.querySelector('#img4');
  fourthPic.appendChild(docFragPic4);

  var docFragPic5 = document.createDocumentFragment();

  var img = document.createElement('IMG');
  img.setAttribute("src", forecastData[8].icon_url);
  docFragPic5.appendChild(img);
  var fifthPic = document.querySelector('#img5');
  fifthPic.appendChild(docFragPic5);

  var docFragDay1 = document.createDocumentFragment();

  var h6 = document.createElement('H6');
  docFragDay1.appendChild(h6);
  var text = document.createTextNode(forecastData[0].fcttext);
  h6.appendChild(text);
  var day1 = document.querySelector('#dayDescrip');
  day1.appendChild(text);

  var docFragDay2 = document.createDocumentFragment();

  var h6 = document.createElement('H6');
  docFragDay2.appendChild(h6);
  var text = document.createTextNode(forecastData[2].fcttext);
  h6.appendChild(text);
  var day2 = document.querySelector('#dayDescrip2');
  day2.appendChild(text);

  var docFragDay3 = document.createDocumentFragment();

  var h6 = document.createElement('H6');
  docFragDay3.appendChild(h6);
  var text = document.createTextNode(forecastData[4].fcttext);
  h6.appendChild(text);
  var day3 = document.querySelector('#dayDescrip3');
  day3.appendChild(text);

  var docFragDay4 = document.createDocumentFragment();

  var h6 = document.createElement('H6');
  docFragDay4.appendChild(h6);
  var text = document.createTextNode(forecastData[6].fcttext);
  h6.appendChild(text);
  var day4 = document.querySelector('#dayDescrip4');
  day4.appendChild(text);

  var docFragDay5 = document.createDocumentFragment();

  var h6 = document.createElement('H6');
  docFragDay5.appendChild(h6);
  var text = document.createTextNode(forecastData[8].fcttext);
  h6.appendChild(text);
  var day5 = document.querySelector('#dayDescrip5');
  day5.appendChild(text);

}