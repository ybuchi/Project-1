$(document).ready(function(){
    $('#btn-submit').click(function(){
        var userInput = $('#user-input').val();

        if (userInput != '') {

            $.ajax({

                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&units=imperial' + '&APPID=9b40e26591d4e0f348c8b86121312754',
                type: 'GET',
                dataType: 'jsonp',
                success:function(weather){
                    console.log(weather)
                    $('body').append("<p>" + weather)
                }
            });

        } else{ ("#error").html ('Field cannot be empty');

        }

    });

});



    