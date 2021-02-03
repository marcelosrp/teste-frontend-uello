<template>
  <div class="login" :class="[ isMobile && 'mobile' ]">
    <h1 class="login__name" :class="[ isMobile && 'mobile' ]">
      hirota food express headquarters
    </h1>
  </div>
</template>

<script>
  export default {
    props: {
      isMobile: Boolean
    }
  }
</script>

<style lang="scss" scoped>
  .login {
    position: absolute;
    right: 1.25rem;

    &.mobile {
      position: unset;
      right: unset;
      width: 250px;
    }

    &__name {
      color: var(--primary-color);
      font-size: 1.125rem;
      font-weight: 700;
      margin: 0;
      padding-left: 0.938rem;
      position: relative;
      text-transform: uppercase;

      &.mobile {
        color: #FFF;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;  
        overflow: hidden;
      }

      &::before {
        background-color: var(--primary-color);
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        width: 5px;
      }
    }
  }
</style>