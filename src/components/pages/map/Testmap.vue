<template>
  <div>
    <div id="map"></div>
    <p> {{ routes }} </p>
  </div>
</template>
<script>
  import GoogleMapsLoader from 'google-maps'
  export default {
    props: ['routes'],
    methods: {
      initMap (google) {
        var myLatlng = new google.maps.LatLng(55.922655, -4.744502)
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: {lat: 55.922655, lng: -4.744502}
        });
        var bikeLayer = new google.maps.BicyclingLayer();
        bikeLayer.setMap(map);

        var src = 'https://s3.eu-west-2.amazonaws.com/comtracks/Gourock+to+Inverkip+(7).kml';
        var kmlLayer = new google.maps.KmlLayer(src, {
          suppressInfoWindows: false,
          preserveViewport: true,
          map: map
        });
        marker.setMap(map)

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
