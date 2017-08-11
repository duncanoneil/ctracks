<template>
  <div id="map"></div>
</template>
<script>
  import GoogleMapsLoader from 'google-maps'
  export default {
    methods: {
      initMap (google) {
        var myLatlng = new google.maps.LatLng(55.922655, -4.744502)
        var src = 'https://s3.eu-west-2.amazonaws.com/comtracks/Gourock+to+Inverkip+line.kmz';
        var src1 = 'https://s3.eu-west-2.amazonaws.com/comtracks/Greenock+Cut+line.kmz';
        var src2 = 'https://s3.eu-west-2.amazonaws.com/comtracks/Knapps+Loch+Kilmacolm+line.kmz';
        var src3 = 'https://s3.eu-west-2.amazonaws.com/comtracks/Muirshiel+to+Kilmacolm+cycle.kmz';
        var src4 = 'https://s3.eu-west-2.amazonaws.com/comtracks/Port+Glasgow+to+Langbank+line.kmz';


        var mapOptions = {
          zoom: 12,
          center: myLatlng,
          scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
          styles: [{
            'featureType': 'water',
            'stylers': [{'saturation': 43}, {'lightness': -11}, {'hue': '#0088ff'}]
          }, {
            'featureType': 'road',
            'elementType': 'geometry.fill',
            'stylers': [{'hue': '#ff0000'}, {'saturation': -100}, {'lightness': 99}]
          }, {
            'featureType': 'road',
            'elementType': 'geometry.stroke',
            'stylers': [{'color': '#808080'}, {'lightness': 54}]
          }, {
            'featureType': 'landscape.man_made',
            'elementType': 'geometry.fill',
            'stylers': [{'color': '#ece2d9'}]
          }, {
            'featureType': 'poi.park',
            'elementType': 'geometry.fill',
            'stylers': [{'color': '#ccdca1'}]
          }, {
            'featureType': 'road',
            'elementType': 'labels.text.fill',
            'stylers': [{'color': '#767676'}]
          }, {
            'featureType': 'road',
            'elementType': 'labels.text.stroke',
            'stylers': [{'color': '#ffffff'}]
          }, {'featureType': 'poi', 'stylers': [{'visibility': 'off'}]}, {
            'featureType': 'landscape.natural',
            'elementType': 'geometry.fill',
            'stylers': [{'visibility': 'on'}, {'color': '#b8cb93'}]
          }, {'featureType': 'poi.park', 'stylers': [{'visibility': 'on'}]}, {
            'featureType': 'poi.sports_complex',
            'stylers': [{'visibility': 'on'}]
          }, {'featureType': 'poi.medical', 'stylers': [{'visibility': 'on'}]}, {
            'featureType': 'poi.business',
            'stylers': [{'visibility': 'simplified'}]
          }]

        }
        var map = new google.maps.Map(document.getElementById('map'), mapOptions)

        var marker = new google.maps.Marker({
        })

        var kmlLayer = new google.maps.KmlLayer(src, {
          suppressInfoWindows: true,
          preserveViewport: true,
          map: map
        });
        marker.setMap(map)

        kmlLayer.addListener('click', function(event) {
          var content = event.featureData.infoWindowHtml;
          var testimonial = document.getElementById('capture');
          testimonial.innerHTML = content;
        });

        var kmlLayer1 = new google.maps.KmlLayer(src1, {
          suppressInfoWindows: true,
          preserveViewport: true,
          map: map
        });
        // To add the marker to the map, call setMap();
        marker.setMap(map)

        var kmlLayer1 = new google.maps.KmlLayer(src2, {
          suppressInfoWindows: true,
          preserveViewport: true,
          map: map
        });
        // To add the marker to the map, call setMap();
        marker.setMap(map)

        var kmlLayer1 = new google.maps.KmlLayer(src3, {
          suppressInfoWindows: true,
          preserveViewport: true,
          map: map
        });
        // To add the marker to the map, call setMap();
        marker.setMap(map)

        var kmlLayer1 = new google.maps.KmlLayer(src4, {
          suppressInfoWindows: true,
          preserveViewport: true,
          map: map
        });
        // To add the marker to the map, call setMap();
        marker.setMap(map)

      }
    },
    mounted () {
      GoogleMapsLoader.KEY = 'AIzaSyAamVCoyQ4AuvBpxVRMs9P-HFkfPVQj0Kw'
      GoogleMapsLoader.load((google) => {
        this.initMap(google)
      })
    }
  }

</script>
<style>
  #map {
    position: relative;
    width: 100%;
    height: 500px;
  }

</style>
