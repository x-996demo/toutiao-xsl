<template>
  <!-- 二级默认路由组件 -->
  <div class="second-home">
       <!-- 幻灯片 -->
    <el-carousel :interval="4000" type="card" height="250px">
      <el-carousel-item v-for="item in list" :key="item">
         <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        'http://n.sinaimg.cn/front/767/w984h583/20190104/yilD-hrfcctm4177923.jpg',
        'http://dingyue.nosdn.127.net/PkhZsxmYdani9i=PFGkHmkVz5sQRjIlAibt5QsBOWi5jr1546228226051.jpg',
        'http://p3.ssl.cdn.btime.com/t01fa799fef65c3ae72.jpg',
        'http://c4.haibao.cn/img/0_0_100_0/1496915517.2973/690684649a12c4db6ab7a7c6848a81d8.jpg']
    }
  }
}
</script>

<style lang='less'>
.second-home{
    height: calc(100vh - 60px);
    background-size: cover;
    background-image: url('http://5b0988e595225.cdn.sohucs.com/images/20170828/3ce24ab70c294310b3044ffbd418b14a.gif');
    img{
        width: 100%;
        height: 100%;
    }
}
</style>
