var markersData = [{
    lat: 50.506204,
    lng: 30.4166926,
    name: "Ламінат паркет & decor",
    address: "Украина, г. Киев,  просп. Правды, 80"
}];

var map, infoWindow;

function initMap() {
    var centerLatLng = new google.maps.LatLng(50.506204, 30.4166926);

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
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#ffffff"
            }, {
                "lightness": 40
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }, {
            "featureType": "administrative.province",
            "elementType": "labels.text",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "administrative.locality",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative.neighborhood",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative.neighborhood",
            "elementType": "geometry.fill",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative.neighborhood",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative.land_parcel",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "lightness": 17
            }, {
                "color": "#d6c400"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "lightness": 18
            }, {
                "color": "#a29100"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#ccb300"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "labels.text",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "lightness": 16
            }, {
                "color": "#5a5300"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#fbd216"
            }, {
                "lightness": 17
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