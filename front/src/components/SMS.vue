<template>
  <form>
    <div>
      <el-input type="text" name="country_code" placeholder="Country code"></el-input>
      <el-input type="text" name="area_code" placeholder="Area code"></el-input>
      <el-input type="text" name="phone_number" placeholder="Phone number"></el-input>
    </div>
    <el-input type="textarea" placeholder="Message" :autosize="{ minRows: 2, maxRows: 8}"></el-input>
  </form>
</template>

<script>
export default {
}
</script>
