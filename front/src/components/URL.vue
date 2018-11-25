<template>
  <form>
    <span><el-input type="text" placeholder="https://" v-model="url" @change="changeVal"></el-input></span>
  </form>
</template>

<script>
export default {
  data () {
    return {
      url: ''
    }
  },
  methods: {
    changeVal: function (e) {
      this.$bus.$emit('makeQREvent', this.url)
    }
  }
}
</script>
