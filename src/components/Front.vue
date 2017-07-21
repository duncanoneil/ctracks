<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-sm-right">
        <v-btn large dark class="accent">News</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-sm-left">
        <v-btn large dark class="accent">Events</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item
            v-for="(item,i) in items"
            :src="item.imageUrl"
            :key="item.id">
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
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
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
