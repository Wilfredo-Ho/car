<template>
  	<div class="position-wrapper">
      <transition name="slideLeft">
        <div class="sidebar-wrapper col-md-2" v-show="sidebarShow">
          <sidebar :listItem="listItem" :placeholdMsg="placeholder"></sidebar>
          <div class="table-wrapper">
            <div class="table-head table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th v-for="col in thead">{{col}}</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div class="table-body table-responsive">
              <table class="table table-hover">
                <tbody>
                  <tr v-for="(item,index) in carInfo" @click="trackCar(index, item.license)">
                    <td>{{ item.license }}</td>
                    <td>{{ item.pnoNum }}</td>
                    <td>{{ item.state }}</td>
                    <td><icon :name="trackStatus"></icon></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </transition>
      <div class="content-wrapper" :class="content">
        <div class="toggleBtn-wrapper">
          <toggle-btn :menu="parent" @toggle="toggle"></toggle-btn>
        </div>
        <div class="map-wrapper">
          <div id="allmap"></div>
        </div>
      </div>
  	</div>
</template> 
 
<script> 
import sidebar from './sidebar/sidebar'
import toggleBtn from './toggleBtn/toggleBtn'

const OK_flag = 0;
const navHeight = 84;
const toggleBtnHeight = 45;

export default { 
  data () { 
    return { 
      sidebarShow: true,
      content: 'col-md-10',
      parent: ['定位监控'],
      listItem: [],
      thead: ["车牌号", "PNO码", "状态", "跟踪"],
      carInfo: [],
      trackStatus: "map-o",
      placeholder: '请输入车牌号或PNO码'
    }; 
  },
  methods: {
    trackCar(index, license){

      console.log(index, license);
    },
    toggle () {
      this.sidebarShow = !this.sidebarShow;
      if(this.sidebarShow){
        this.content = 'col-md-10'
      }else{
        this.content = 'col-md-12'
      }
    },
    callback (data) {
      console.log(data);
    }
  },
  components: {
    sidebar,
    toggleBtn
  },
  created() {
    this.$http.get('/api/position').then((res) => {
      // 判断请求是否成功
      if(res.body.errno === OK_flag){
          this.carInfo = res.body.data.init
      }
    }, (err) => {
        alert(err);
    })
    

  },
  mounted () {
    $('#allmap').height(window.innerHeight - navHeight - toggleBtnHeight);
  	var map = new BMap.Map('allmap');
    var poi = new BMap.Point(116.307852,40.057031);
    var convertor = new BMap.Convertor();
    map.centerAndZoom(poi, 16);
    map.enableScrollWheelZoom();

    var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
                    '<img src="../img/baidu.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
                    '地址：北京市海淀区上地十街10号<br/>电话：(010)59928888<br/>简介：百度大厦位于北京市海淀区西二旗地铁站附近，为百度公司综合研发及办公总部。' +
                  '</div>';

    //创建检索信息窗口对象
    var searchInfoWindow = null;
    searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
        title  : "百度大厦",      //标题
        width  : 290,             //宽度
        height : 105,              //高度
        panel  : "panel",         //检索结果面板
        enableAutoPan : true,     //自动平移
        searchTypes   :[
          BMAPLIB_TAB_SEARCH,   //周边检索
          BMAPLIB_TAB_TO_HERE,  //到这里去
          BMAPLIB_TAB_FROM_HERE //从这里出发
        ]
      });
      var marker = new BMap.Marker(poi); //创建marker对象
      marker.enableDragging(); //marker可拖拽
      marker.addEventListener("click", function(e){
        searchInfoWindow.open(marker);
      })
      map.addOverlay(marker); //在地图中添加marker

      var arr = [];
      $.each(this.carInfo, function(item, index) {
        point = new BMap.Point(item.gps_x, item.gps_y);
        arr.push(point);
        alert();
      });
      console.log(arr);
     
      convertor.translate(arr, 1, 5, this.callback)
    }
}; 
</script> 
 
<style scoped>
.slideLeft-enter-active, .slide-leave-active{
    transition: all .5s ease-in-out
}
.slideLeft-enter, .slideLeft-leave-active{
    transform: translate3d(-10px, 0, 0);
}
#allmap{
  width: 100%;
}
.sidebar-wrapper{

}
.toggleBtn-wrapper{

}
.content-wrapper{
  /*transition: all .2s ease-in-out;*/
}
.table-head .table{
    margin-bottom: 0;
}
tr td, tr th{
  text-align: center;
}
.table-body table{
  /*margin-top: 0px;*/
  display: block;
  color: #2a80c9;
  max-height: 200px;
  overflow-y: auto;
}
.table-body table tr{
  cursor: pointer;
}
tr td{
  font-size: 12px;
}
/* @media (max-width: 1600px){
  tr td{
    font-size: 10px;
  }
} */
</style> 