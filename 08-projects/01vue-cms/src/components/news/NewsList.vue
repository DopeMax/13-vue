<template>
    <div>
        <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in NewLists" :key="item.docid">
        <router-link :to="'/home/newsinfo/'+item.docid">
          <img class="mui-media-object mui-pull-left" :src="item.picInfo[0].url">
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>发表时间:{{item.ptime | dateFormat}}</span>
              <span>点击:{{item.tcount}}</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>

    </div>
</template>

<script>
import { Toast } from "mint-ui";
export default{
    data(){
        return {
            NewLists:[],
        newsLists:{
            status:0,
            msg:"请求成功",
            data:[
                {id:1,title:"《温暖的弦》大结局！收视率大涨，网友：他是这部剧中唯一的遗憾",add_time:"2017-08-16T02:50:45.000Z",zhaiyao:"lalala",click:21,img_url:"http://03.imgmini.eastday.com/mobile/20180530/20180530190737_3e306c838ec475c55203fc8c3bf367ed_3_mwpm_03200403.jpg"},
                {id:2,title:"原来35年前周星驰做过触屏电脑推销员",add_time:"2017-11-16T23:40:45.000Z",zhaiyao:"lalala",click:1,img_url:"http://05.imgmini.eastday.com/mobile/20180530/20180530190726_e0837aaa4319e9f55ec0343caea38b14_3_mwpm_03200403.jpg"},
                {id:3,title:"四部正在热映的电影，我猜你只看了《复联3》，全看过的绝对富婆",add_time:"2017-09-16T02:50:45.000Z",zhaiyao:"lalala",click:12,img_url:"http://00.imgmini.eastday.com/mobile/20180530/20180530190704_1c3b098fc00a3320a66f88797df2381a_3_mwpm_03200403.jpg"},
                {id:4,title:"黄晓明装嫩不认老 亏王力宏想生10胎组球队",add_time:"2017-11-12T11:50:45.000Z",zhaiyao:"lalala",click:15,img_url:"http://01.imgmini.eastday.com/mobile/20180530/20180530212530_b278364aa2de013e39482bfc00fae6fc_1_mwpm_03200403.jpg"},
                {id:5,title:"已婚女星被拍与健身教练牵手，急回应没劈腿：只是放松的肢体接触",add_time:"2017-09-16T04:07:15.000Z",zhaiyao:"lalala",click:45,img_url:"http://02.imgmini.eastday.com/mobile/20180530/20180530212523_cb585ce5d609c34842621257311de4fd_2_mwpm_03200403.jpg"},
                {id:6,title:"杠上了？崔永元回应批评范冰冰：有本事，出来走两步",add_time:"2018-05-10T00:07:05.010Z",zhaiyao:"qaq",click:20,img_url:"http://01.imgmini.eastday.com/mobile/20180530/20180530212536_93fd8ca9674072e661a48c49f33a1be6_2_mwpm_03200403.jpg"},
                {id:7,title:"演员的诞生 红了谁 黑了谁？",add_time:"2018-05-30T01:08:54.000Z",zhaiyao:"4154",click:17,img_url:"http://08.imgmini.eastday.com/mobile/20180530/20180530212514_538c936eb85d2183826d159c2ee354b9_2_mwpm_03200403.jpg"},
                {id:8,title:"迪丽热巴撞上韩国女星秋瓷炫，网友：素颜脸和天然脸一目了然",add_time:"2018-05-30T12:09:04.000Z",zhaiyao:"4154",click:6,img_url:"http://02.imgmini.eastday.com/mobile/20180530/20180530212439_a05d062b9c794e7e2d0d2b21ab0051aa_8_mwpm_03200403.jpg"},
                {id:9,title:"郭敬明被群嘲，算委屈他了吗？",add_time:"2018-05-30T05:04:08.000Z",zhaiyao:"4154",click:61,img_url:"http://01.imgmini.eastday.com/mobile/20180530/20180530212425_86739655a97dd6bd78f71a74c08dbe0a_14_mwpm_03200403.jpg"},
                {id:10,title:"现场购买电影票居然比网购贵2.5倍，是谁帮你付的差价？",add_time:"2018-05-30T05:05:02.000Z",zhaiyao:"4154",click:27,img_url:"http://06.imgmini.eastday.com/mobile/20180530/20180530212321_becc7c6530cb281edc5511115315a2ca_1_mwpm_03200403.jpg"}
            ]
            }
        }
        
  },
  created() {
      this.getNewsList();
  },
      methods:{
        getNewsList(){
            this.$http.get('journalismApi').then(result=>{
                if(result.body.code===200){
                    
                    this.NewLists=result.body.data.sports;
                    
                }else{
                    Toast("获取新闻列表失败。。。");
                }
            })
               
           
           //this.NewLists=this.newsLists.data
      //console.log(this.NewLists);

        }
    }
}

</script>

<style lang="scss" scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
