<template>
  <div class="wrap-login">
    <el-container>
      <el-header>
        <el-row>
           <el-col :span="6" :offset="18">
             <div class="tel">
               <i class="el-icon-phone-outline"></i>
               客户服务热线： 400 556 8895
             </div>
           </el-col>
        </el-row>
      </el-header>
      <el-main>
        <div class="wrap-form">
          <el-container direction="horizontal">
            <el-aside width="240px">
              <el-card>
                <div class="card-item">
                  <el-image :src="logourl" style="width: 40px; height: 40px"></el-image>
                </div>
                <div class="card-item">
                  <i class="card-item-icon el-icon-chat-dot-square"></i>
                  <div class="card-item-title">沟通</div>
                  <div class="card-item-text">在线职位及时沟通</div>
                </div>
                <div class="card-item">
                  <i class="card-item-icon el-icon-ice-cream-round"></i>
                  <div class="card-item-title">任性选</div>
                  <div class="card-item-text">各大行业职位任你选</div>
                </div>
              </el-card>
            </el-aside>
            <el-main>
              <el-tabs stretch>
                <el-tab-pane label="密码登录">
                  <el-form>
                    <el-form-item>
                      <el-input v-input-group v-model="phone">
                        <template slot="prepend"><i class="el-icon-mobile-phone"></i></template>
                        <el-select slot="prepend" v-model="prephone" style="width: 80px;">
                          <el-option
                            style="width: 180px;"
                            v-for="item of options"
                            :label="item.value"
                            :value="item.value"
                            :key="item.value">
                            <span style="float: left">{{ item.label }}</span>
                            <span style="float: right">{{ item.value }}</span>
                          </el-option>
                        </el-select>
                      </el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-input v-input-group v-model="password" type="password">
                        <template slot="prepend"><i class="el-icon-key"></i></template>
                      </el-input>
                    </el-form-item>
                    <el-form-item>
                      <div class="warp-captcha" @click="showCaptcha">
                        <i v-if="captchaSuccess" class="el-icon-circle-check" :class="{ successColor: captchaSuccess }"></i>
                        <i v-else class="el-icon-lock"></i>
                        <span v-if="captchaSuccess" :class="{ successColor: captchaSuccess }">验证通过</span>
                        <span v-else>点击此处进行验证</span>
                        <i class="el-icon-s-check"></i>
                      </div>
                    </el-form-item>
                    <el-form-item>
                      <el-button class="btn-submit">登录</el-button>
                    </el-form-item>
                  </el-form>
                </el-tab-pane>
                <el-tab-pane label="短信登录">
                  短信
                </el-tab-pane>
                <el-tab-pane label="扫码登录">
                  扫码
                </el-tab-pane>
              </el-tabs>
            </el-main>
          </el-container>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import InputGroup from '../../directiv/el-input-group/index.js'

export default {
  name: 'Login',
  directives: {
    InputGroup
  },
  data: function () {
    return {
      phone: '',
      password: '',
      prephone: '+886',
      options: [
        {
          value: '+86',
          label: '中国大陆'
        }, {
          value: '+1',
          label: '美国'
        }, {
          value: '+852',
          label: '香港'
        }, {
          value: '+886',
          label: '台湾'
        }
      ],
      logourl: require('../../assets/logo.png'),
      captchaSuccess: false
    }
  },
  methods: {
    showCaptcha () {
      if (!this.captchaSuccess) {
        let captcha1 = new TencentCaptcha('appid',  (res) => { // eslint-disable-line
          console.log(res)
          if (res.ret === 0) {
            console.log(res.ticket)
            this.captchaSuccess = true
          }
        })
        captcha1.show() // 显示验证码
      }
    }
  }
}
</script>
<style lang="scss">

.wrap-login {
  height: 100%;
  background: #00d7c6 url(../../assets/images/loginbg.png) center bottom no-repeat;
  position: relative;
  .wrap-form {
    width: 740px;
    height: 500px;
    background-color: #fff;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -370px;
    margin-top: -250px;
    box-shadow: 0 6px 13px 0 rgba(0,0,0,.1);
    .el-container {
      height: 100%;
    }
    .el-aside {
      border-radius: 10px 0 0 10px;
      border-color: red;
      background-color: #f8fcff;
      .el-card {
        height: 100%;
        padding-top: 30px;
        background: none;
        border: none;
        clear: both;
        .card-item {
          height: 100px;
          .card-item-icon {
            float: left;
            height: 42px;
            font-size: 30px;
            line-height: 42px;
            width: 42px;
          }
          .card-item-title {
            font-size: 16px;
            line-height: 22px;
            font-weight: 700;
            color: #8d92a1;
          }
          .card-item-text {
            font-size: 14px;
            line-height: 28px;
            color: #b0b4c1;
          }
        }
      }
    }
    .el-main {
      padding: 60px 100px;
      .warp-captcha {
        background-color: #414653;
        color: #fff;
        border-radius: 4px;
        display: flex;
        &:hover {
          cursor: pointer;
        }
        i {
          padding: 0 10px;
          line-height: 40px;
          flex: 0 0 30px;
        }
        span {
          flex: 1;
          text-align: center;
        }
      }
    }
    .el-form-item {
      margin-top: 30px;
    }
    .successColor {
      color: #40d47e;
    }
    .btn-submit {
      width: 100%;
      border: 1px solid #5dd5c8;
      background-color: #5dd5c8;
      color: #fff;
      font-size: 18px;
      font-weight: 400;
    }
  }
  .tel {
    margin-top: 60px;
  }
}
</style>
