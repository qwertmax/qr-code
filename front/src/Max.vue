<template>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.title }}</li>
    </ul>
</template>

<script>
export default {
  name: 'max',
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
        title: 'V Card'
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
        type: 'enevt',
        title: 'Enevt'
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
