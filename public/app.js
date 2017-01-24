var initialize = function() {

    var mapDiv = document.querySelector('#main-map');
    var center = {lat: 51.505456, lng: -0.075356};
    var zoom = 5;
    var mainMap = new MapWrapper(mapDiv, center, zoom);

    mainMap.addClickEvent();


    var berlin = document.querySelector('#berlin');
    berlin.onclick = function() {
        mainMap.setCenter({lat: 52.520007, lng: 13.404954});
        mainMap.setZoom(10);
        mainMap.addMarker({lat: 52.520007, lng: 13.404954});
    }

    var where = document.querySelector('#where');
    where.onclick = function() {
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(function(position) {
            mainMap.setCenter({lat: position.coords.latitude, lng: position.coords.longitude});
            mainMap.setZoom(10);
            mainMap.addMarker({lat: position.coords.latitude, lng: position.coords.longitude});
          });
        }
    }
    

}

window.onload = initialize;