<template>
  <div class="endereco">
    <b-icon icon="geo-alt-fill"></b-icon>
    <p class="endereco__texto">
      {{ endereco.logradouro}}
      <br>
      {{ endereco.bairro }} - {{ endereco.cidade}} - {{ endereco.estado}}
      <br>
      {{ endereco.complemento }}
    </p>
  </div>
</template>

<script>
  export default {
    props: {
      endereco: Object
    }
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