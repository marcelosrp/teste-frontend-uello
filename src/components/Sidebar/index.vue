<template>
  <aside class="sidebar">
    <img 
      src="../../assets/logo.png" 
      alt="Logo Uello" 
      width="40" 
      height="40"
    >
  </aside>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .sidebar {
    background-color: var(--primary-color);
    min-height: auto;
    padding: 10px 5px;

    @media(min-width: 768px) {
      min-height: 100vh;
    }
  }
</style>