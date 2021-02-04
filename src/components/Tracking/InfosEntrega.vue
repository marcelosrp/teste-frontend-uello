<template>
  <div class="infos-entrega">
    <Donut />
    
    <ul class="infos-entrega__lista">
      <li>Sua entrega é a nº: <span class="entrega-atual">19</span></li>
      <li>Entrega atual: <span>18</span></li>
      <li>Quantidade de volumes: <span>3</span></li>
      <li>Motorista: <span>Vinicius Marques do Nascimento</span></li>
      <li>Horário Estimado: <span>14:45 - 16:58</span></li>
    </ul>
  </div>
</template>

<script>
  import Donut from "./Donut"
  export default {
    components: {
      Donut
    }
  }
</script>

<style lang="scss" scoped>
  .infos-entrega {
    align-items: flex-start;
    display: flex;
    height: 100px;
    justify-content: space-between;
    position: relative;
    margin: 1.25rem 0;

    &__lista {
      width: 10rem;

      li {
        font-size: 0.625rem;
        font-weight: 700;
        list-style-type: none;
      }

      span {
        font-weight: 600;

        &.entrega-atual {
          color: var(--primary-color);
        }
      }
    }
  }
</style>