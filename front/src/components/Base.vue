<script>
  export default {
    methods: function () {
      changeVal: function (e) {
        this.$bus.$emit('makeQREvent', e.target.value)
      }
    }
  }
</script>
