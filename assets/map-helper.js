"use strict"; // Start of use strict

// 7. google map
function gMap () {
	if ($('.google-map').length) {
        $('.google-map').each(function () {
        	// getting options from html
        	var Self = $(this); 
        	var mapName = Self.attr('id');
        	var mapLat = Self.data('map-lat');
        	var mapLng = Self.data('map-lng');
        	var iconPath = Self.data('icon-path');
        	var mapZoom = Self.data('map-zoom');
        	var mapTitle = Self.data('map-title');
        	var markers = Self.data('markers');

        	// defined default style
        	var styles = [{"featureType": "all", "elementType": "geometry", "stylers": [{"visibility": "on"} ] }, {"featureType": "all", "elementType": "labels", "stylers": [{"visibility": "off"} ] }, {"featureType": "all", "elementType": "labels.text", "stylers": [{"visibility": "off"} ] }, {"featureType": "all", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"} ] }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100 }, {"lightness": 45 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#a8c41b"}, {"visibility": "on"} ] } ];

            if ($(this).hasClass('skin-1')) {
                var iconPath = 'icons/marker.png';
                var styles = [{"featureType": "all", "elementType": "geometry", "stylers": [{"visibility": "on"} ] }, {"featureType": "all", "elementType": "labels", "stylers": [{"visibility": "off"} ] }, {"featureType": "all", "elementType": "labels.text", "stylers": [{"visibility": "off"} ] }, {"featureType": "all", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"} ] }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100 }, {"lightness": 45 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#a8c41b"}, {"visibility": "on"} ] } ];
            };

            if ($(this).hasClass('skin-2')) {
                var iconPath = 'icons/marker.png';
                var styles = [{"featureType": "all", "elementType": "geometry", "stylers": [{"visibility": "on"} ] }, {"featureType": "all", "elementType": "labels", "stylers": [{"visibility": "off"} ] }, {"featureType": "all", "elementType": "labels.text", "stylers": [{"visibility": "off"} ] }, {"featureType": "all", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"} ] }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100 }, {"lightness": 45 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#6aaf08"}, {"visibility": "on"} ] } ];
            };

            if ($(this).hasClass('skin-3')) {
                var iconPath = 'icons/marker.png';
                var styles = [{"featureType": "all", "elementType": "geometry", "stylers": [{"visibility": "on"} ] }, {"featureType": "all", "elementType": "labels", "stylers": [{"visibility": "off"} ] }, {"featureType": "all", "elementType": "labels.text", "stylers": [{"visibility": "off"} ] }, {"featureType": "all", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"} ] }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100 }, {"lightness": 45 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#28c67a"}, {"visibility": "on"} ] } ];
            };

            if ($(this).hasClass('skin-4')) {
                var iconPath = 'icons/marker.png';
                var styles = [{"featureType": "all", "elementType": "geometry", "stylers": [{"visibility": "on"} ] }, {"featureType": "all", "elementType": "labels", "stylers": [{"visibility": "off"} ] }, {"featureType": "all", "elementType": "labels.text", "stylers": [{"visibility": "off"} ] }, {"featureType": "all", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"} ] }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100 }, {"lightness": 45 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#c9bf1c"}, {"visibility": "on"} ] } ];
            };


        	// if zoom not defined the zoom value will be 15;
        	if (!mapZoom) {
        		var mapZoom = 15;
        	};
        	// init map
        	var map;
            map = new GMaps({
                div: '#'+mapName,
                scrollwheel: false,
                lat: mapLat,
                lng: mapLng,
                //styles: styles,
                zoom: mapZoom
            });
            // if icon path setted then show marker
            if(iconPath) {
                $.each(markers, function (index, value) {
                    var index = value;
                    var html;
                    if (index[2]) {
                        html = index[2];
                    };                    
                    if (!index[3]) {
                        index[3] = iconPath;
                    };
            
                    map.addMarker({
                        icon: index[3],                        
                        lat: index[0],
                        lng: index[1],
                        infoWindow: {
                          content: html
                        }
                    });   

                });
        	}
        });  
	};
}



// instance of fuction while Document ready event	
jQuery(document).on('ready', function () {
	(function ($) {
		gMap();
	})(jQuery);
});
