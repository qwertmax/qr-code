<template>
  <form>
    <el-input type="text" name="email" placeholder="Email"></el-input>
    <el-input type="text" name="subject" placeholder="Subject (optional)"></el-input>
    <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 8}" placeholder="Text (optional)"></el-input>
  </form>
</template>

<script>
export default {
}
</script>
