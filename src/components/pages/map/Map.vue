<template>
  <div id="vue-map">
    <div id="map_canvas2"></div>
  </div>
</template>

<script>
  export default {
    name: 'vue-map',
    mounted: function () {
      console.log("map: ", google.maps)
      this.map = new google.maps.Map(document.getElementById('map_canvas2'), {
        center: {lat: 61.180059, lng: -149.822075},
        scrollwheel: false,
        zoom: 4
      })
    }
  }

</script>

<style scoped>
  #map_canvas2{
    width: 100%;
    height: 500px;
    border: 1px solid black;
  }</style>
