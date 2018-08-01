var markersData = [{
    lat: 48.4625462,
    lng: 34.9431686,
    name: "",
    address: ""
}];

var map, infoWindow;

function initMap() {
    var centerLatLng = new google.maps.LatLng(48.4625462, 34.9441686);

    var mapOptions = {
        center: centerLatLng,
        zoom: 15,

        mapTypeControl: true,

        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        },

        scrollwheel: false,
        disableDoubleClickZoom: true,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP,

        styles:


            [{
            "elementType": "geometry",
            "stylers": [{
                "color": "#242f3e"
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#746855"
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#242f3e"
            }]
        }, {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#d59563"
            }]
        }, {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#d59563"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#263c3f"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#6b9a76"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
                "color": "#38414e"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#212a37"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#9ca5b3"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
                "color": "#746855"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#1f2835"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#f3d19c"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#2f3948"
            }]
        }, {
            "featureType": "transit.station",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#d59563"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#17263c"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#515c6d"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#17263c"
            }]
        }]

    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var bounds = new google.maps.LatLngBounds();

    for (var i = 0; i < markersData.length; i++) {

        var latLng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
        var name = markersData[i].name;
        var address = markersData[i].address;

        addMarker(latLng, name, address);

        bounds.extend(latLng);
    }

    // map.fitBounds(bounds);

}

function addMarker(latLng, name, address) {

    var image = 'images/marker.png';

    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        icon: image,
        title: name
    });


}