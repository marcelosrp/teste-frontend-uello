<template>
  <div class="tabs">
    <div class="tab">
      <input type="checkbox" id="chck1">
      <label class="tab-label" for="chck1">
        <b-icon icon="alarm"></b-icon>
        Histórico
      </label>
      <div class="tab-content">
        <Endereco v-if="isMobile" />
        <ul class="tab-list">
          <li v-for="item in data" :key="item.titulo">
            {{ item.titulo }}
            <span>{{ item.dia }} - {{ item.hora }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import data from "../../data.json";
  import Endereco from "./Endereco";
  
  export default {
    props: {
      isMobile: Boolean
    },
    components: {
      Endereco
    },
    data () {
      return {
        data: data[0].historico
      }
    }
  }
</script>

<style lang="scss" scoped>
  /***************************************
    Referecia: 
    https://codepen.io/raubaca/pen/PZzpVe 
  ***************************************/
  input {
    opacity: 0;
    position: absolute;
    z-index: -1;
  }

  .tabs {
    border-radius: var(--radius-default);
    margin-top: 1.25rem;
    overflow: hidden;
    width: 100%;
  }

  .tab {
    color: var(--primary-color);
    overflow: hidden;
    position: relative;
    width: 100%;
    z-index: 3;

    &-label {
      align-items: center;
      display: flex;
      background-color: #FFF;
      border: 2px solid var(--primary-color);
      border-bottom: 0;
      cursor: pointer;
      font-size: 0.875rem;
      font-weight: 600;
      justify-content: space-between;
      margin: 0;
      padding: 1em;

      &::after {
        content: "\276F";
        height: 1em;
        text-align: center;
        transition: all .35s;
        width: 1em;
      }
    }

    &-content {
      background-color: #FFF;
      border: 2px solid var(--primary-color);
      border-top: 0;
      max-height: 0;
      padding: 0 1em;
      transition: all .35s;
    }

    &-list {
      color: var(--secondary-color);
      list-style-type: none;
      
      li {
        font-size: 0.813rem;
        font-weight: 600;
        margin-bottom: 0.625rem;
      }

      span {
        display: block;
        font-size: 0.75rem;
        font-weight: 400;
      }
    }
  }

  input:checked {
    + .tab-label {
      &::after {
        transform: rotate(90deg);
      }
    }
    ~ .tab-content {
      max-height: 100vh;
      padding: 1em;
    }
  }
</style>