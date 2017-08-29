<template>
  <div>
    <div id="map"></div>
   {{ routes }}
  </div>
</template>
<script>
  import GoogleMapsLoader from 'google-maps'
  export default {
    props: ['routes'],
    methods: {
      initMap (google) {
        var myLatlng = new google.maps.LatLng(55.915655, -4.744502)
        let PGBTC = new google.maps.LatLng(55.926482, -4.676598)
       var onRoad = 'https://s3.eu-west-2.amazonaws.com/comtracks/on-road9.kml';
       var trafficFree = 'https://s3.eu-west-2.amazonaws.com/comtracks/traffic-free13.kml';
       var src2 = 'https://s3.eu-west-2.amazonaws.com/comtracks/walking-mountain-biking4.kml';
       var src3 = 'https://s3.eu-west-2.amazonaws.com/comtracks/recommended1.kml';
       var src4 = 'https://s3.eu-west-2.amazonaws.com/comtracks/schools19.kml';
       var src5 = 'https://s3.eu-west-2.amazonaws.com/comtracks/community3.kml';

        var mapOptions = {
          zoom: 11,
          center: myLatlng,
          scrollwheel: true, // we disable de scroll over the map, it is a really annoing when you scroll through page
        }
        var map = new google.maps.Map(document.getElementById('map'), mapOptions)
        var kmlLayer4 = new google.maps.KmlLayer(src4, {
          suppressInfoWindows: false,
          preserveViewport: true,
          map: map
        });
        var kmlLayer3 = new google.maps.KmlLayer(src3, {
          suppressInfoWindows: false,
          preserveViewport: true,
          map: map
        });
        var kmlLayer2 = new google.maps.KmlLayer(src2, {
          suppressInfoWindows: false,
          preserveViewport: true,
          map: map
        });
        var onRoad = new google.maps.KmlLayer(onRoad, {
          suppressInfoWindows: false,
          preserveViewport: true,
          map: map
        });
        if(this.routes.ex1 == true){
        var kmlLayer = new google.maps.KmlLayer(trafficFree, {
          suppressInfoWindows: false,
          preserveViewport: true,
          map: map
        });}
        var Community = new google.maps.KmlLayer(src5, {
          suppressInfoWindows: false,
          preserveViewport: true,
          map: map
        });
      }
    },
    mounted () {
      GoogleMapsLoader.KEY = 'AIzaSyAamVCoyQ4AuvBpxVRMs9P-HFkfPVQj0Kw'
      GoogleMapsLoader.load((google) => {
        this.initMap(google)
      })
    },
    data(){
      return{

      }
    }
  }

</script>
<style>
  #map {
    width: 100%;
    height: 500px;
  }

</style>
