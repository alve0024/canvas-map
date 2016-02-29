/*
 *  Algonquin College - All right reserved!
 *
 *  Leonardo Alps - (alve0024) - Feb 28th 2016
 *
 *  Professor: Tony
 */

document.addEventListener("DOMContentLoaded", function(){
	getLocation();  
});

function getLocation() {
  if( navigator.geolocation ){ 
    var params = {enableHighAccuracy: false, timeout:3600, maximumAge:60000};
    navigator.geolocation.getCurrentPosition(reportPosition, gpsError, params); 
  }else{
    alert("Sorry, but your browser does not support geolocation")
  }	
}

function reportPosition( position ){ 
  showPosition(position);
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  var width = "400";
  var height = "400";
  var key = "AIzaSyCUSg0ii3W4VzjgUOt_Zd75un55prpi-So";
  var url = "https://maps.googleapis.com/maps/api/staticmap?center="+latitude+","+longitude+
  			"&zoom=14&size="+width+"x"+height+"&maptype=roadmap&key="+key;
  var canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  document.querySelector("body").appendChild(canvas);
  var context = canvas.getContext("2d");
  var imgMap = new Image();

  imgMap.onload = function() {
    context.drawImage(imgMap, 0, 0, 400, 400);
  };

  imgMap.src = url;
}

function showPosition(position) {
  var pos = document.createElement("h1");
  document.querySelector("body").appendChild(pos);
  pos.innerHTML += "Latitude: "+ position.coords.latitude + "&deg;<br/>"
   + "Longitude: " + position.coords.longitude + "&deg;<br/>";
}

function gpsError( error ){   
  var errors = {
    1: 'Permission denied',
    2: 'Position unavailable',
    3: 'Request timeout'
  };
  alert("Error: " + errors[error.code]);
}