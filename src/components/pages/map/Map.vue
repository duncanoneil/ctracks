<template>
  <div>
    <div id="map"></div>
   
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
        var src = 'https://s3.eu-west-2.amazonaws.com/comtracks/traffic-free11.kml';

        console.log(this.routes)

        var mapOptions = {
          zoom: 11,
          center: myLatlng,
          scrollwheel: true, // we disable de scroll over the map, it is a really annoing when you scroll through page

        }
        var map = new google.maps.Map(document.getElementById('map'), mapOptions)
        var kmlLayer = new google.maps.KmlLayer(src, {
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
