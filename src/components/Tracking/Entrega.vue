<template>
  <div v-if="onDelivery">
    <div class="entrega">
      <h2 class="entrega__titulo">
        {{ status }}
      </h2>
      <p class="entrega__texto">
        Seu pedido da <strong>{{ remetente }}</strong> saiu para entrega,
        e será <strong>entregue</strong> no <strong>endereço</strong>:
      </p>
    </div>
    <Endereco />
    <Horario />
  </div>
</template>

<script>
  import Endereco from "./Endereco";
  import Horario from "./Horario";
  import data from "../../data.json";

  export default {
    data () {
      return {
        status: data[0].status,
        remetente: data[0].remetente
      }
    },
    props: {
      onDelivery: Boolean,
    },
    components: {
      Endereco,
      Horario,
    },
  }
</script>

<style lang="scss" scoped>
  .entrega {
    background-color: var(--third-color);
    border-radius: var(--radius-default);
    color: #FFF;
    margin-bottom: 1.25rem;
    padding: 0.625rem 0.875rem;
    width: 100%;

    &__titulo {
      font-size: 0.875rem;
      font-weight: var(--f-semi-bold);
      text-transform: uppercase;
    }

    &__texto {
      font-size: 0.625rem;
      line-height: 0.875rem;
      margin-top: 5px;
    }
  }
</style>