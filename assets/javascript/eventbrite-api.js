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

///////////////////////////////////
    //BUILD THE NEW PAGE

     //Empty the page
     $("body").html("");

     //Add a navbar
     var navbar = $("<nav>").addClass("navbar navbar-light");
     navbar.attr("id", "navbar");

     $("body").append(navbar);

     var navbarBrand = $("<a>").addClass("navbar-brand mb-0 h1");
     navbarBrand.attr("id", "navbar-brand");
     navbarBrand.attr("href", "https://ybuchi.github.io/Project-1/");
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

         // display LARGE DIV (Google Maps, Weather, Yelp)
     var largeDiv = $("<div>").addClass("col-md-8");
     largeDiv.attr("id", "large-div");
     $("#row-1").append(largeDiv);

     var largeContainer = $("<div>").addClass("container");
     largeContainer.attr("id", "large-container");
     $("#large-div").append(largeContainer);

    //////////////////GOOGLE MAPS DIV   
     var mapRow = $("<div>").addClass("row");
     mapRow.attr("id", "map-row");
     $("#large-container").append(mapRow);

     var mapDiv = $("<div>").addClass("col-md-12");
     mapDiv.attr("id", "map-div");
     $("#map-row").append(mapDiv);

     /////////////// Weather
     var weatherRow = $("<div>").addClass("row");
     weatherRow.attr("id", "weather-row");
     $("#large-container").append(weatherRow);

     var weatherDiv = $("<div>").addClass("col-md-12");
     weatherDiv.attr("id", "weather-div");
     $("#weather-row").append(weatherDiv);

     /////////////// YELP
     var yelpRow = $("<div>").addClass("row");
     yelpRow.attr("id", "yelp-row");
     $("#large-container").append(yelpRow);



         // display Eventbrite DIV
     var eventDiv = $("<div>").addClass("col-md-4 mt-4");
     eventDiv.attr("id", "eventbrite-div");
     eventDiv.attr("style", "height: 600px");
     $("#row-1").append(eventDiv);

     var eventTitle = $("<h3>").addClass("eventdiv-title");
     eventTitle.attr("id", "event-div-title")
     eventTitle.append("EVENTS");
     $("#eventbrite-div").append(eventTitle);
//////////////////////////////
    
    //Constructing the URL

    var queryURL = "https://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search?location.address=" + eventAddress + "&location.within=10km&categories=103&expand=venue&expand=category";

////////////////Make the EVENTBRITE AJAX call

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
   
        // USE A FOR LOOP TO DISPLAY EVENT CARDS

        for (i = 0; i < response.events.length; i++){

        //Create divs with appropriate ids to receive the API information
        var eventDescription = response.events[i].name.text;
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

        var eventInfoDiv = $("<p>").addClass("card-text my-2");
        eventInfoDiv.attr("id", "event-info" + i);
        eventInfoDiv.append(eventDescription);
        $("#event-card" + i).append(eventInfoDiv);

   
        
        // Append the Eventbrite Information

        //This is the event description that we will want to post
        console.log("The Eventbrite respnose that will be displayed is:" + JSON.stringify(response.events[i].name.text));

        }//end of for loop


    })//end of EVENTBRITE then() function


//////////////MAKE THE YELP AJAX CALL

      // make ajax request (with user's input)
      $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=" + eventAddress,
        method: "GET",
        headers: {
            Authorization: "Bearer WiXbsy75bj1fi8JFfh5jTc2uoaEfzNNxF2pZ-b60BhFWQlPSNlGPyE25WUZgX0_Wq4YAgJJW-gJ4R6VRZ7JtPyhB4O19lOE03nAWO2PZcxUw68mC5sjxvsfePIh1XXYx"
        }
    }).then(function (response) {
        console.log(response)

      

        //Display the businesses using for loop

        for (i = 0; i < response.businesses.length; i++){
            
        console.log("the Yelp for loop is executing");
        console.log(response.businesses.length);
        console.log("The response business length is" + response.businesses.length);
        //Save the variables from the response that we will use
        var businessName = response.businesses[i].name;
        console.log("the business's name is " + businessName);
        var businessPhone = response.businesses[i].display_phone;
        var businessRating = response.businesses[i].rating;
        var businessWebsite = response.businesses[i].url;
        var businessImage = response.businesses[i].image_url


        //Put them in the yelp Div

        //create and display yelp card
        var yelpCard = $("<div>").addClass("card col-md-4 mb-3");
        yelpCard.attr("id", "yelp-card" + i);
        $("#yelp-row").append(yelpCard);

        // Display the yelp logo

        var yelpLogoDiv = $("<img>").addClass("card-img-top");
        yelpLogoDiv.attr("src", businessImage);
        yelpLogoDiv.attr("id", "yelp-logo" + i);
        yelpLogoDiv.attr("style", "width: 100%");
        $("#yelp-card" + i).append(yelpLogoDiv)

        //Display the yelp info

        var yelpInfoDiv = $("<p>").addClass("card-text my-2");
        yelpInfoDiv.attr("id", "yelp-info" + i);
        yelpInfoDiv.append(businessName + "<br>" + businessPhone + "<br> Rating: " + businessRating + "<br>" + businessWebsite);
        $("#yelp-card" + i).append(yelpInfoDiv);

        }//end of yelp for loop



        
    })

});
