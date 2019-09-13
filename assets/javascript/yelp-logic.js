// console.log("inside logic");

// // attach click evet to submit button
// $("#btn-submit").on("click", function () {

//     // make ajax request (with user's input)
//     $.ajax({
//         url: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=" + input,
//         method: "GET",
//         headers: {
//             Authorization: "Bearer WiXbsy75bj1fi8JFfh5jTc2uoaEfzNNxF2pZ-b60BhFWQlPSNlGPyE25WUZgX0_Wq4YAgJJW-gJ4R6VRZ7JtPyhB4O19lOE03nAWO2PZcxUw68mC5sjxvsfePIh1XXYx"
//         }
//     }).then(function (response) {
//         console.log(response)

      

//         //Display the businesses using for loop

//         for (i = 0; i < response.businesses.length; i++){
            

//         //Save the variables from the response that we will use
//         var businessName = response.businesses[i].name;
//         var businessPhone = response.business[i].display_phone;
//         var businessRating = response.business[i].rating;
//         var businessWebsite = response.business[i].url;
//         var businessImage = response.business[i].image_url


//         //Put them in the yelp Div

//         //display yelp card
//         var yelpCard = $("<div>").addClass("card mb-3");
//         yelpCard.attr("id", "yelp-card" + i);
//         $("#yelp-div").append(yelpCard);

//         // Display the yelp logo

//         var yelpLogoDiv = $("<img>").addClass("card-img-top");
//         yelpLogoDiv.attr("src", businessImage);
//         yelpLogoDiv.attr("id", "yelp-logo" + i);
//         yelpLogoDiv.attr("style", "width: 100%");
//         $("#yelp-card" + i).append(yelpLogoDiv)

//         //Display the yelp info

//         var yelpInfoDiv = $("<p>").addClass("card-text my-2");
//         yelpInfoDiv.attr("id", "yelp-info" + i);
//         yelpInfoDiv.append(businessName + "<br>" + businessPhone + "<br> Rating: " + businessRating + "<br>" + businessWebsite);
//         $("#yelp-card" + i).append(yelpInfoDiv);

//         }//end of yelp for loop



        
//     })
// });




