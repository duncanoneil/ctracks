<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs2 >
        <h3 class="headline black--text ">Routes</h3>
        <v-card class="elevation-0">
          <v-card-text>
            <v-switch label="Traffic Free" v-model="kmlLayers[0].show" color="red"
            ></v-switch>
            <v-switch label="On Road" v-model="kmlLayers[1].show" color="indigo"
            ></v-switch>
            <v-switch label="Walking / MTB" v-model="kmlLayers[2].show" color="yellow"
            ></v-switch>
            <v-switch label="Recommended On Road" v-model="kmlLayers[3].show" color="green"
            ></v-switch>
           <v-switch label="Schools" v-model="kmlLayers[4].show" color="black"
            ></v-switch>
           <v-switch label="Community" v-model="kmlLayers[5].show" color="purple darken-1"
            ></v-switch>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs10>
        <app-map :kmlLayers="kmlLayers" ></app-map>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
  import Map from './Map.vue';
  import TestMap from './Testmap.vue';

  export default {
    components: {
      'app-map': Map,
      'app-testmap': TestMap
    },
    data () {
      return {
        kmlLayers: [
        { 
          show: true
        },
        { 
          show: true
        },
        { 
          show: true
        },
        { 
          show: true
        },
        { 
          show: true
        },
        { 
          show: true
        }
        ]
      }
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
