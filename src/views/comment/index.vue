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
  },
  methods: {
    //   获取评论数据
    getComment () {
      this.$axios({
        url: '/articles', // 请求地址
        params: {
          response_type: 'comment' // 此参数用来控制获取数据类型
        }
        // query参数应该在哪个位置传 axios
        // params 传get参数也就是query参数
        // data   传body参数也就是请求体参数
      }).then(result => {
        console.log(result)
      })
    }
  },
  created () {
    // 直接在钩子函数中获取数据
    this.getComment()
  }

}
</script>

<style>

</style>
