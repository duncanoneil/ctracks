<template>
  <div>
      <h1> WHAT THE FUCK </h1>
      <button v-on:click="sendTheMail">Send the Mail</button>
  </div>
</template>

<script>
  import { mandrill_api } from './config.js'
  console.log(mandrill_api); 

  export default {
  methods: {
    sendTheMail() {
              const params = {
            "message": {
                "from_email":"kieran@communitytracks.net",
                "to":[{"email":"kieran.wild@the-trust.org.uk"}],
                "subject": "Sending a text email from the Mandrill API",
                "text": "I'm learning the Mandrill API at Codecademy."
            }
        }

      // Send the email!
      var m = new mandrill.Mandrill(mandrill_api);
          m.messages.send(params, function(res) {
              console.log(res);
          }, function(err) {
              console.log(err);
          });
      }
  }
  
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
