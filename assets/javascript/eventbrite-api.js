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
        var navbar = $("<nav>").addClass("navbar navbar-light");
        navbar.attr("id", "navbar");
        $("body").append(navbar);

        var navbarBrand = $("<a>").addClass("navbar-brand mb-0 h1");
        navbarBrand.attr("id", "navbar-brand")
        navbarBrand.append("Beach Box");
        $(navbar).append(navbarBrand);


        // Create the high-level container
        var hlContainer = $("<div>").addClass("container");
        hlContainer.attr("id", "hl-container");
        $("body").append(hlContainer);

        //Create the row and divs for the map and eventbrite apis

        var row1 = $("<div>").addClass("row");
        row1.attr("id", "row-1");
        $("#hl-container").append(row1);

            // display GOOGLE MAPS DIV
        var mapDiv = $("<div>").addClass("col-md-8");
        mapDiv.attr("id", "map-div");
        $("#row-1").append(mapDiv);

            // display Eventbrite DIV
        var eventDiv = $("<div>").addClass("col-md-4 mt-4");
        eventDiv.attr("id", "eventbrite-div");
        eventDiv.attr("style", "height: 600px");
        $("#row-1").append(eventDiv);

        var eventTitle = $("<h3>").addClass("eventdiv-title");
        eventTitle.attr("id", "event-div-title")
        eventTitle.append("EVENTS");
        $("#eventbrite-div").append(eventTitle);

        // USE A FOR LOOP TO DISPLAY EVENT CARDS

        for (i = 0; i < response.events.length; i++){

        //Create divs with appropriate ids to receive the API information
        var eventDescription = response.events[i].description.text;
        var eventLogo = response.events[i].logo.url;

                //display event card
        var eventCard = $("<div>").addClass("card mb-3");
        eventCard.attr("id", "event-card" + i);
        $("#eventbrite-div").append(eventCard);

        // Display the event logo

        var eventLogoDiv = $("<img>").addClass("card-img-top");
        eventLogoDiv.attr("src", eventLogo);
        eventLogoDiv.attr("id", "event-logo" + i);
        eventLogoDiv.attr("style", "width: 100%");
        $("#event-card" + i).append(eventLogoDiv)

        //Display the event info

        var eventInfoDiv = $("<p>").addClass("card-text");
        eventInfoDiv.attr("id", "event-info" + i);
        eventInfoDiv.append(eventDescription);
        $("#event-card" + i).append(eventInfoDiv);

   
        
        // Append the Eventbrite Information

        //This is the event description that we will want to post
        console.log("The Eventbrite respnose that will be displayed is:" + JSON.stringify(response.events[i].description.text));

        }


    })
});
