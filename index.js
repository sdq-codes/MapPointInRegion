function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 6.609056, lng: 3.339444},
    zoom: 16,
    mapTypeId: 'terrain'
  });

  // Define the LatLng coordinates for the polygon's path.
  var polygonCoOrdinates = [
    {lat: 6.601572, lng: 3.333187},
    {lat: 6.613895, lng: 3.332991},
    {lat: 6.614138, lng: 3.335715},
    {lat: 6.614468, lng: 3.335704},
    {lat: 6.614787, lng: 3.345674},
    {lat: 6.610598, lng: 3.344467},
    {lat: 6.607235, lng: 3.349016},
    {lat: 6.608459, lng: 3.351264},
  ];

  // Construct the polygon.
  var polugonRegion = new google.maps.Polygon({
    paths: polygonCoOrdinates,
    strokeColor: 'green',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: 'green',
    fillOpacity: 0.35
  });
  polugonRegion.setMap(map);
  var input = document.getElementById('searchTextField');
  var autocomplete = new google.maps.places.Autocomplete(input);
  google.maps.event.addListener(autocomplete, 'place_changed', function(data) {
    // var data = document.getElementById("searchTextField").serialize();
    console.log();
    var rsul = google.maps.geometry.poly.containsLocation(
      new google.maps.LatLng(
        autocomplete.getPlace().geometry.location.lat(), 
        autocomplete.getPlace().geometry.location.lng()
        ), polugonRegion)
    ;
    alert(rsul);
  });
}

function checkIfLocationInRegion(lat, long) {
  
}
