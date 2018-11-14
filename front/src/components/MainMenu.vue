<template>
    <ul>
      <li v-for="item in items" :key="item.id"><router-link :to="item.type">{{ item.title }}</router-link></li>
    </ul>
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
