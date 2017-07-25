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
        center: {lat:  55.922655, lng: -4.744502},
        scrollwheel: false,
        zoom: 12
      })

    }
  }


</script>

<style scoped>
  #map_canvas2{
    width: 95%;
    height: 450px;
  }

</style>
