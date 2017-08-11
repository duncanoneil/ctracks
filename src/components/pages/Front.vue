<template>
      <div>
        <app-frame></app-frame>
        <app-activities></app-activities>
      </div>
</template>

<script>
  import Frame from './map/Frame.vue';
  import Activities from './front/Activities.vue';
  export default {
    components: {
      'app-frame': Frame,
      'app-activities': Activities
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
