<template>
  <!-- elementUI布局组件 el-row 和el-col -->
  <el-row align="middle" type="flex" class="layout-header">
    <el-col :span="12" class="left">
      <!-- 图标 -->
      <i class="el-icon-s-grid"></i>
      <span>解大大科技股份有限公司</span>
    </el-col>
    <!-- 右侧 -->
    <el-col :span="12" class="right">
      <!-- 再次放入row组件 align属性垂直居中 -->
      <el-row type="flex" justify="end" align="middle">
        <img :src="userInfo.photo" alt />
        <!-- 下拉菜单 -->
        <el-dropdown trigger="click" @command="clickMenu">
          <span>{{userInfo.name}}</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="info">个人信息</el-dropdown-item>
            <el-dropdown-item command="git">github地址</el-dropdown-item>
            <el-dropdown-item command="lgout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {} // 用户个人信息
    }
  },
  methods: {
    clickMenu (command) {
    //   alert('点击了菜单' + command)
    // 需要处理三种情况
    // if(command==='info'){
    //     //点击了个人信息
    // }elseif(command==='git'){
    //     //如果点击了git地址就跳转到git仓库
    //     window.location.href='https://github.com/x-996demo'
    // } else {
    //     //退出系统 1.删除token 2.跳转回登录页
    //    window.localStorage.removeItem('user-token')//删除localstorage中的某个选项
    //     this.$router.push('/login')
    // }
      if (command === 'info') {
        // 点击了个人信息
      } else if (command === 'git') {
        // 点击了git地址就跳转到git仓库
        window.location.href = 'https://github.com/x-996demo'
      } else {
        // 退出系统 1. 删除token 2.跳转回登录页
        window.localStorage.removeItem('user-token')// 删除localstorage
        this.$router.push('/login') // 跳回登录页 编程是导航
      }
    }
  },
  created () {
    // const token = localStorage.getItem('user-token') // 从兜里拿token 也就是从缓存中取token
    // 获取用户个人信息
    this.$axios({
      url: '/user/profile' // 请求地址
      // headers: {
      //   Authorization: `Bearer ${token}` // 格式要求 Bearer+token
      // } // 请求头参数 headers放置请求头参数
    }).then(result => {
      // 若果加载成功了 我们要将数据赋值给 userinfo
      this.userInfo = result.data.data
    })
  }
}
</script>

<style lang='less' scoped>
.layout-header {
  height: 60px;
  .left {
    i {
      font-size: 20px;
    }
  }
  .right {
    img {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      margin-right: 5px;
    }
  }
}
</style>
