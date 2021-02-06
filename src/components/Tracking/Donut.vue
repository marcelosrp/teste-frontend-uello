<template>
  <vc-donut 
    :sections="sections"
    :thickness="12"
    :size="85" 
    background="#FFFFFF" 
    foreground="#E5E5E5"
    unit="px"
    :auto-adjust-text-size="true"
  >
    <p class="donut-text" v-if="entregas > 1">
      Faltam<br><span>{{ entregas }}</span><br>Entregas
    </p>
    <p class="donut-text" v-else>
      Falta<br><span>{{ entregas}}</span><br>Entrega
    </p>
  </vc-donut>
</template>
<script>
  import data from "../../data.json";

  export default {
    data() {
      return {
        entregas: data[0].qtd_entregas,
        sections: [
          {
            value: 75,
            color: '#0B4F6C'
          }
        ]
      };
    }
  };
</script>
<style scoped>
  .donut-text {
    color: var(--secondary-color);
    font-size: 0.688rem;
    font-weight: 600;
    line-height: 1rem;
  }

  .donut-text span {
    font-size: 1.25rem;
    font-weight: 700;
  }
</style>