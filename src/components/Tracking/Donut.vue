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
    <p class="donut-text">
      Falta
      <br>
      <span>1</span>
      <br>
      Entrega
    </p>
  </vc-donut>
</template>
<script>
  export default {
    data() {
      return {
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
    color: #4B4B4D;
    font-size: 0.688rem;
    font-weight: 600;
    line-height: 1rem;
  }

  .donut-text span {
    font-size: 1.25rem;
    font-weight: 700;
  }
</style>