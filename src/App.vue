<template>
  <v-app light>
    <app-header></app-header>
    <main>
    <v-container>
      <v-layout row wrap>
        <v-flex xs9 class="white">
      <router-view></router-view>
        </v-flex>
        <v-flex xs3>
          <app-facebook></app-facebook>
        </v-flex>
      </v-layout>
    </v-container>
    </main>

  </v-app>
</template>

<script>
  import Header from './components/shared/Header.vue';
  import Facebook from './components/pages/facebook/Facebook.vue';

  export default {
    components: {
      'app-header': Header,
      'app-facebook':Facebook
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
