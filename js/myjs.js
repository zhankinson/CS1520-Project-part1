$("#con").click(function(){
  $("#map").css("visibility", "visible");
});
$("#me").click(function(){
  $("#map").css("visibility", "hidden");
});
$("#you").click(function(){
  $("#map").css("visibility", "hidden");
});

function myMap(){
  var coordinate = {lat: 40.439676, lng: -79.955299};
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center : coordinate
    });
  var marker = new google.maps.Marker({
    position: coordinate,
    map: map
    });
}
