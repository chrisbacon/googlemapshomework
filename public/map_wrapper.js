var MapWrapper = function(container, center, zoom) {
    this.googleMap = new google.maps.Map(container, {center: center,
        zoom: zoom
    });
}

MapWrapper.prototype = {
    addMarker: function(coords) {
        var marker = new google.maps.Marker({
            position: coords,
            map: this.googleMap
        })

        var infowindow = new google.maps.InfoWindow({
            content: "The latitude of this marker is " + coords.lat + " the longitude is " + coords.lng
        });

        marker.addListener('click', function() {
            infowindow.open(this.googleMap, marker);
        }.bind(this));
    },

    addClickEvent: function() {

        google.maps.event.addListener(this.googleMap, 'click', function(event) {
            var latLng = {lat: event.latLng.lat(), lng:event.latLng.lng()};

            this.addMarker(latLng);
        }.bind(this))
    },

    setCenter: function(coords) {
        this.googleMap.setCenter(coords);
    },

    setZoom: function(zoom) {
        this.googleMap.setZoom(zoom);
    }
}