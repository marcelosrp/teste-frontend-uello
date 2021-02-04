<template>
  <main class="main">
    <!-- only desk login -->
    <div class="d-none d-sm-block">
      <Login :isMobile="false" name="hirota food express headquarters" />
    </div>
    <Tracking />
    <Mapa />
  </main>
</template>

<script>
  import Login from "../Login";
  import Tracking from "../Tracking";
  import Mapa from "../Mapa";

  export default {
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