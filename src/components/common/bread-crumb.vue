<template>
<!-- 使用elementui组件 封装面包屑组件 设置分隔符-->
  <el-breadcrumb separator=">">
      <el-breadcrumb-item to="/home">首页</el-breadcrumb-item>
      <!-- 第二个选项是动态的 需要采用传值的方式传进来 props传值 slot插槽(采用) -->
      <el-breadcrumb>
          <!-- 内容是动态的 -->
          <!-- 定义一个具名插槽 -->
          <slot name="title"></slot>
      </el-breadcrumb>
  </el-breadcrumb>
</template>

<script>
export default {

}
</script>

<style>

</style>
