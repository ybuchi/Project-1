$(document).ready(function(){
    $('#btn-submit').click(function(){
        var userInput = $('#user-input').val();

        if (userInput != '') {

            $.ajax({

                url: 'http://api.openweathermap.org/data/2.5/weather?q=London' + userInput + '&units=imperial' ++ '&APPID=9b40e26591d4e0f348c8b86121312754',
                type: 'GET',
                dataType: 'jsonp',
                success:function(data){
                    console.log(data);
                }
            });

        } else{ ("#error").html ('Field cannot be empty');

        }

    });

});




$("#btn-submit").on('click' ,function(){
    var x = $(this).data("search");

    var queryURL = "api.openweathermap.org/data/2.5/weather?q="+x+"&api_key=9b40e26591d4e0f348c8b86121312754";
    console.log (queryURL);})

    $.ajax({
        url:queryURL,
        method:'GET'})
    .then(function(response){
        console.log("WEATHER data is loaded");
        console.log(response);
    })
    