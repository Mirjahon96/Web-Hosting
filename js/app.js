// google maps 40.2222286, 69.270886
const position = [40.2222286, 69.270886];
const centerPosition = [40.2222297, 69.270897];

function showGoogleMaps() {
  // Map positions
  const latLng = new google.maps.LatLng(position[0], position[1]);
  const centerLatLng = new google.maps.LatLng(
    centerPosition[0],
    centerPosition[1]
  );

  // Map options
  const mapOptions = {
    zoom: 12,
    streetViewControl: false,
    scaleControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: centerLatLng
  };

  // Create map
  map = new google.maps.Map(document.getElementById('map'), mapOptions);

  // Show Marker
  marker = new google.maps.Marker({
    position: latLng,
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP
  });
}

// Maps event
google.maps.event.addDomListener(window, 'load', showGoogleMaps);
