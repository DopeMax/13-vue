<template>
    <div class="newsinfo-container">
        <h3 class="title">新闻详情页面--{{docid}}</h3>
        <p class="subtitle">
            <span>发表时间：</span>
            <span>点击：0次</span>
        </p>
        <hr>
        <div class="content"></div>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  created() {
    this.getNewsInfo();
  },
  data: () => ({
    id: this.$route.params.id,//将URL地址传过来的id值，挂载到data上，方便调用
    newsinfo:{}//新闻对象
  }),
  components: {},
  methods:{
      getNewsInfo(){
          this.$http.get("api/getnew"+ this.docid).then(result=>{
              if(result.body.status===0){
                  this.newsinfo= result.body.message[0];
              }else{
                  Toast("获取新闻失败！");
              }
          })
      }
  }
};
</script>
<style lang="scss" scoped>
.newsinfo-container{
    padding:0 4px;
    .title{
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color: red;
    }
    .subtitle{
        font-size: 13px;
        color: #226aff;
        display: flex;
    }
    .content{}

}

</style>
