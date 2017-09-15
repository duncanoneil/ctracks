<template>
  <v-footer class="white pt-10 text-xs-center">
    <v-container class="ma-0">
      <v-layout row wrap>
        <v-flex md3 xs12>
          <img :src="require('./footer-greener-scotland.png')" class="mb-5" />
        </v-flex>
        <v-flex md3 xs12>
          <img :src="require('./footer-climate-challenge-fund.png')" class="mb-5" />
        </v-flex>
        <v-flex md3 xs12>
          <img :src="require('./footer-inverclyde-trust.png')" class="mb-5" />
        </v-flex>
        <v-flex md3 xs12>
          <img :src="require('./Smarter_Travel_4.jpg')" class="mb-5" />
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex md6 xs12 text-sm-left>
          &copy; Copyright 2017 Community Tracks Inverclyde
        </v-flex>
        <v-flex md6 xs12 pull-right text-sm-right class="social-links">

          <a v-for="item in social_links"
                 :title="item.title"
                 :href="item.link" class="">
            <v-icon>{{ item.icon }}</v-icon>
          </a>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script>
    export default {
        data () {
            return {
                social_links: [
                    { icon: 'fa-facebook-square', title: 'Facebook', link: 'https://www.facebook.com/CommunityTracksInverclyde/'},
                    { icon: 'fa-twitter-square', title: 'Twitter', link: 'https://twitter.com/CTInverclyde'}
                ]
            }
        }
    }
</script>

<style scoped>
  .social-links a {
    font-size:28px;
    margin: 0 10px;
    cursor: pointer;
  }
</style>
