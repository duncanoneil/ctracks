<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs2 >
        <p id="heading">Routes</p>
      </v-flex>

      <v-flex xs10>
        <app-map></app-map>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
  import Map from './Map.vue';
  export default {
    components: {
      'app-map': Map
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #heading {
    font-style: 900;
    text-decoration: underline;
  }
</style>
