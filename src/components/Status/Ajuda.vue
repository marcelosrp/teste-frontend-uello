<template>
  <div class="accordion" role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info">
          Central de ajuda
        </b-button>
      </b-card-header>
      <b-collapse id="accordion-1" :visible="false" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            Texto de ajuda
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .card {
    border: none;
  }

  .card-header {
    background-color: transparent;
    border: none;
  }

  .btn {
    background-color: #4B4B4D;
    font-size: 0.75rem;
    font-weight: 600;
    height: 2.5rem;
  }
</style>