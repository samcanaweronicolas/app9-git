// JavaScript Document

 $(document).ready(function (e){
	 document .addEventListener("deviceready",onDeviceReady,false);
	 
 });
 
 function onDeviceReady(){
	 
	  $('#posicion').on('click',function(){
		  getPosition ();
	  });
	  
	  $('#watch').on('click',function(){
		  watchPosition ();
	  });
	  
 }
 
 function getPosition(){
	 var options={
		 enableHighAccuracy : true,
		 maximumAge: 3600000
	 }
	 
	 var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
	 function onSuccess(position){
		 
		 alert('Latitude:'    +position.coords.latitude    +'\n' +
		 'Longitude:'    +position.coords.longitude    +'\n' +
		 'Altitude:'    +position.coords.altitude    +'\n' +
		 'Accuracy:'    +position.coords.accuracy    +'\n' +
		 'Altitude Accuracy:'    +position.coords.altitudeAccuracy    +'\n' +
		 'Heading:'    +position.coords.heading    +'\n' +
		 'Speed:'    +position.coords.speed    +'\n' +
		 'Timestamp:'    +position.timestamp   +'\n');
	 };
	 function onError(error){
		 alert('code:'  +error.code  + +'\n' + 'message:' + error.message +'\n');
	 }
 }