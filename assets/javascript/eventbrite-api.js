// Create global variables
$( document ).ready(function() {
    console.log( "Evenbrite API JS says READY!" );
});

// **** WHEN THE USER CLICKS SUBMIT ****
$("#btn-submit").click(function(){
    console.log("The Eventbrite API request is ready to be initiated.");

    //Store the inputted address

    var eventAddress = $("#user-input").val();
    console.log(eventAddress);
    
    //Constructing the URL

    var queryURL = "https://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search?location.address=" + eventAddress + "&location.within=10km&expand=venue";

    //Make the AJAX call

    $.ajax({
        url: queryURL,
        method: "GET",
        headers: {
            Authorization: "Bearer FYKCROWHDWQSXBO7WGPZ"
        }
    })
    .then(function(response) {
        console.log('response received');
        console.log(response);
   

        //Empty the page
        $("body").html("");

        //Add a navbar

        //Create divs with appropriate ids to receive the API information

        var apiContainer1 = $("<div>").addClass("container");
        apiContainer1.attr("id", "api-container-1");
        $("body").append(apiContainer1);

        var apiRow1 = $("<div>").addClass("row");
        apiRow1.attr("id", "api-row-1");
        $("#api-container-1").append(apiRow1);

        var mapDiv = $("<div>").addClass("col-md-6");
        mapDiv.attr("id", "map-api");
        $("#api-row-1").append(mapDiv);

        var eventBriteDiv = $("<div>").addClass("col-md-6");
        eventBriteDiv.attr("id", "eventbrite-api");
        $("#api-row-1").append(eventBriteDiv);


        // Append the Eventbrite Information

        //This is the event description that we will want to post
        console.log("The Eventbrite respnose that will be displayed is:" + JSON.stringify(response.events[0].description.text));

        var eventDescription = response.events[0].description.text;

        $("#eventbrite-api").append(eventDescription);

// / Google Maps API

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

  //Listener for new user input
  document.getElementById('btn-submit').addEventListener('click', function () {
    geocodeAddress(geocoder, map);
  });
}

// Function that receives an address from the user and receives polar coordinates for the location from Google Maps
var address = eventAddress;

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

};

initMap();
    })



//Nearby Places Request
// var request = {
//   //Need to figure out a way to get Long/Lat into this object field
//   location: getLocation(address),
//   radius: '16129',
//   keyword: 'beach'
// };

// console.log(request.location);

// service = new google.maps.places.PlacesService(map);
// service.nearbySearch(request, callback);

//Ajax Request to Geocode API
// var getLocation = function (address) {
//   $.ajax({
//     url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=AIzaSyD_uRt9vKnbfDV5hnOzck20BCb6-NhR0kc',
//     method: 'GET'
//   }).then(function (result) {
//     console.log(result.results[0].geometry.location);
//     return result.results[0].geometry.location;
//   });
// }
})
