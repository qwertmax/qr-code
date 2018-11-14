<template>
  <form>
    <span><input type="text" name="description" placeholder="Description"></span>
    <span><input type="text" name="from" placeholder="From"></span>
    <span><input type="text" name="to" placeholder="To"></span>
    <select name="timezone">
      <option value="+720">GMT -12:00</option>
      <option value="+660">GMT -11:00</option>
      <option value="+600">GMT -10:00</option>
      <option value="+540">GMT -09:00</option>
      <option value="+480">GMT -08:00</option>
      <option value="+420">GMT -07:00</option>
      <option value="+360">GMT -06:00</option>
      <option value="+300">GMT -05:00</option>
      <option value="+240">GMT -04:00</option>
      <option value="+180">GMT -03:00</option>
      <option value="+120">GMT -02:00</option>
      <option value="+60">GMT -01:00</option>
      <option value="0">GMT</option>
      <option value="-60">GMT +01:00</option>
      <option value="-120">GMT +02:00</option>
      <option value="-180">GMT +03:00</option>
      <option value="-240">GMT +04:00</option>
      <option value="-300">GMT +05:00</option>
      <option value="-360">GMT +06:00</option>
      <option value="-420">GMT +07:00</option>
      <option value="-480">GMT +08:00</option>
      <option value="-540">GMT +09:00</option>
      <option value="-600">GMT +10:00</option>
      <option value="-660">GMT +11:00</option>
      <option value="-720">GMT +12:00</option>
    </select>
  </form>
</template>

<script>
export default {
}
</script>
