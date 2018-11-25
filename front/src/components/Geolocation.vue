<template>
  <form>
    <span>
      <el-input type="text" name="latitude" placeholder="Latitude"></el-input>
      <label>North</label><el-input type="radio" name="latitude-type" value="N"></el-input>
      <label>South</label><el-input type="radio" name="latitude-type" value="S"></el-input>
    </span>
    <span>
      <el-input type="text" name="longitude" placeholder="Longitude"></el-input>
      <label>West</label><el-input type="radio" name="longitude-type" value="W"></el-input>
      <label>East</label><el-input type="radio" name="longitude-type" value="E"></el-input>
    </span>
  </form>
</template>

<script>
export default {
}
</script>
