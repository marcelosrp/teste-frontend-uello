<template>
  <main class="main">
    <!-- only desk login -->
    <div class="d-none d-sm-block">
      <Login :isMobile="false" name="hirota food express headquarters" />
    </div>
    <Tracking />

    <div v-if="errorStr">
      Sorry, but the following error
      occurred: {{errorStr}}
    </div>
    
    <div v-if="gettingLocation">
      <i>Getting your location...</i>
    </div>
    
    
      <Mapa v-if="location" :lon="location.coords.longitude" :lat="location.coords.latitude" />
    
  </main>
</template>

<script>
  import Login from "../Login";
  import Tracking from "../Tracking";
  import Mapa from "../Mapa";

  export default {
    data () {
      return {
        location: null,
        gettingLocation: false,
        errorStr: null
      }
    },
    created() {
      //do we support geolocation
      if(!("geolocation" in navigator)) {
        this.errorStr = 'Geolocation is not available.';
        return;
      }

      this.gettingLocation = true;
      // get position
      navigator.geolocation.getCurrentPosition(pos => {
        this.gettingLocation = false;
        this.location = pos;
      }, err => {
        this.gettingLocation = false;
        this.errorStr = err.message;
      })
    },
    components: {
      Login,
      Tracking,
      Mapa
    }
  }
</script>

<style lang="scss" scoped>
  .main {
    display: flex;
    min-height: 100vh;
    padding: 3.75rem 1.25rem;
    position: relative;
    width: 100%;
  }
</style>