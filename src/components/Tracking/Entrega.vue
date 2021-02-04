<template>
  <div v-if="onDelivery">
    <div class="entrega">
      <h2 class="entrega__titulo">
        Saiu para entrega
      </h2>
      <p class="entrega__texto">
        Seu pedido da <strong>{{ remetente }}</strong> saiu para entrega,
        e será <strong>entregue</strong> no <strong>endereço</strong>:
      </p>
    </div>
    <Endereco :endereco="endereco" />
    <Horario />
  </div>
</template>

<script>
  import Endereco from "./Endereco";
  import Horario from "./Horario";

  export default {
    props: {
      remetente: String,
      onDelivery: Boolean,
      endereco: Object
    },
    components: {
      Endereco,
      Horario,
    },
  }
</script>

<style lang="scss" scoped>
  .entrega {
    background-color: #0B4F6C;
    border-radius: var(--radius-default);
    color: #FFF;
    padding: 0.625rem 0.875rem;
    width: 100%;

    &__titulo {
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
    }

    &__texto {
      font-size: 0.625rem;
      line-height: 0.875rem;
      margin-top: 5px;
    }
  }
</style>