<template>
  <div id="vue-map">
    <div id="map_canvas2"></div>
  </div>

  <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script></template>

<script>
  export default {
    el: '#vue-map',
    data: {

    },
    ready: function() {
      var myOptions = {
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: new google.maps.LatLng(25.761680, -80.19179)
      };
      var map = new google.maps.Map(document.getElementById("map_canvas2"), myOptions);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #map_canvas2{
    width: 95%;
    height: 500px;
    border: 1px solid black;
    float:right;
  }
</style>
