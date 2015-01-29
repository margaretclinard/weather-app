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
