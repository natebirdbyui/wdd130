//function initMap() {
//    var location = {lat: 43.813784, lng: -115.871380};
//    var map = new google.maps.Map(document.getElementById('map'), {
//        zoom: 15,
//        center: location
//    });
//    var marker = new google.maps.Marker({
//        position: location,
//        map: map
//    });
//}
//
//// Load the Google Maps API script dynamically
//function loadGoogleMapsAPI() {
//    var script = document.createElement('script');
//    script.src = 'https://www.google.com/maps/@43.8139977,-115.871408,19.21z?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D';
//    document.head.appendChild(script);
//}
//// Call the function to load the Google Maps API
//loadGoogleMapsAPI();

function countDownTimer() {
    var countDownDate = new Date("August 29, 2025 13:00:00").getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);
}
countDownTimer();