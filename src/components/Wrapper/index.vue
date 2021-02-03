<template>
  <main class="main">
    <div class="d-none d-sm-block">
      <Login :isMobile="false" />
    </div>
  </main>
</template>

<script>
  import Login from "../Login";
  export default {
    components: {
      Login
    }
  }
</script>

<style lang="scss" scoped>
  .main {
    min-height: 100vh;
    padding: 0.625rem;
    position: relative;
    width: 100%;
  }
</style>