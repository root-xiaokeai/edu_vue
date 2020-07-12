<template>
  <el-carousel height="720px" :interval="3000" arrow="always">
    <el-carousel-item v-for="(value,key) in list" :key="key">
      <img :src="value.img" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  export default {
    name: "banner",
    data(){
      return {
        list:[]
      }
    },
    methods:{
      about(){
        this.$axios({
                url: `http://127.0.0.1:8000/user/home/`,
                method: "get",
              }).then(response=>{
                console.log(response);
                this.list=response.data
              }).catch(error=>{
                console.log(error);
                alert('查询失败')
              });
      }
    },
    created(){
      this.about()
    },
  }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
