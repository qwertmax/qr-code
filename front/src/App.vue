<template>
  <el-container>
    <el-header>
      QR Code Generator
    </el-header>
    <el-main id="app">
      <el-row>
        <el-col :span="3" :offset="3" class="menu"><main-menu></main-menu></el-col>
        <el-col :span="8" class="forms"><router-view/></el-col>
        <el-col :span="6" class="qr-code"><qr-code></qr-code></el-col>
      </el-row>
    </el-main>
    <el-footer>
      <el-row :gutter="20">
        <el-col :span="12" :offset="6"><div class="grid-content bg-purple">Copyright © 2018 Burning Buttons, LLC. All rights reserved.</div></el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
import MainMenu from './components/MainMenu'
import QrCode from './components/QrCode'

export default {
  name: 'App',
  components: { MainMenu, QrCode }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-col {
  background: #ecf5ff;
  border: 1px solid #b3d8ff;
}
.forms {
  background: #f0f9eb;
  border: 1px solid #c2e7b0;
  padding: 10px;
}
.qr-code {
  background: #fef0f0;
  border: 1px solid #fbc4c4;
}
</style>
