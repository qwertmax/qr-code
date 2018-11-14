import Vue from 'vue'
import Router from 'vue-router'
import Vcard from '@/components/Vcard'
import URL from '@/components/URL'
import Text from '@/components/Text'
import SMS from '@/components/SMS'
import Call from '@/components/Call'
import Geolocation from '@/components/Geolocation'
import Event from '@/components/Event'
import Email from '@/components/Email'
import WiFi from '@/components/WiFi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Vcard',
      component: Vcard
    }, {
      path: '/vcard',
      name: 'Vcard',
      component: Vcard
    }, {
      path: '/url',
      name: 'URL',
      component: URL
    }, {
      path: '/text',
      name: 'Text',
      component: Text
    }, {
      path: '/sms',
      name: 'SMS',
      component: SMS
    }, {
      path: '/call',
      name: 'Call',
      component: Call
    }, {
      path: '/geolocation',
      name: 'Geolocation',
      component: Geolocation
    }, {
      path: '/event',
      name: 'Event',
      component: Event
    }, {
      path: '/email',
      name: 'Email',
      component: Email
    }, {
      path: '/wifi',
      name: 'WiFi',
      component: WiFi
    }
  ]
})
