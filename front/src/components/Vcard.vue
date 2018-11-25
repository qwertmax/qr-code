<template>
  <form>
    <div>
      <span><input type="text" name="first_name" placeholder="First name"></span>
      <span><input type="text" name="company" placeholder="Company/Organisation"></span>
    </div>
    <div>
      <span><input type="text" name="last_name" placeholder="Last name"></span>
      <span><input type="text" name="email_personal" placeholder="Email (personal)"></span>
    </div>
    <div>
      <span><input type="text" name="title" placeholder="Title"></span>
      <span><input type="text" name="email_business" placeholder="Email (business)"></span>
    </div>
    <div>
      <span><input type="text" name="street" placeholder="Street"></span>
      <span><input type="text" name="phone_personal" placeholder="Phone (personal)"></span>
    </div>
    <div>
      <span><input type="text" name="zip_code" placeholder="Zip code"></span>
      <span><input type="text" name="phone_mobile" placeholder="Phone (mobile)"></span>
    </div>
    <div>
      <span><input type="text" name="city" placeholder="City"></span>
      <span><input type="text" name="phone_business" placeholder="Phone (business)"></span>
    </div>
    <div>
      <span><input type="text" name="country" placeholder="Country"></span>
      <span><input type="text" name="website" placeholder="Website"></span>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      first_name: '',
      last_name: '',
      company: '',
      email_personal: '',
      email_business: '',
      title: '',
      street: '',
      phone_personal: '',
      phone_business: '',
      phone_mobile: '',
      zip_code: '',
      city: '',
      country: '',
      website: ''
    }
  },
  methods: {
    changeVal: function (e) {
      this.$bus.$emit('makeQREvent', e.target.value)
    }
  }
}
</script>
