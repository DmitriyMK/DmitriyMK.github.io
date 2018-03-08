$(document).ready(function() {    

    $("body").niceScroll({
        scrollspeed: 60,
        mousescrollstep: 60,
        smoothscroll: true,
        cursorwidth: 10,
        cursorborder: 0,
        cursorcolor: '#b4ff00',
        cursorborderradius: 2,
        autohidemode: true,
        horizrailenabled: false,
        cursoropacitymin: 1,
        background: false,
        zindex: "9999"
    });

    $('html').addClass('no-overflow-y');

    $('.parallax').scrolly({
        bgParallax: true
    });

});


function initMap() {

    var latlng = new google.maps.LatLng(50.4301508, 30.4737559);
    var settings = {
        zoom: 17.2,
        center: latlng,
        center: {
            lat: 50.4301508, 
            lng: 30.47775579
        },
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


[
  {
    "stylers": [
      {
        "saturation": -100
      },
      {
        "lightness": -25
      }
    ]
  },
  {
    "elementType": "geometry.fill",
    "stylers": [
      {
        "lightness": 30
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "weight": 0.5
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
]

    };
    var map = new google.maps.Map(document.getElementById("google-map"), settings);
    var myLatlng = new google.maps.LatLng(50.4301508, 30.47375579);

    var myOptions = {
        zoom: 10,
        center: myLatlng,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var image = '../images/mark.png';
    var beachMarker = new google.maps.Marker({
        position: {
            lat: 50.4301508,
            lng: 30.47375579
        },
        map: map,
        icon: image
            // title: 'Push-k Solutions'
    });

};

