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
        <img src="http://b-ssl.duitang.com/uploads/item/201509/22/20150922180033_hV43u.jpeg" alt />
        <!-- 下拉菜单 -->
        <el-dropdown trigger="click">
          <span>软萌嘤嘤嘤</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>github地址</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {}
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
