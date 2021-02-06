<template>
  <section class="status-box">
    <Ajuda />
    <Progresso />
    <Entrega 
      remetente="Dafiti"
      :onDelivery="true"
    />
    <InfosEntrega />
    <Historico />
  </section>
</template>

<script>
  import Ajuda from "./Ajuda";
  import Progresso from "./Progresso";
  import Entrega from "./Entrega";
  import InfosEntrega from "./InfosEntrega";
  import Historico from "./Historico";

  export default {
    components: {
      Ajuda,
      Progresso,
      Entrega,
      InfosEntrega,
      Historico
    }
  }
</script>

<style lang="scss" scoped>
  .status-box {
    background-color: #FFF;
    box-shadow: 5px 1px 9px rgba(0, 0, 0, 0.25);
    border-radius: var(--radius-default) 0px 0px var(--radius-default);
    height: 37.5rem;
    overflow: auto;
    padding: 1.25rem;
    max-width: 20rem;
    width: 100%;
    z-index: 2;

    &::-webkit-scrollbar-track
    {
      box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      background-color: var(--scrollbar-color);
    }

    &::-webkit-scrollbar
    {
      width: 0.5rem;
      background-color: var(--scrollbar-color);
    }

    &::-webkit-scrollbar-thumb
    {
      background-color: var(--primary-color);
      border: 0.125rem solid var(--primary-color);
    }
  }
</style>