<template>
<!-- 用el-card做主页面 -->
  <el-card>
      <!-- 放置一个面包屑组件 -->
      <bread-crumb slot="header">
       <template slot="title">
           评论管理
       </template>
      </bread-crumb>
      <!-- 表格组件 -->
      <el-table :data='list'>
          <el-table-column  label="标题" width="600px"></el-table-column>
          <el-table-column  label="评论状态"></el-table-column>
          <el-table-column  label="评论总数"></el-table-column>
          <el-table-column label="评论粉丝数"></el-table-column>
          <el-table-column  label="操作"></el-table-column>
      </el-table>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: [

      ]

    }
  }

}
</script>

<style>

</style>
