<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="8" :offset="3"><h1>QR Code Generator</h1></el-col>
      </el-row>
    </el-header>
    <el-main id="app">
      <el-row class="types">
        <el-col :span="3" :offset="3"><h3>1. Type</h3></el-col>
        <el-col :span="8"><h3>2. Content</h3></el-col>
        <el-col :span="6"><h3>3. Live Preview</h3></el-col>
      </el-row>
      <el-row>
        <el-col :span="3" :offset="3" class="menu">
          <main-menu></main-menu>
        </el-col>
        <el-col :span="8" class="forms">
          <router-view/>
        </el-col>
        <el-col :span="6" class="qr-code">
          <qr-code></qr-code>
        </el-col>
      </el-row>
    </el-main>
    <el-footer>
      <el-row :gutter="20">
        <el-col :span="20" align="right"><h3>Copyright © 2018 Maxim Tishchenko. All rights reserved.</h3></el-col>
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
.el-main .types .el-col {
  background: none;
  border: none;
}
.el-main .types .el-col h3 {
  margin: 15px 0;
}
.el-main .el-col {
  background: #ecf5ff;
  border: 1px solid #b3d8ff;
}
.el-main .forms {
  background: #f0f9eb;
  border: 1px solid #c2e7b0;
  padding: 10px;
}
.el-main .qr-code {
  background: #fef0f0;
  border: 1px solid #fbc4c4;
}
</style>
