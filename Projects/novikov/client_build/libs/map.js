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
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#272b43"
            }]
        }, {
            "featureType": "administrative.country",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#e4e7f3"
            }]
        }, {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#272b43"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
                "color": "#e4e7f3"
            }]
        }, {
            "featureType": "landscape.man_made",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#d5daed"
            }]
        }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{
                "saturation": -100
            }, {
                "lightness": 45
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ffffff"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#6c7795"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }, {
                "weight": "1"
            }]
        }, {
            "featureType": "road.highway.controlled_access",
            "elementType": "labels",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ffffff"
            }]
        }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }, {
                "hue": "#0033ff"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry.fill",
            "stylers": [{
                "lightness": "10"
            }, {
                "hue": "#0033ff"
            }, {
                "saturation": "30"
            }, {
                "weight": "1"
            }]
        }, {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#6c7795"
            }]
        }, {
            "featureType": "transit",
            "elementType": "labels.icon",
            "stylers": [{
                "color": "#272b43"
            }, {
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }, {
                "color": "#272b43"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [{
                "visibility": "simplified"
            }, {
                "color": "#b1b6cb"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#272b43"
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