<template>
  <map
    :center="center"
    :zoom="7"
    class="google-map"
  >
  </map>
</template>

<script>
  import {load, Map} from 'vue-google-maps'

  load('AIzaSyA-ek_HQ4XXCYlCzLI_xsA0Mk2PAZNnipQ')

  export default {
    data () {
      return {
        center: {lat: 10.0, lng: 10.0}
      }
    }
  }
</script>

<style>
  .google-map {
    width: 800px;
    height: 600px;
    margin: 0 auto;
    background: gray;
  }
</style>
