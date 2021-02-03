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