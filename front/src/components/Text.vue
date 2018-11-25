<template>
  <form>
    <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 8}" placeholder="Text" @change="changeVal" v-model="text"></el-input>
  </form>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  methods: {
    changeVal: function (e) {
      this.$bus.$emit('makeQREvent', this.text)
    }
  }
}
</script>
