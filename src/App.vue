<template>
  <v-app light>
    <app-header></app-header>

    <main>
      <v-container>
        <v-layout row wrap>
          <v-flex md9 xs12 class="white">
            <router-view></router-view>
          </v-flex>

          <v-flex md3 xs12>
            <div class="hidden-sm-and-down">
              <app-facebook></app-facebook>
            </div>

            <div class="hidden-md-and-up">
              <app-facebook-mobile></app-facebook-mobile>
            </div>
          </v-flex>
        </v-layout>

        <app-footer></app-footer>
      </v-container>
    </main>
  </v-app>
</template>

<script>
  import Header from './components/shared/Header.vue';
  import Facebook from './components/pages/facebook/Facebook.vue';
  import FacebookMobile from './components/pages/facebook/Facebook-Mobile.vue';
  import Footer from './components/shared/Footer.vue';
  export default {
    components: {
      'app-header': Header,
      'app-facebook':Facebook,
      'app-facebook-mobile':FacebookMobile,
      'app-footer': Footer
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>

<style>
  @media only screen and (max-width: 599px) {
    main > .container {
      padding: 0;
    }
  }
</style>
