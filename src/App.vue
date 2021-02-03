<template>
  <div id="app">
    <Sidebar />
  </div>
</template>

<script>
  import Sidebar from "./components/Sidebar"

  export default {
    name: 'App',
    components: {
      Sidebar
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
    flex-direction: row;
    min-height: 100vh;
    width: 100%;
  }
</style>