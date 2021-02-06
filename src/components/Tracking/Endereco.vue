<template>
  <div class="endereco">
    <b-icon icon="geo-alt-fill"></b-icon>
    <p class="endereco__texto">
      {{ endereco.logradouro }}
      <br>
      {{ endereco.bairro }} - {{ endereco.cidade }} - {{ endereco.estado }}
      <br>
      {{ endereco.complemento }}
    </p>
  </div>
</template>

<script>
  import data from "../../data.json";

  export default {
    data () {
      return {
        endereco: data[0].endereco
      }
    }
  }
</script>

<style lang="scss" scoped>
  .endereco {
    align-items: flex-start;
    display: flex;
    color: var(--secondary-color);
    font-size: 0.75rem;
    margin-top: 1.25rem;
    width: 100%;

    svg {
      font-size: 1.1rem;
      margin: 0.313rem 0.313rem 0 0;
    }
  }
</style>