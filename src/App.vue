<template>
  <v-app>
    <div class="tlbr">
      <!-- <img class="tlbr-roses" src="./../public/petals.png"> -->
      <span class="tlbr-tl font-weight-light font-italic text-uppercase">Dodge</span>
      <span class="tlbr-tl font-weight-black text-uppercase"> Bachelor</span>
      <!-- <img class="tlbr-roses" src="./../public/petalsflip.png"> -->
    </div>
    <v-content class="main">
      <mainCtnr/>
    </v-content>
  </v-app>
</template>

<script>
import mainCtnr from './components/Home'

export default {
  name: 'App',
  components: {
    mainCtnr
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="scss" scoped>
.tlbr{
  background-image: url('./../public/roses.jpg');
  background-repeat: repeat;
  background-size: cover;
  height: 5rem;
  text-align: center;
  .tlbr-roses{
    //max-height: 20%;
  }
  .tlbr-tl{
    color: white;
    font-size: 35px;
    line-height: 2.1;
    text-shadow: 2px 2px 5px rgba(0,0,0,0.53);
  }
}
.main{
  background-color: #161616;
  //height: 100%;
}
</style>
