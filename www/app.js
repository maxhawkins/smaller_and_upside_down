var place = new google.maps.LatLng(37.7862874, -122.4049437);

var map, marker;

function update() {
  if (!map) {
    return;
  }
  var bounds = map.getBounds();
  var width = bounds.getSouthWest().lng() - bounds.getNorthEast().lng();
  map.setCenter({
    lat: place.lat(),
    lng: place.lng() + width * 0.25
  });
}

function initialize() {
  var canvas = document.getElementById('map-canvas');
  map = new google.maps.Map(
    canvas, {zoom: 17, center: place, disableDefaultUI: true});
  marker = new google.maps.Marker({position: place, map: map});
  google.maps.event.addListener(map, 'tilesloaded', update);
}

google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, 'resize', update);

smoothScroll.init();
