<template>
  <div class="login">
    <div class="bg-img"></div>
    <el-card v-show="isLogin" shadow="always" class="login-card" key="login-card">
      <h3 class="title">登录</h3>
      <el-form :model="loginInfo" :rules="loginRules" ref="loginForm" label-width="70px">
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="loginInfo.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passward">
          <el-input v-model="loginInfo.passward" show-password placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label-width="0">
          <el-button @click="login('loginForm')" class="login-button" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
      <div class="register">
        <span>还没有账号?去</span>
        <span @click="changeMode" class="to-register">注册</span>
      </div>
    </el-card>
    <el-card v-show="!isLogin" shadow="always" class="login-card" key="register-card">
      <h3 class="title">注册</h3>
      <el-form :model="registerInfo" :rules="registerRules" ref="registerForm" label-width="80px">
        <el-form-item label="邀请码" prop="code">
          <el-input v-model="registerInfo.code" placeholder="请输入邀请码"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="registerInfo.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passward">
          <el-input v-model="registerInfo.passward" show-password placeholder="请设置密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassward">
          <el-input v-model="registerInfo.confirmPassward" show-password placeholder="请确认密码"></el-input>
        </el-form-item>
        <el-form-item label-width="0">
          <el-button @click="register('registerForm')" class="login-button" type="primary" plain>注册</el-button>
        </el-form-item>
      </el-form>
      <div class="register">
        <span>已经有账号?去</span>
        <span @click="changeMode" class="to-register">登录</span>
      </div>
    </el-card>
  </div>
</template>

<script>
import User from '@/http/User'
import { Storage } from '@/common/tools'
const CODE = 'abc12321cba'
export default {
  data () {
    var checkConfirmPassward = (rule, value, callback) => {
      if (value !== this.registerInfo.passward) {
        callback(new Error('密码输入不一致'))
      }
    }
    return {
      isLogin: true,
      loginInfo: {
        mobile: '',
        passward: ''
      },
      registerInfo: {
        code: '',
        mobile: '',
        passward: '',
        confirmPassward: ''
      },
      loginRules: {
        mobile: [
          {
            required: true,
            message: '请输入手机号',
            trigger: 'blur'
          },
          {
            pattern: /^1[34578]\d{9}$/,
            message: '手机号格式错误',
            trigger: 'blur'
          }
        ],
        passward: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          {
            pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/,
            message: '密码需由8-16位字母数字组成',
            trigger: 'blur'
          }
        ]
      },
      registerRules: {
        code: [
          { required: true, message: '请输入邀请码', trigger: 'blur' },
          {
            pattern: /^[a-z0-9]+$/i,
            message: '邀请码格式错误',
            trigger: 'blur'
          }
        ],
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          {
            pattern: /^1[34578]\d{9}$/,
            message: '手机号格式错误',
            trigger: 'blur'
          }
        ],
        passward: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/,
            message: '密码需由8-16位字母数字组成',
            trigger: 'blur'
          }
        ],
        confirmPassward: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { validator: checkConfirmPassward, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.loginInfo)
          const params = {
            phone: this.loginInfo.mobile,
            userPassword: this.loginInfo.passward
          }
          User.userLogin(this, params).then(res => {
            console.log(res)
            if (res.code === 0) {
              Storage.setToken(res.id)
              this.$router.push({ name: 'home' })
            } else {
              this.loginInfo = {
                mobile: '',
                passward: ''
              }
              return this.$message.error('用户名或密码错误')
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    register (formName) {
      if (this.registerInfo.code !== CODE) {
        return this.$message.warning('邀请码错误,请联系管理员')
      }
      console.log(this.registerInfo)
      this.$refs[formName].validate(valid => {
        console.log(valid)

        if (valid) {
          const params = {
            phone: this.registerInfo.mobile,
            userPassword: this.registerInfo.confirmPassward
          }
          User.getUserInfo(this, params).then(res => {
            if (res.id) {
              return this.$message.warning('您已注册,请直接登录')
            } else {
              User.userRegister(this, params).then(res => {
                Storage.setToken(res.id)
                this.$router.push({ name: 'home' })
              })
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    changeMode (form) {
      this.isLogin = !this.isLogin
    }
  },
  created () {
    this.isLogin =
      this.$route.query.isLogin !== undefined ? this.$route.query.isLogin : true
  }
}
</script>

<style lang="less" scoped>
.login {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .bg-img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: url('./imgs/yuntai_banner1.jpg') no-repeat center/cover;
    animation: bg-big 10s linear forwards;
  }
  @keyframes bg-big {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.6);
    }
  }
  .login-card {
    // width: 400px;
    // height: 300px;
    background-color: rgba(255, 255, 255, 0.8);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .title {
      text-align: center;
      font-size: 20px;
      font-weight: normal;
      line-height: 40px;
      margin-bottom: 20px;
    }
    .login-button {
      width: 100%;
    }
    .register {
      text-align: center;
      .to-register {
        cursor: pointer;
        color: #555;
      }
    }
  }
}
</style>
