<template>
  <section class="status-box">
    <div class="status-box__infos-top">
      <Donut bg="#0b4f6c" colorDonut="#02BAEF" :perc="75" :isMobile="true" />
    </div>
  </section>
</template>

<script>
  import Donut from "./Donut";

  export default {
    components: {
      Donut
    }
  }
</script>

<style lang="scss" scoped>
  .status-box {
    height: calc(100vh - 6.25rem);
    position: relative;
    width: 100%;
    z-index: 3;

    &__infos-top {
      align-items: center;
      background-color: var(--third-color);
      border-radius: var(--radius-default);
      display: flex;
      padding: 0.625rem;
      width: 100%;
    }
  }
</style>