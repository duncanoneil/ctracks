<template>
  <div>
    <h3 class="headline black--text  ma-3 ">Routes</h3>
  <v-container>
    <v-layout row wrap>
      <v-flex md2 sm12 >
        
        <v-card class="elevation-0">
          <v-card-text >
            <v-layout row wrap>
              <v-flex md12 sm4 xs6>
                <v-switch label="Traffic Free" v-model="kmlLayers[0].show" color="red"></v-switch>
              </v-flex>
              <v-flex md12 sm4 xs6>
                <v-switch label="On Road" v-model="kmlLayers[1].show" color="indigo"></v-switch>
              </v-flex>
              <v-flex md12 sm4 xs6>
                <v-switch label="Walking / MTB" v-model="kmlLayers[2].show" color="yellow"></v-switch>
              </v-flex>
              <v-flex md12 sm4 xs6>
                <v-switch label="Recommended On Road" v-model="kmlLayers[3].show" color="green"></v-switch>
              </v-flex>
              <v-flex md12 sm4 xs6>
                <v-switch label="Schools" v-model="kmlLayers[4].show" color="black"></v-switch>
              </v-flex>
              <v-flex md12 sm4 xs6>
                <v-switch label="Community" v-model="kmlLayers[5].show" color="purple darken-1"></v-switch>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex md10 sm12 xs12>
        <app-map :kmlLayers="kmlLayers" ></app-map>
      </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>

<script>
  import Map from './Map.vue';

  export default {
    components: {
      'app-map': Map
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
