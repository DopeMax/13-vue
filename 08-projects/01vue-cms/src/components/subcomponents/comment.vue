<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入评论内容......（最多120字）" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="cmt-list">
        <div class="cmt-item" v-for="(item ,i)in comments" :key="item.add_time">
            <div class="cmt-title">
                第{{i+1}}楼&nbsp;&nbsp;用户：{{itme.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dateFromat}}
            </div>
            <div class="cmt-body">
                {{itme.content==='undefined'?'此用户很懒，什么都没说':item.content}}
            </div>
        </div>
        <div class="cmt-item">
            <div class="cmt-title">
                第1楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2012-12-12 12:12:12
            </div>
            <div class="cmt-body">
                锄禾日当午-复方
            </div>
        </div>
        <div class="cmt-item">
            <div class="cmt-title">
                第1楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2012-12-12 12:12:12
            </div>
            <div class="cmt-body">
                锄禾日当午-复方
            </div>
        </div>
        <div class="cmt-item">
            <div class="cmt-title">
                第1楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2012-12-12 12:12:12
            </div>
            <div class="cmt-body">
                锄禾日当午-复方
            </div>
        </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>



</template>
<script>
import { Toast } from "mint-ui";

export default {
  created() {
    this.getComments();
  },
  data: () => ({
    pageindex: 1,
    comments: []
  }),
  methods: {
    getComments() {
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex)
        .then(result => {
          if (result.body.status === 0) {
            //this.components = result.body.message;
            //每当获取新评论时，老数据不能被清空覆盖，而是应该在老数据上拼接新数据。
            this.components = this.components.concat(result.body.message);
          } else {
            Toast("获取评论失败！");
          }
        });
    },
    getMore() {
      this.pageindex++;
      this.getComments();
    }
  },
  props: ["id"]
};
</script>
<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }

  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
