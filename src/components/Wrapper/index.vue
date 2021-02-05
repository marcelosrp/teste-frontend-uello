<template>
  <main class="main">
    <!-- only desk login -->
    <div class="d-none d-sm-block">
      <Login :isMobile="false" name="hirota food express headquarters" />
    </div>
    <Tracking />
    <Mapa :lon="currentLon" :lat="currentLat" />
  </main>
</template>

<script>
  import Login from "../Login";
  import Tracking from "../Tracking";
  import Mapa from "../Mapa";

  export default {
    data () {
      return {
        currentLat: null,
        currentLon: null,
      }
    },
    components: {
      Login,
      Tracking,
      Mapa
    },
    mounted () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.currentLon = position.coords.longitude;
          this.currentLat = position.coords.latitude;
        })
      }
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