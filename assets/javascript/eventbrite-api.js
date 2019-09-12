// Create global variables
$( document ).ready(function() {
    console.log( "ready!" );
});

$("#btn-submit").click(function(){
    console.log("The user has clicked the submit button.");

    //Create variables for AJAX call
    //
    var eventAddress = $("#user-input").val();
    console.log(eventAddress);

    var APIkey = "FWYJCNLH34HYMJ3ZOE";
    
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
        console.log('response received ');
        console.log(response);
    })



})
