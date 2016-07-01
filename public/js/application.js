$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
      // function initMap() {
      //   var mapDiv = document.getElementById('map');
      //   var map = new google.maps.Map(mapDiv, {
      //       center: {lat: 44.540, lng: -78.546},
      //       zoom: 8
      //   });
      // }
      function initialize() {
        var mapProp = {
          center:new google.maps.LatLng(51.508742,-0.120850),
          zoom:5,
          mapTypeId:google.maps.MapTypeId.ROADMAP
        };
        var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
        }
        google.maps.event.addDomListener(window, 'load', initialize);
        var marker = new google.maps.Marker({
          position:myCenter,
        });
        marker.setMap(map);
});
