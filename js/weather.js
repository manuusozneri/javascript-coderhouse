$(document).ready(function() {
    $("#search-location").click(function() {
        var city = $("#location").val();
        console.log(city);
        if (city == "") {
            alert("Seleccione una ciudad")
        }else {
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=b35f2edf8797381a5ca23b458fbac6eb&units=metric",
                type: 'GET',
                success: function(data) {
                    $(".city-name").html(data.name);
                    $(".country-name").html(data.sys.country);
                    $(".icon-weather").html("<img src='https://openweathermap.org/img/wn/"+data.weather[0].icon+".png'>");
                    $(".temperature-degree").html(data.main.temp+"°");
                    $(".temperature-main").html(data.weather[0].main);
                    $(".temperature-description").html(data.weather[0].description);
                }
            })
        }
    });
    
})

    


    

    
    
    

