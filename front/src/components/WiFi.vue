<template>
  <form>
    <div>
      <select name="type">
        <option value="WPA">WPA</option>
        <option value="WEP">WEP</option>
        <option value="nopass">unencrypted</option>
      </select>
      <span><input type="text" name="SSID/network name" placeholder="SSID/network name"></span>
    </div>
    <div>
      <span><input type="text" name="password" placeholder="Password"></span>
      <span><label>Wifi network is hidden/unencrypted</label><input type="checkbox" value="true" name="hidden"></span>
    </div>
  </form>
</template>

<script>
export default {
}
</script>
