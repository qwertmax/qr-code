<template>
  <form>
    <span>
      <input type="text" name="latitude" placeholder="Latitude">
      <label>North</label><input type="radio" name="latitude-type" value="N">
      <label>South</label><input type="radio" name="latitude-type" value="S">
    </span>
    <span>
      <input type="text" name="longitude" placeholder="Longitude">
      <label>West</label><input type="radio" name="longitude-type" value="W">
      <label>East</label><input type="radio" name="longitude-type" value="E">
    </span>
  </form>
</template>

<script>
export default {
}
</script>
