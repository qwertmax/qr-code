<template>
  <form>
    <div>
      <span><input type="text" placeholder="First name" @change="changeVal" v-model="first_name"></span>
      <span><input type="text" placeholder="Company/Organisation" @change="changeVal" v-model="company"></span>
    </div>
    <div>
      <span><input type="text" placeholder="Last name" @change="changeVal" v-model="last_name"></span>
      <span><input type="text" placeholder="Email (personal)" @change="changeVal" v-model="email_personal"></span>
    </div>
    <div>
      <span><input type="text" placeholder="Title" @change="changeVal" v-model="title"></span>
      <span><input type="text" placeholder="Email (business)" @change="changeVal" v-model="email_business"></span>
    </div>
    <div>
      <span><input type="text" placeholder="Street" @change="changeVal" v-model="street"></span>
      <span><input type="text" placeholder="Phone (personal)" @change="changeVal" v-model="phone_personal"></span>
    </div>
    <div>
      <span><input type="text" placeholder="Zip code" @change="changeVal" v-model="zip_code"></span>
      <span><input type="text" placeholder="Phone (mobile)" @change="changeVal" v-model="phone_mobile"></span>
    </div>
    <div>
      <span><input type="text" placeholder="City" @change="changeVal" v-model="city"></span>
      <span><input type="text" placeholder="Phone (business)" @change="changeVal" v-model="phone_business"></span>
    </div>
    <div>
      <span><input type="text" placeholder="Country" @change="changeVal" v-model="country"></span>
      <span><input type="text" placeholder="Website" @change="changeVal" v-model="website"></span>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      first_name: '',
      last_name: '',
      middle_name: '',
      company: '',
      email_personal: '',
      email_business: '',
      title: '',
      phone_main: '',
      phone_home: '',
      phone_personal: '',
      phone_business: '',
      phone_mobile: '',
      street: '',
      city: '',
      state: '',
      country: '',
      country_code: '',
      zip_code: '',
      home_street: '',
      home_city: '',
      home_state: '',
      home_country: '',
      home_country_code: '',
      home_zip_code: '',
      website: '',
      note: '',
      vcard: ''
    }
  },
  methods: {
    changeVal: function (e) {
      this.getVals()
      this.$bus.$emit('makeQREvent', this.vcard)
    },
    getVals: function () {
      this.vcard = 'BEGIN:VCARD\nVERSION:3.0\n' +
      'N:' + this.last_name + ';' + this.first_name + ';' + this.middle_name + ';\n'

      if (this.first_name.length > 0) {
        this.vcard += 'FN:' + this.first_name + '\n'
      }

      if (this.company.length > 0) {
        this.vcard += 'ORG:' + this.company + ';\n'
      }

      if (this.title.length > 0) {
        this.vcard += 'TITLE:' + this.title + '\n'
      }

      if (this.email_business.length > 0) {
        this.vcard += 'EMAIL;type=INTERNET;type=WORK;type=pref:' + this.email_business + '\n'
      }

      if (this.email_personal.length > 0) {
        this.vcard += 'EMAIL;type=INTERNET;type=HOME:' + this.email_personal + '\n'
      }

      if (this.phone_main.length > 0) {
        this.vcard += 'TEL;type=WORK;type=pref:' + this.phone_main + '\n'
      }

      if (this.phone_mobile.length > 0) {
        this.vcard += 'TEL;type=CELL:' + this.phone_mobile + '\n'
      }

      if (this.phone_home.length > 0) {
        this.vcard += 'TEL;type=HOME:' + this.phone_home + '\n'
      }

      if (this.phone_business.length > 0) {
        this.vcard += 'TEL;type=WORK:' + this.phone_business + '\n'
      }

      if ((this.country.length > 0) && (this.city.length > 0) && (this.street.length > 0)) {
        this.vcard += 'item1.ADR;type=WORK:;;' + this.street + ';' + this.city + ';' + this.state + ';' + this.zip_code + ';' + this.country + '\n'
        if (this.country_code.length > 0) {
          this.vcard += 'item1.X-ABADR:' + this.country_code + '\n'
        }
      }

      if ((this.home_country.length > 0) && (this.home_city.length > 0) && (this.home_street.length > 0)) {
        this.vcard += 'item2.ADR;type=HOME;type=pref:;;' + this.home_street + ';' + this.home_city + ';' + this.home_state + ';' + this.home_zip_code + ';' + this.home_country + '\n'
        if (this.home_country_code.length > 0) {
          this.vcard += 'item2.X-ABADR:' + this.home_country_code + '\n'
        }
      }

      if (this.note.length > 0) {
        this.vcard += 'NOTE:' + this.note + '\n'
      }

      if (this.website.length > 0) {
        this.vcard += 'item3.URL;type=pref:' + this.website + '\n'
        this.vcard += 'item3.X-ABLabel:_$!<HomePage>!$_\n'
      }

      this.vcard += 'END:VCARD'
    }
  }
}
</script>
