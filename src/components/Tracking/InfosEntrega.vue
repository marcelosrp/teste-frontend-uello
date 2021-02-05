<template>
  <div class="infos-entrega">
    <Donut />
    
    <ul class="infos-entrega__lista">
      <li>
        Sua entrega é a nº: <span class="entrega-atual">{{ data.dados_entrega.entrega }}</span>
      </li>
      <li>
        Entrega atual: <span>{{ data.dados_entrega.atual }}</span>
      </li>
      <li>
        Quantidade de volumes: <span>{{ data.dados_entrega.volume }}</span>
      </li>
      <li>
        Motorista: <span>{{ data.dados_entrega.motorista }}</span>
      </li>
      <li>
        Horário Estimado: 
        <span>
          {{ data.dados_entrega.estimativa.de }} - {{ data.dados_entrega.estimativa.ate }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  import Donut from "./Donut";
  import data from "../../data.json";

  export default {
    data () {
      return {
        data: data[0]
      }
    },
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