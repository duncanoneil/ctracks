<template>
  <div class="hello">
    <h3 class="headline black--text ">Bike Workshop</h3>
      <v-layout row wrap>
        <v-flex xs12>
    
                
                <div class="flex-grid-halves">
  <div class="col">
          <p class="subheading black--text ">Donate your old bikes</p>
<p>Do you have old bike you can donate to our project? Bike that are donated will be restored by volunteers and given to local schools for children who don’t have bikes themselves.
<p><a href="/contact">Please get in touch if you can donate a bike</a></p>

          <p class="subheading black--text ">Bike Maintenance Workshop</p>
          <p>We have bikes maintenance workshops coming soon.</p>

  </div>
  <div class="col hidden-sm-and-down"><img src="https://s3.eu-west-2.amazonaws.com/comtracks/photos/bikes.jpg" width="400px">.</div>
</div>
        </v-flex>
      </v-layout>
    
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Bike Workshop'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-grid {
  display: flex;
}
.flex-grid .col {
  flex: 1;
}
.flex-grid-halves {
  display: flex;
  justify-content: space-between;
}
.flex-grid-halves .col {
  width: 50%;
}

@media (max-width: 400px) {
  .flex-grid,
  .flex-grid-halves {
    display: block;
    .col {
      width: 100%;
      margin: 0 0 10px 0;
    }
  }
}
</style>
