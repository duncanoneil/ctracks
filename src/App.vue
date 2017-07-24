<template>
  <v-app light>
    <app-header></app-header>
    <main>
      <router-view></router-view>
    </main>

  </v-app>
</template>

<script>
  import Header from './components/shared/Header.vue';
  export default {
    components: {
      'app-header': Header
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
