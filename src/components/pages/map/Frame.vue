<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs2 >
        <h3 class="headline black--text ">Routes</h3>
        <v-card class="elevation-0">
          <v-card-text>
            <v-switch label="Traffic free" v-model="ex11" color="red"
            ></v-switch>
            <v-switch label="On road" v-model="ex13" color="indigo"
            ></v-switch>
            <v-switch label="Mountain Biking" v-model="ex15" color="orange"
            ></v-switch>
            <v-switch label="Walking" v-model="ex17" color="green"
            ></v-switch>
          </v-card-text>
        </v-card>

      </v-flex>

      <v-flex xs10>
        <app-map :routes="routes" ></app-map>
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
        ex11: true,
        ex12: false,
        ex13: true,
        ex14: false,
        ex15: true,
        ex16: false,
        ex17: true,
        ex18: false,
        modalContent: { 
          placeholder: 'Whatever'
        },
        routes: [{
          src: 'https://s3.eu-west-2.amazonaws.com/comtracks/Gourock+to+Inverkip+line.kmz', show: true
        },{
          src: 'https://s3.eu-west-2.amazonaws.com/comtracks/Greenock+Cut+line.kmz', show: true
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
