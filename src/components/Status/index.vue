<template>
  <section class="status-box">
    <Ajuda />
    <Progresso />
    <Entrega />
  </section>
</template>

<script>
  import Ajuda from "./Ajuda";
  import Progresso from "./Progresso";
  import Entrega from "./Entrega";

  export default {
    components: {
      Ajuda,
      Progresso,
      Entrega
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