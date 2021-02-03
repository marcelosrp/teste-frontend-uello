<template>
  <div id="app">
    <Sidebar />
    <Wrapper />
  </div>
</template>

<script>
  import Sidebar from "./components/Sidebar";
  import Wrapper from "./components/Wrapper";

  export default {
    name: 'App',
    components: {
      Sidebar,
      Wrapper
    }
  }
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --primary-color: #e63b4f;
  }

  body {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }

  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;

    @media(min-width: 768px) {
      flex-direction: row;
    }
  }
</style>