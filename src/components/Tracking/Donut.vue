<template>
  <vc-donut 
    :sections="[{value: perc, color: colorDonut}]"
    :thickness="12"
    :size="85" 
    :background="bg" 
    foreground="#E5E5E5"
    unit="px"
    :auto-adjust-text-size="true"
  >
    <p class="donut-text" v-if="entregas > 1" :class="[ isMobile && 'mobile' ]">
      Faltam<br><span>{{ entregas }}</span><br>Entregas
    </p>
    <p class="donut-text" v-else :class="[ isMobile && 'mobile' ]">
      Falta<br><span>{{ entregas}}</span><br>Entrega
    </p>
  </vc-donut>
</template>
<script>
  import data from "../../data.json";

  export default {
    props: {
      bg: String,
      colorDonut: String,
      perc: Number,
      isMobile: Boolean
    },
    data() {
      return {
        entregas: data[0].qtd_entregas,
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

  .donut-text.mobile {
    color: #FFFFFF;
  }

  .donut-text span {
    font-size: 1.25rem;
    font-weight: 700;
  }
</style>