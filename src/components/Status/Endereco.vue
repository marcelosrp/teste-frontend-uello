<template>
  <div class="endereco">
    <b-icon icon="geo-alt-fill"></b-icon>
    <p class="endereco__texto">
      Avenida Doutor Gastão Vidigal, 1132
      <br>
      Vila Leopoldina - São Paulo - SP
      <br>
      Apto - 1234
    </p>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .endereco {
    align-items: flex-start;
    display: flex;
    color: #4B4B4D;
    font-size: 0.75rem;
    margin-top: 1.25rem;
    width: 100%;

    svg {
      font-size: 1.1rem;
      margin: 0.313rem 0.313rem 0 0;
    }
  }
</style>