<template>
  <div>
    <img v-bind:src="image" v-if="is_set_qr_code"/>
    <img src="../assets/no_data.png" v-else />
  </div>
</template>

<script>
import QRCode from 'qrcode'

export default {
  data () {
    return {
      image: '',
      text: ''
    }
  },
  methods: {
    makeQRCode: function (text) {
      QRCode.toDataURL(text)
        .then(url => {
          this.image = url
        })
        .catch(err => {
          console.error(err)
        })
    },
    is_set_qr_code: function () {
      if (this.image.length > 0) {
        return true
      } else {
        return false
      }
    },
    // makeQRCode: async function (text) {
    //   if (text.length === 0) {
    //     return
    //   }
    //   let res = await QRCode.toDataURL(text)
    //   this.image = res
    // },
    listern: function () {
      var self = this
      this.$bus.$on('makeQREvent', function (data) {
        self.makeQRCode(data)
      })
    }
  },
  mounted () {
    this.listern()
  }
}
</script>
