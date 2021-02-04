<template>
  <section class="status-box">
    <Ajuda />
    <Progresso />
    <Entrega />
    <Endereco />
    <Horario />
    <InfosEntrega />
    <Historico />
  </section>
</template>

<script>
  import Ajuda from "./Ajuda";
  import Progresso from "./Progresso";
  import Entrega from "./Entrega";
  import Endereco from "./Endereco";
  import Horario from "./Horario";
  import InfosEntrega from "./InfosEntrega";
  import Historico from "./Historico";

  export default {
    components: {
      Ajuda,
      Progresso,
      Entrega,
      Endereco,
      Horario,
      InfosEntrega,
      Historico
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

    @media(max-width: 768px) {
      width: 100%;
    }
  }
</style>