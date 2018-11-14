<template>
  <div id="app">
    <div>
      <main-menu></main-menu>
      <router-view/>
      <qrcode></qrcode>
    </div>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu'

export default {
  name: 'App',
  components: { MainMenu }
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
