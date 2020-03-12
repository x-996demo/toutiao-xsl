<template>
<!-- 先放置一个大容器 小容器都放在大容器里面 -->
  <el-container>
    <el-aside style="width:230px">
      <!-- <h1>左侧导航区域</h1> -->
      <!-- 左侧导航组件 -->
<layout-aside></layout-aside>
    </el-aside>
    <!-- 右侧在嵌套一个el-container -->
    <el-container>
      <!-- 在上下布局 -->
      <el-header>
        <!-- <h1>顶部操作栏</h1> -->
        <!-- 顶部操作栏组件 -->
        <layout-header></layout-header>
      </el-header>
      <!-- 主要区域 -->
      <el-main>

       <h1>主要区域</h1>
       <!-- 这里应该放置二级路由容器 -->
       <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// 将左侧组件引用并注册

export default {

}
</script>

<style>

</style>
