var markersData = [{
    lat: 51.478711,
    lng: 31.2740772,
    name: "НогтиРост",
    address: "Чернигов, ул. Музыкальная 1, ТЦ Рояль, 2-этаж, бутик №209"
}];

var map, infoWindow;

function initMap() {
    var centerLatLng = new google.maps.LatLng(51.478711, 31.2780772);

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
                "color": "#444444"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
                "color": "#f2f2f2"
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
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "color": "#4d405c"
            }, {
                "visibility": "on"
            }]
        }]


    };



    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    /*    infoWindow = new google.maps.InfoWindow();

        google.maps.event.addListener(map, "click", function() {
            infoWindow.close();
        });*/

    // Определяем границы видимой области карты в соответствии с положением маркеров
    var bounds = new google.maps.LatLngBounds();

    for (var i = 0; i < markersData.length; i++) {

        var latLng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
        var name = markersData[i].name;
        var address = markersData[i].address;

        addMarker(latLng, name, address);

        // Расширяем границы нашей видимой области, добавив координаты нашего текущего маркера
        bounds.extend(latLng);
    }

    // Автоматически масштабируем карту так, чтобы все маркеры были в видимой области карты
    /*map.fitBounds(bounds);*/

}

/*google.maps.event.addDomListener(initMap);*/

function addMarker(latLng, name, address) {

    var image = 'images/marker.png';

    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        icon: image,
        title: name
    });


}