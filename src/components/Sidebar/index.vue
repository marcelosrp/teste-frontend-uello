<template>
  <aside class="sidebar">
    <img 
      src="../../assets/images/logo.png" 
      alt="Logo Uello" 
      width="46" 
      height="46"
    >

    <!-- only mobile -->
    <div class="d-block d-sm-none">
      <Login :isMobile="true" name="hirota food express headquarters" />
    </div>
  </aside>
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
  .sidebar {
    background-color: var(--primary-color);
    min-height: 100vh;
    padding: 0.75rem;

    @media(max-width: 768px) {
      align-items: center;
      display: flex;
      justify-content: space-between;
      min-height: auto;
      padding: 0.313rem;
    }
  }
</style>