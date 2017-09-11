<template>
  <div class="hello">
    <h3 class="headline black--text ">About Us</h3>
    <p>Community Tracks Inverclyde will establish an active travel hub within Inverclyde, supporting and encouraging local people to make more journeys by bike or by foot.   Community Tracks Inverclyde is a project hosted by Inverclyde Community Development Trust jointly funded by The Climate Challenge Fund, part of Keep Scotland Beautiful, and by Smarter Places Smarter Choices in association with Paths for All and Inverclyde Council.</p>
    <p>Broadly, the project aims are to:</p>
    <ul  id="about">
      <li>Reduce waste/Reduce CO2 emission&#39;s</li>
      <li>Develop skills</li>
      <li>Promote social inclusion</li>
      <li>Enhance Employability through developing skills</li>
    </ul>
    <br>
    <p>These objectives will be achieved by:</p>
    <ul  id="about">
      <li>Recycling bikes from landfill into the community</li>
      <li>Teaching cycle maintenance classes including educational and industry recognised qualifications</li>
      <li>Fix-your-own-bike workshops</li>
      <li>Cycle training and riding confidence sessions</li>
      <li>Cycle tours and guided rides within the local area and community</li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'About'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
    font-size:1.2em; /* ADDED */
}
#about {
  display:block;
  font-family:arial, verdana, sans-serif; /* ADDED */
  font-size:1.2em; /* ADDED */
  text-decoration:none; /* ADDED */
  font-weight: bold;
  }
</style>
