// Create global variables
$( document ).ready(function() {
    console.log( "ready!" );
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
    })

//Empty the page
$("body").html("");


})
