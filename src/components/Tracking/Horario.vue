<template>
  <div class="horario">
    <b-icon icon="clock"></b-icon>
    <p class="horario__texto">
      horário estimado: {{ horario.de }} - {{ horario.ate }}
    </p>
  </div>
</template>

<script>
  import data from "../../data.json";

  export default {
    data () {
      return {
        horario: data[0].horario_estimado
      }
    }
  }
</script>

<style lang="scss" scoped>
  .horario {
    align-items: center;
    color: var(--third-color);
    display: flex;
    width: 100%;

    svg {
      margin-right: 0.313rem;
    }

    &__texto {
      font-size: 0.813rem;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
</style>