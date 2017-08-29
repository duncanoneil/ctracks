<template>
  <div>
    <div id="map"></div>
     <div > {{ kmlLayers }} </div>
  </div>

</template>
<script>
  import GoogleMapsLoader from 'google-maps'
  export default {
    props: ['kmlLayers'],
    methods: {
      initMap (google) {
       var myLatlng = new google.maps.LatLng(55.915655, -4.744502)
       var trafficFree = 'https://s3.eu-west-2.amazonaws.com/comtracks/traffic-free13.kml';
       var onRoad = 'https://s3.eu-west-2.amazonaws.com/comtracks/on-road9.kml';
       var trafficFree = 'https://s3.eu-west-2.amazonaws.com/comtracks/traffic-free13.kml';
       var walkingMTB = 'https://s3.eu-west-2.amazonaws.com/comtracks/walking-mountain-biking4.kml';
       var recommended = 'https://s3.eu-west-2.amazonaws.com/comtracks/recommended1.kml';
       var schools = 'https://s3.eu-west-2.amazonaws.com/comtracks/schools19.kml';
       var community = 'https://s3.eu-west-2.amazonaws.com/comtracks/community3.kml';

        var mapOptions = {
          zoom: 11,
          center: myLatlng,
          scrollwheel: true, // we disable de scroll over the map, it is a really annoing when you scroll through page
        }
        var map = new google.maps.Map(document.getElementById('map'), mapOptions)

          if(this.kmlLayers[0].show == true){
          var trafficFree = new google.maps.KmlLayer(trafficFree, {
            suppressInfoWindows: false,
            preserveViewport: false,
            map: map
          });}
         if(this.kmlLayers[1].show == true){
          var onRoad = new google.maps.KmlLayer(onRoad, {
            suppressInfoWindows: false,
            preserveViewport: false,
            map: map
           });
         }
         if(this.kmlLayers[2].show == true){
          var walkingMTB = new google.maps.KmlLayer(walkingMTB, {
            suppressInfoWindows: false,
            preserveViewport: false,
            map: map
           });
          }
          if(this.kmlLayers[3].show == true){
           var recommended = new google.maps.KmlLayer(recommended, {
            suppressInfoWindows: false,
            preserveViewport: false,
            map: map
           });
          }
          if(this.kmlLayers[4].show == true){
            var schools = new google.maps.KmlLayer(schools, {
              suppressInfoWindows: false,
              preserveViewport: false,
              map: map
            });
          }
          if(this.kmlLayers[5].show == true){
            var community = new google.maps.KmlLayer(community, {
              suppressInfoWindows: false,
              preserveViewport: false,
              map: map
            });
          }
      }
    },
    mounted() {
      GoogleMapsLoader.KEY = 'AIzaSyAamVCoyQ4AuvBpxVRMs9P-HFkfPVQj0Kw'
      GoogleMapsLoader.load((google) => {
        this.initMap(google)
      })
    },
    data(){
      return{

      }
    },
    updated(){
      GoogleMapsLoader.KEY = 'AIzaSyAamVCoyQ4AuvBpxVRMs9P-HFkfPVQj0Kw'
      GoogleMapsLoader.load((google) => {
        this.initMap(google)
      })
    }
  }

</script>
<style>
  #map {
    width: 100%;
    height: 500px;
  }
  .kml {
    color:white;
  }

</style>
