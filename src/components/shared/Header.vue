<template>
  <div>
  <v-navigation-drawer temporary v-model="sideNav">
    <v-list>
      <v-list-tile
        v-for="item in menuItems"
        :key="item.title"
        :to="item.link">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>{{ item.title }}</v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar dark class="primary">
    <v-toolbar-side-icon
      @click.stop="sideNav = !sideNav"
      class="hidden-sm-and-up"></v-toolbar-side-icon>
    <v-toolbar-title>
      <router-link to="/" tag="span" style="cursor: pointer"><img hidden-md-and-down :src="require('./ct_logo.png')" /></router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn
        flat
        v-for="item in menuItems"
        :key="item.title"
        :to="item.link">
        <v-icon dark left>{{ item.icon }}</v-icon>
        {{ item.title }}</v-btn>
    </v-toolbar-items>
    <div class="text-xs-right">
      <v-menu open-on-hover dark class="primary">
        <v-btn primary dark slot="activator">What we do</v-btn>
        <v-list>
          <v-list-tile v-for="drop_item in drop_items" :key="drop_item.title" :to="drop_item.link">
            <v-list-tile-title>{{ drop_item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </div>

  </v-toolbar>
  </div>
</template>
<script>
  export default {

    data () {
      return {
        sideNav: false,
        menuItems: [
          { icon: 'live_help', title: 'About', link: '/about'},
          { icon: 'contact_mail', title: 'Contact', link: '/contact'},
          { icon: 'comment', title: 'News', link: '/news'},
        ],
        drop_items: [
          { title: 'Bike Workshop', link: '/about'},
          { title: 'Guided Rides', link: '/contact'},
          { title: 'Activities', link: '/activities'},
          { title: 'Steering Group', link: '/steering'}
        ]
      }
    }
  }
</script>
