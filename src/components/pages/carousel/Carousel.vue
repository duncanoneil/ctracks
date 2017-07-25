<template>
  <v-carousel text-xs-right class="mt-1">
    <v-carousel-item
      v-for="(item,i) in items"
      :src="item.imageUrl"
      :key="item.id">
      <div class="title">{{ item.title }}</div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            imageUrl:'https://s3.eu-west-2.amazonaws.com/comtracks/bike.jpg', id: 'dsfasfadsfa', title: "new electric bikes"
          },
          {
            imageUrl:'https://s3.eu-west-2.amazonaws.com/comtracks/storage.jpg', id: 'dsfasfadsfa', title: "new bike storage in Greenock"
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
