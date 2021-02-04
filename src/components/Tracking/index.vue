<template>
  <section class="status-box">
    <Ajuda />
    <Progresso />
    <Entrega 
      remetente="Dafiti"
      :onDelivery="true" 
      :endereco="endereco"
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
    data () {
      return {
        endereco: {
          logradouro: "Avenida Doutor Gastão Vidigal, 1132",
          bairro: "Vila Leopoldina",
          cidade: "São Paulo",
          estado: "SP",
          complemento: "Apto - 1234",
        }
      }
    },
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
    border-radius: 4px 0px 0px 4px;
    height: 600px;
    overflow: auto;
    padding: 1.25rem;
    max-width: 320px;
    width: 100%;
    z-index: 2;

    &::-webkit-scrollbar-track
    {
      box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      background-color: #F5F5F5;
    }

    &::-webkit-scrollbar
    {
      width: 8px;
      background-color: #F5F5F5;
    }

    &::-webkit-scrollbar-thumb
    {
      background-color: var(--primary-color);
      border: 2px solid var(--primary-color);
    }
  }
</style>