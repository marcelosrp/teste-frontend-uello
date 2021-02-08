<template>
  <div class="entrega-mobile">
    <p>Status do pedido: <span>{{ status }}</span></p>
    <p>Horário estimado: <span>{{ horario.de }} - {{ horario.ate }}</span></p>
  </div>
</template>

<script>
  import data from "../../data.json"
  export default {
    data () {
      return {
        status: data[0].status,
        horario: data[0].horario_estimado,
      }
    }
  }
</script>

<style lang="scss" scoped>
  .entrega-mobile {
    color: #FFF;
    font-size: 0.75rem;
  }
</style>