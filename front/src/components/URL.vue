<template>
  <form>
    <span><input type="text" value="url" placeholder="https://" @change="changeVal"></span>
  </form>
</template>

<script>
export default {
  props: {
    url: String
  },
  methods: {
    changeVal: function (e) {
      this.$bus.$emit('makeQREvent', e.target.value)
    }
  }
}
</script>
