<template>
      <div>
        <app-frame></app-frame>
        <app-news></app-news>
      </div>
</template>

<script>
  import Frame from './map/Frame.vue';
  import News from './front/News.vue';
  export default {
    components: {
      'app-frame': Frame,
      'app-news': News
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
