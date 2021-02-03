<template>
  <aside class="sidebar">
    <img 
      src="../../assets/images/logo.png" 
      alt="Logo Uello" 
      width="40" 
      height="40"
    >
    <div class="d-block d-sm-none">
      <Login :isMobile="true" />
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
    padding: 0.625rem 0.313rem;

    @media(max-width: 768px) {
      align-items: center;
      display: flex;
      justify-content: space-between;
      min-height: auto;
    }
  }
</style>