<template>
  <form>
    <span><input type="text" name="text" placeholder="Text" @change="changeVal" /></span>
  </form>
</template>

<script>
export default {
  methods: {
    changeVal: function (e) {
      this.$bus.$emit('makeQREvent', e.target.value)
    }
  }
}
</script>
