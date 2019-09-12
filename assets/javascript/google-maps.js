//Builds the API query URL; logs it to the console for reference
var apiKey = "AIzaSyD_uRt9vKnbfDV5hnOzck20BCb6-NhR0kc";

//Variables to help display places
var map;
var service;
var infowindow;

function initMap() {
  var map = new google.maps.Map(document.getElementById('map-api'), {
    zoom: 12,
    center: { lat: 41.323516, lng: -71.804009 },
    //Control Features for the map Display
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: true,
    rotateControl: false,
    fullscreenControl: true
  });

  //Transit Layers
  var geocoder = new google.maps.Geocoder();
  var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
  var transitLayer = new google.maps.TransitLayer();
  transitLayer.setMap(map);
  var bikeLayer = new google.maps.BicyclingLayer();
  bikeLayer.setMap(map);

  // //Listener for new user input
  // document.getElementById('btn-submit').addEventListener('click', function () {
  //   geocodeAddress(geocoder, map);
  // });
}

// Function that receives an address from the user and receives polar coordinates for the location from Google Maps
var address = document.getElementById('address').value;

function geocodeAddress(geocoder, resultsMap) {

  geocoder.geocode({ 'address': address }, function (results, status) {
    if (status === 'OK') {
      console.log(results[0]);
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });

    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        var place = results[i];
        createMarker(results[i]);
      }
    }
  }

}

Nearby Places Request
var request = {
  //Need to figure out a way to get Long/Lat into this object field
  location: getLocation(address),
  radius: '16129',
  keyword: 'beach'
};

console.log(request.location);

service = new google.maps.places.PlacesService(map);
service.nearbySearch(request, callback);

Ajax Request to Geocode API
var getLocation = function (address) {
  $.ajax({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=AIzaSyD_uRt9vKnbfDV5hnOzck20BCb6-NhR0kc',
    method: 'GET'
  }).then(function (result) {
    console.log(result.results[0].geometry.location);
    return result.results[0].geometry.location;
  });
}