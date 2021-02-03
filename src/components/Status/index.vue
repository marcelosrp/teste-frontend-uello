<template>
  <section class="status-box">
    <Ajuda />
  </section>
</template>

<script>
  import Ajuda from "./Ajuda"

  export default {
    components: {
      Ajuda
    }
  }
</script>

<style lang="scss" scoped>
  .status-box {
    background-color: #FFF;
    box-shadow: 5px 1px 9px rgba(0, 0, 0, 0.25);
    border-radius: 4px 0px 0px 4px;
    height: 100%;
    padding: 1.25rem;
    width: 300px;
  }
</style>