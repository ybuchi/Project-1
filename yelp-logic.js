console.log("inside logic");

// attach click evet to submit button
$("#btn-submit").on("click", function () {
    var input = $("#user-input").val();
    // make ajax request (with user's input)
    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=" + input,
        method: "GET",
        headers: {
            Authorization: "Bearer WiXbsy75bj1fi8JFfh5jTc2uoaEfzNNxF2pZ-b60BhFWQlPSNlGPyE25WUZgX0_Wq4YAgJJW-gJ4R6VRZ7JtPyhB4O19lOE03nAWO2PZcxUw68mC5sjxvsfePIh1XXYx"
        }
    }).then(function (response) {
        console.log(response)

        
    })
});




