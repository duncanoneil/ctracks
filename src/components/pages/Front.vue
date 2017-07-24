<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs9>
        <app-map></app-map>
      </v-flex>

      <v-flex xs3>
        <v-carousel text-xs-right>
          <v-carousel-item
            v-for="(item,i) in items"
            :src="item.imageUrl"
            :key="item.id">
            <div class="title">{{ item.title }}</div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Map from './map/Map.vue';
  export default {
    components: {
      'app-map': Map
    },
    data () {
      return {
        items: [
          {
            imageUrl:'https://upload.wikimedia.org/wikipedia/commons/c/c6/A_mountain_bike_styled_e-bike%2C_Cyclotricity_Stealth.jpg', id: 'dsfasfadsfa', title: "new electric bikes"
          },
          {
            imageUrl:'https://upload.wikimedia.org/wikipedia/commons/e/e0/Groningen.Bikes.jpg', id: 'dsfasfadsfa', title: "new bike storage in Greenock"
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title{
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
</style>
