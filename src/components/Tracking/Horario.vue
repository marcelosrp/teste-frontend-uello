<template>
  <div class="horario">
    <b-icon icon="clock"></b-icon>
    <p class="horario__texto">
      horário estimado:
    </p>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .horario {
    align-items: center;
    color: #0B4F6C;
    display: flex;
    margin-top: 1.25rem;
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