<template>
    <ul class="progressbar">
      <li class="active">
        <b-icon icon="inbox-fill"></b-icon>
        Solicitação
      </li>
      <li class="active">
        <b-icon icon="clock"></b-icon>
        Pedido <br />em separação
      </li>
      <li class="active">
        <b-icon icon="truck"></b-icon>
        Motorista <br /> em trânsito
      </li>
      <li>
        <b-icon icon="check"></b-icon>
        Pedido <br /> entregue
      </li>
    </ul>
</template>

<script>
  export default {

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
    margin: 60px 0 40px 0;
    width: 100%;

    li {
      list-style-type: none;
      width: 25%;
      float: left;
      font-size: 0.5rem;
      position: relative;
      text-align: center;
      color: #4B4B4D;
      z-index: 1;
      line-height: 10px;
      font-weight: 600;

      &::before {
        background-color: #CCC;
        border: 2px solid #ccc;
        border-radius: 50%;
        content: '';
        display: block;
        height: 12px;
        line-height: 30px;
        margin: 0 auto 10px auto;
        text-align: center;
        transition: all .8s;
        width: 12px;
        z-index: 1;
      }

      &::after {
        background-color: #CCC;
        content: '';
        height: 2px;
        left: -41%;
        position: absolute;
        top: 5px;
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
          font-size: 14px;
          top: -26px;
        }
      }

      svg {
        color: #CCC;
        font-size: 22px;
        left: 50%;
        position: absolute;
        top: -30px;
        transform: translateX(-50%);
      }
    }
  }
</style>