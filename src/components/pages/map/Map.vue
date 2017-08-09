<template>
  <div id="map"></div>
</template>
<script>
  import GoogleMapsLoader from 'google-maps'
  export default {
    methods: {
      initMap (google) {
        var myLatlng = new google.maps.LatLng(55.922655, -4.744502)
        var src = 'https://s3.eu-west-2.amazonaws.com/comtracks/Gourock+to+Inverkip+cycle.kmz';
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
          position: myLatlng,
          title: 'Hello World!'
        })
        
        var kmlLayer = new google.maps.KmlLayer(src, {
          suppressInfoWindows: true,
          preserveViewport: false,
          map: map
        });
        kmlLayer.addListener('click', function(event) {
          var content = event.featureData.infoWindowHtml;
          var testimonial = document.getElementById('capture');
          testimonial.innerHTML = content;
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
