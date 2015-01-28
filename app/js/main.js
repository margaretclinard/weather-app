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

function display(data){
  var forecastData = data.forecast.txt_forecast.forecastday;
  var docFragment1 = document.createDocumentFragment();
  var docFragment2 = document.createDocumentFragment();
  var docFragment3 = document.createDocumentFragment();
  var docFragment4 = document.createDocumentFragment();
  var docFragment5 = document.createDocumentFragment();

  var img = document.createElement('IMG');
  img.setAttribute("src", forecastData[0].icon_url);
  docFragment1.appendChild(img);
  var mainPic = document.querySelector('#featured');
  mainPic.appendChild(docFragment1);

  var img = document.createElement('IMG');
  img.setAttribute("src", forecastData[2].icon_url);
  docFragment2.appendChild(img);
  var secondPic = document.querySelector('#img2');
  secondPic.appendChild(docFragment2);

   var img = document.createElement('IMG');
  img.setAttribute("src", forecastData[4].icon_url);
  docFragment3.appendChild(img);
  var thirdPic = document.querySelector('#img3');
  thirdPic.appendChild(docFragment3);

   var img = document.createElement('IMG');
  img.setAttribute("src", forecastData[6].icon_url);
  docFragment4.appendChild(img);
  var fourthPic = document.querySelector('#img4');
  fourthPic.appendChild(docFragment4);

   var img = document.createElement('IMG');
  img.setAttribute("src", forecastData[8].icon_url);
  docFragment5.appendChild(img);
  var fifthPic = document.querySelector('#img5');
  fifthPic.appendChild(docFragment5);
}


