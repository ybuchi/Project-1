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

    var queryURL = "https://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search?location.address=" + eventAddress + "&location.within=10km&categories=103&expand=venue&expand=category";

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
        mapDiv.attr("id", "eb-logo");
        $("#api-row-1").append(mapDiv);

        var eventBriteDiv = $("<div>").addClass("col-md-6");
        eventBriteDiv.attr("id", "eb-info");
        $("#api-row-1").append(eventBriteDiv);


        // Append the Eventbrite Information

        //This is the event description that we will want to post
        console.log("The Eventbrite respnose that will be displayed is:" + JSON.stringify(response.events[0].description.text));

        var eventDescription = response.events[0].description.text;
        var eventLogo = $("<img>").attr("src",response.events[0].logo.url)

        $("#eb-info").append(eventDescription);
        $("#eb-logo").append(eventLogo);



    })
});
