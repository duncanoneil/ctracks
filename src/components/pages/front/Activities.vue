<template>
  <v-container>

    <v-layout row wrap>

      <v-flex xs12 sm6 md4 >
        <v-card class="info ma-1">
          <v-container fluid>
              <v-flex xs12 class="hidden-md-and-down">
                <v-card-media
                  src="https://s3.eu-west-2.amazonaws.com/comtracks/photos/19800754_456919324687802_9184690016739109965_o.jpg"
                  height="130px"
                ></v-card-media>
              </v-flex>
              <v-flex xs12>
                <v-card-title primary-title>
                  <div>
                    <h5 class="white--text ma-0">Free Guided Ride from Gourock</h5>
                    <div>13 September 2017 - 10:30–12:30</div>
                  </div>
                </v-card-title>
                <v-dialog v-model="dialog"  absolute>
                  <v-btn primary dark slot="activator">View details</v-btn>
                  <v-card>
                    <v-card-title>
                      <div>
                        <h5 class="black--text ma-0">Free Guided Ride from Gourock</h5>
                      </div>
                    </v-card-title>
                    <v-card-text>
                      <p class="black--text ma-3">13 September 2017 - 10:30–12:30</p>
                      <div>Meeting in the car park of Saint Ninians Parish Church 18 Royal Street, PA19 1PW Gourock. Ride in partnership with Clyde Activity Bikes. </div>
                    </v-card-text>
                  </v-card>
                </v-dialog>
              </v-flex>
          </v-container>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card class="info ma-1">
          <v-container fluid>
              <v-flex xs12 class="hidden-md-and-down">
                <v-card-media
                  src="https://s3.eu-west-2.amazonaws.com/comtracks/photos/19800754_456919324687802_9184690016739109965_o.jpg"
                  height="130px"
                ></v-card-media>
              </v-flex>
              <v-flex xs12>
                <v-card-title primary-title>
                  <div>
                    <h5 class="white--text ma-0">Free Guided Ride from Gourock</h5>
                    <div>13 September 2017 18:30–20:30</div>
                  </div>
                </v-card-title>
                <v-dialog v-model="dialog1"  absolute>
                  <v-btn primary dark slot="activator">View details</v-btn>
                  <v-card>
                    <v-card-title>
                      <div>
                        <h5 class="black--text ma-0">Free Guided Ride from Gourock</h5>
                      </div>
                    </v-card-title>
                    <v-card-text>
                      <p class="black--text ma-3">13 September 2017 - 18:30–20:30</p>
                      <div>Meeting in the car park of Saint Ninians Parish Church 18 Royal Street, PA19 1PW Gourock. Ride in partnership with Clyde Activity Bikes. </div>
                    </v-card-text>
                  </v-card>
                </v-dialog>
              </v-flex>
          </v-container>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card class="info ma-1">
          <v-container fluid>
              <v-flex xs12 class="hidden-md-and-down">
                <v-card-media
                  src="https://s3.eu-west-2.amazonaws.com/comtracks/photos/19143069_443706916009043_7694099141969398320_o.jpg"
                  height="130px"
                ></v-card-media>
              </v-flex>
              <v-flex xs12>
                <v-card-title primary-title>
                  <div>
                    <h5 class="white--text ma-0">Free Guided Ride from Inverkip</h5>
                    <div>14 September 2017 10:30</div>
                  </div>
                </v-card-title>
                <v-dialog v-model="dialog2"  absolute>
                  <v-btn primary dark slot="activator">View details</v-btn>
                  <v-card>
                    <v-card-title>
                      <div>
                        <h5 class="black--text ma-0">Free Guided Ride from Inverkip</h5>
                      </div>
                    </v-card-title>
                    <v-card-text>
                      <p class="black--text ma-3">14 September 2017 10:30</p>
                      <div>Meeting Inverkip Community Hub, 2 Kip Park Main Street, Inverkip PA16 0FZ. Ride in partnership with Clyde Activity Bikes. </div>
                    </v-card-text>
                  </v-card>
                </v-dialog>
              </v-flex>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    
  </v-container>

</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        dialog1: false, 
        dialog2: false
      }
    }
  }
</script>

