document.addEventListener("DOMContentLoaded", function(){
	getLocation();
});

function getLocation() {
	if (navigator.geolocation) {
		
		navigator.geolocation.getCurrentPosition(reportPosition, gpsError);
		
	} else {
		alert("This browser does not support geolocation");
	}
}

function reportPosition(position) {
	// var lat = 
	// var lon = 
	// var url = "https://maps.googleapis.com/maps/api/staticmap?maptype=satellite&center=37.530101,38.600062&zoom=14&size=640x400&key=AIzaSyCFw85IZM2SOoGyy9wyoZBs0dvw-hHlz3k"
	 console.dir(position);
}

function gpsError(error) {
	alert("GPS Error"+error.value);
}