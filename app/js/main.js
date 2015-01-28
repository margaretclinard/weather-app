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
  var docFragment = document.createDocumentFragment();   
  
  var img = document.createElement('IMG');
  img.setAttribute("src", forecastData[0].icon_url);
  docFragment.appendChild(img);
  var mainPic = document.querySelector('#featured');
  mainPic.appendChild(docFragment);


}
