<template>
    <ul class="progressbar" :class="[ isMobile && 'mobile' ]">
      <li class="active">
        <b-icon icon="inbox-fill"></b-icon>
        <span>Solicitação</span>
      </li>
      <li class="active">
        <b-icon icon="clock"></b-icon>
        <span>Pedido em <br /> separação</span>
      </li>
      <li class="active">
        <b-icon icon="truck"></b-icon>
        <span>Motorista <br /> em trânsito</span>
      </li>
      <li>
        <b-icon icon="check"></b-icon>
        <span>Pedido <br /> entregue</span>
      </li>
    </ul>
</template>

<script>
  export default {
    props: {
      isMobile: Boolean
    }
  }
</script>

<style lang="scss" scoped>
  /* 
    referecia:
    https://codepen.io/vikas001/pen/bJzdaj
  */
  .progressbar {
    display: flex;
    counter-reset: step;
    margin: 3.75rem 0 2rem 0;
    width: 100%;

    &.mobile {
      margin: 1.875rem 0 0 0;

      li {
        &::before {
          background-color: #FFF;
          border: 2px solid #FFF
        }

        &::after {
          background-color: #FFF;
        }
      }

      span {
        display: none;
      }
    }

    li {
      list-style-type: none;
      width: 25%;
      float: left;
      font-size: 0.6rem;
      position: relative;
      text-align: center;
      color: var(--secondary-color);
      z-index: 1;
      line-height: 0.625rem;
      font-weight: 600;

      &::before {
        background-color: var(--progress-bullet-color);
        border: 2px solid var(--progress-bullet-color);
        border-radius: 50%;
        content: '';
        display: block;
        height: 0.75rem;
        line-height: 1.875rem;
        margin: 0 auto 10px auto;
        text-align: center;
        transition: all .8s;
        width: 0.75rem;
        z-index: 1;
      }

      &::after {
        background-color: var(--progress-bullet-color);
        content: '';
        height: 0.125rem;
        left: -41%;
        position: absolute;
        top: 0.313rem;
        transition: all .8s;
        z-index: -1;
        width: 100%;
      }

      &:first-child {
        &:after {
          content: none
        }
      }

      &.active {
        &::before {
          border-color: var(--primary-color);
          background-color: #FFF;
          transition: all .8s;
        }

        &::after {
          background-color: var(--primary-color);
          transition: all .8s;
        }

        svg {
          color: var(--primary-color);
          font-size: 1rem;
          top: -1.625rem;
        }
      }

      svg {
        color: var(--progress-bullet-color);
        font-size: 1.5rem;
        left: 50%;
        position: absolute;
        top: -1.875rem;
        transform: translateX(-50%);
      }
    }
  }
</style>