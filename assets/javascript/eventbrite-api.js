// Create global variables
$( document ).ready(function() {
    console.log( "ready!" );
});

$("#btn-submit").click(function(){
    event.preventDefault();
    console.log("The user has clicked the submit button.");

    //Create variables for AJAX call
    //
    var eventAddress = $("user-input").val();
    console.log(eventAddress);

    var APIkey = "FWYJCNLH34HYMJ3ZOE";
    
    //Constructing the URL
    var queryURL = "https://www.eventbriteapi.com/v3/users/me/?token=" + APIkey + "/events/search/?location.address="+ eventAddress;

    //Make the AJAX call

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){

        console.log(response);

    })




})
