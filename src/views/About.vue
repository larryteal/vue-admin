<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="wrap-form">
      <el-form>
        <el-form-item>
          <PhoneInput border-color="red">
            <template slot="prepend-icon">
              <i class="el-icon-mobile-phone"></i>
            </template>
            <template slot="prepend-info">
              <el-select v-model="select" slot="prepend" placeholder="" style="width: 80px;">
                <el-option label="+1" value="1" style="width: 150px;">
                  <span style="float: left">美国</span>
                  <span style="float: right">+1</span>
                </el-option>
                <el-option label="+86" value="86">
                  <span style="float: left">中国大陆</span>
                  <span style="float: right">+86</span>
                </el-option>
                <el-option label="+852" value="852">
                  <span style="float: left">香港</span>
                  <span style="float: right">+852</span>
                </el-option>
                <el-option label="+886" value="886">
                  <span style="float: left">台湾</span>
                  <span style="float: right">+886</span>
                </el-option>
              </el-select>
            </template>
          </PhoneInput>
        </el-form-item>
      </el-form>
    </div>
    <div class="wrap">
      <el-form>
        <el-form-item>
          <el-input v-group="{}">
            <template slot="prepend"><i class="el-icon-mobile-phone"></i></template>
            <template slot="prepend"><i class="el-icon-mobile-phone"></i></template>
            <template slot="prepend"><i class="el-icon-mobile-phone"></i></template>
            <template slot="prepend">fsfsd&nbsp;</template>
            <el-select slot="prepend" v-model="select" style="width: 80px;">
              <el-option label="+1" value="1" style="width: 150px;">
                <span style="float: left">美国</span>
                <span style="float: right">+1</span>
              </el-option>
              <el-option label="+86" value="86">
                <span style="float: left">中国大陆</span>
                <span style="float: right">+86</span>
              </el-option>
              <el-option label="+852" value="852">
                <span style="float: left">香港</span>
                <span style="float: right">+852</span>
              </el-option>
              <el-option label="+886" value="886">
                <span style="float: left">台湾</span>
                <span style="float: right">+886</span>
              </el-option>
            </el-select>
            <template slot="append">.com</template>
          </el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import group from '../directiv/el-input-group/index.js'

export default {
  name: 'About',
  directives: {
    group
  },
  data: function () {
    return {
      select: '886'
    }
  }
}
</script>
<style lang="scss">
.wrap {
  width: 500px;
  padding: 40px;
  margin: 0 auto;
  border: 1px solid gray;
}
.wrap-form {
  width: 500px;
  border: 1px solid gray;
  padding: 40px;
}
</style>
