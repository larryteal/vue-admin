<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <router-link to="/login">Go to Foo</router-link>
    <div class="wrap-test">
      <div class="wrap-test-left">
        <i class="el-icon-tickets"></i>
      </div>
      <div class="wrap-test-right">
        <div class="title">之额</div>
        <div class="text">冯绍峰的说法</div>
      </div>
    </div>
    <div class="wrap-test">
      <el-form>
        <el-form-item>
          <!-- <div class="wrap-icon"><i class="el-icon-tickets"></i></div> -->
          <div class="wrap-icon"><span>dddd</span></div>
          <el-input></el-input>
        </el-form-item>
      </el-form>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
<style lang="scss">
.wrap-test {
  height: 100px;
  width: 500px;
  margin: 0 auto;
  border: 1px solid red;
  .wrap-test-left {
    // border: 1px solid darkcyan;
    display: inline-block;
    width: 40px;
    vertical-align: top;
    i {
      width: 25px;
      height: 42px;
      line-height: 42px;
      font-size: 25px;
    }
  }
  .wrap-test-right {
    display: inline-block;
    vertical-align: top;
    // border: 1px solid darkkhaki;
    height: 44px;
    width: 200px;
    .title {
      font-weight: 700;
      font-size: 16px;
      line-height: 22px;
      color: #8d92a1;
    }
    .text {
      font-size: 13px;
      line-height: 18px;
      margin-top: 2px;
      color: #b0b4c1;
    }
  }
  .wrap-icon {
    display: inline-block;
    border: 1px solid red;
  }
  .el-input {
    display: inline-block;
    width: 200px;
  }
}
</style>
