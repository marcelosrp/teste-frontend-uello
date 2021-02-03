<template>
  <main class="main">
    <!-- only desk login -->
    <div class="d-none d-sm-block">
      <Login :isMobile="false" />
    </div>

    <Status />
  </main>
</template>

<script>
  import Login from "../Login";
  import Status from "../Status";

  export default {
    components: {
      Login,
      Status
    }
  }
</script>

<style lang="scss" scoped>
  .main {
    min-height: 100vh;
    padding: 3.75rem 1.25rem;
    position: relative;
    width: 100%;
  }
</style>