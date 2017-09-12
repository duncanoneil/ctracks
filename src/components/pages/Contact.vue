<template>
  <div >
    <h3 class="headline black--text ma-3">Contacts Us</h3>

      <v-container grid-list-md  >
        <div class="ml-3">
        <v-layout row wrap>
      <table >
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Phone Number</th>
          <th>Email</th>
        </tr>
        <tr>
          <td>Stewart Philips</td>
          <td>Project Coordinator</td>
          <td>01475 553385</td>
          <td>{{ email[0] }}</a></td>
        </tr>
        <tr>
          <td>Kieran Wild</td>
          <td>Active Travel Officer</td>
          <td>01475 553386</td>
          <td>{{ email[1] }}</td>
        </tr>
        <tr>
          <td>Ian Crighton</td>
          <td>Bicycle Mechanic</td>
          <td>01475 553387</td>
          <td>{{ email[2] }}</td>
        </tr>
        <tr>
          <td>Scott Deveney</td>
          <td>Admin Assistant</td>
          <td>01475 553384</td>
          <td>{{ email[3] }}</td>
        </tr>
      </table>
    </v-layout>
    </div>
   </v-container>

  </div>
</template>

<script>
  import { mandrill_api } from './config.js'
  import { email } from './config.js'
  console.log(email)

  export default {
    data() {
      return{
        email: email
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
    font-family:arial, verdana, sans-serif; /* ADDED */
    border-collapse: collapse;
    width: 100%;
}

td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #dddddd;
}
</style>
