<template>
  <div>
    <router-link :to="item.type" v-for="item in items" :key="item.id" class="router-item">{{ item.title }}</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [{
        type: 'url',
        title: 'URL'
      }, {
        type: 'text',
        title: 'Text'
      }, {
        type: 'vcard',
        title: 'VCard'
      }, {
        type: 'sms',
        title: 'SMS'
      }, {
        type: 'call',
        title: 'Call'
      }, {
        type: 'geolocation',
        title: 'Geolocation'
      }, {
        type: 'event',
        title: 'Event'
      }, {
        type: 'email',
        title: 'Email'
      }, {
        type: 'wifi',
        title: 'wifi'
      }]}
  }
}
</script>
<style>
.router-item {
  text-decoration: none;
  font-family: "Helvetica Neue";
  padding: 10px;
  display: block;
  color: #409eff;
}
.router-link-active {
  background: #66b1ff;
  color: #ffffff;
}
</style>
