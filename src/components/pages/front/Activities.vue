<template>
  <v-layout column>
    <v-card>
      <h3 class="headline black--text ma-1 ml-3">Activities</h3>
      <v-layout column>
        <v-flex xs12  >
          <v-container fluid grid-list-md class="grey lighten-4">
            <v-layout row wrap>
              <v-flex
                md4 xs12
                v-bind="{ [`xs${card.flex}`]: true }"
                v-for="card in cards"
                :key="card.title"
              >
                <v-card>
                  <v-card-media
                    :src="card.src"
                    height="150px"
                  >          </v-card-media>
                    <v-card-title primary-title>
                      <div>
                        <h3 class="headline mb-0"> <span class="headline black--text" v-text="card.title"></span></h3>
                        <span v-text="card.body"></span>
                      </div>
                    </v-card-title>
                  <v-card-actions>
                    <v-btn flat class="primary--text text-xs-right">Details</v-btn>
                  </v-card-actions>

                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-card>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Basic Bike Maintenance', src: 'https://s3.eu-west-2.amazonaws.com/comtracks/photos/bikes.jpg', flex: 4, body:"Free evening class on bike maintenance at Port Glasgow Training and Business Centre" },
        { title: 'Guided Ride', src: 'https://s3.eu-west-2.amazonaws.com/comtracks/photos/19800754_456919324687802_9184690016739109965_o.jpg', flex: 4, body:"Meeting in the car park of St Ninians Church. Bikes can be provided." },
        { title: 'Cycling Steering Group', src: 'https://s3.eu-west-2.amazonaws.com/comtracks/photos/5004982_524e58a8.jpg', flex: 4, body:"Join the steering group on how the change cycling policy in Inverclyde" }
      ]
    })
  }
</script>

