<template>
  <div id="app">
    <inicio/>
  </div>
</template>

<script>
import inicio from './components/inicio.vue'

export default {
  name: 'app',
  components: {
    inicio,
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
