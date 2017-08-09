<template>
  <v-layout column>
    <v-flex xs12  >
      <v-container fluid grid-list-md class="grey lighten-4">
        <v-layout row wrap>
          <v-flex
            v-bind="{ [`xs${card.flex}`]: true }"
            v-for="card in cards"
            :key="card.title"
          >
            <v-card>
              <v-card-media
                :src="card.src"
                height="200px"
              >          </v-card-media>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0"> <span class="headline black--text" v-text="card.title"></span></h3>
                    <span v-text="card.body"></span>
                  </div>
                </v-card-title>

            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Pre-fab homes', src: 'https://s3.eu-west-2.amazonaws.com/comtracks/bike.jpg', flex: 4, body:"Blah Blah Blah Blah" },
        { title: 'Favorite road trips', src: 'https://s3.eu-west-2.amazonaws.com/comtracks/storage.jpg', flex: 4, body:"Blah Blah Blah Blah" }
        ]
    })
  }
</script>

