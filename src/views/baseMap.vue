<template>
  <div class="mapDiv">
    <!--  地图样式init  -->
    <tdt-map :center="center" :zoom="zoom" :controls="controls" :maxBounds="maxBounds" minZoom="6" @init="init">
      <tdt-control position="topright"></tdt-control>
      <!--  直接显示所有数据对应的区域    -->
      <!--      <div v-for="path in paths" :key="path.id">-->
      <!--        <tdt-polygon :path=path color="black" :opacity="1" :weight="2"></tdt-polygon>-->
      <!--      </div>-->
      <tdt-polygon :path="path"  color="black" :opacity="1" :weight="2"></tdt-polygon>
      <tdt-polygon :path="HLJarea[0]"  color="black" :opacity="1" :weight="2"></tdt-polygon>
      <tdt-polygon :path="HLJarea[1][0]"  color="black" :opacity="1" :weight="2"></tdt-polygon>
      <tdt-marker :position="marker1"></tdt-marker>
    </tdt-map>
  </div>
</template>

<script>
export default {
  name: "ex-map",
  data() {
    return {
      url: 'http://192.168.1.222:8003/all',
      maxBounds: [
        [137, 55], [120, 42]
      ],
      center: [128, 48],
      zoom: 6,
      marker1: [128, 48],
      controls: [{name: "zoom", position: "topleft"}, "scale", "copyright", "mapType","overviewMap"],
      // paths: []
      path:[],//多边形坐标
      HLJarea:[],//黑龙江省的边界
      serialNumber: '07233945'//申请序号,每次点击的时候更新这个值就可以
    };
  },
  methods: {
    //init方法
    init(map){
      map.setStyle('indigo');
    },
    // eslint-disable-next-line no-unused-vars
    mapClick(evt) {
      alert("click map");
    }
  },
  created() {
    //显示黑龙江的边界
    // var HLJdata=require('../areaData/heilongjiang.json');
    this.HLJarea=HLJdata.features[0].geometry.coordinates[0];
    this.HLJarea.push(HLJdata.features[0].geometry.coordinates[1]);
    console.log(this.HLJarea);

    //直接显示所有数据对应的区域
    // this.$http.get(this.url).then(res => {
    //   let i, j;
    //   // eslint-disable-next-line no-unused-vars
    //   let k = 0;
    //   address = new Array(2);
    //   console.log("总大小为:" + res.data.length)
    //   for (i = 0; i < 506; i++) {
    //     var data = res.data[i];
    //     var address = new Array(2);
    //     var addresses = new Array(data.address[0].length);//保存读取到的每条数据中的几个经纬度
    //     for (j = 0; j < data.address[0].length; j++) {
    //       address[0] = parseFloat(data.address[0][j].jingdu);
    //       address[1] = parseFloat(data.address[0][j].weidu);
    //       addresses[j] = JSON.parse(JSON.stringify(address));
    //     }
    //     this.paths.push(addresses);
    //     k++;
    //     console.log("k的大小为" + k);
    //   }
    // }, err => {
    //   console.log(err)
    // })

    //根据申请序号显示对应的区域
    this.$http.get(this.url).then(res=>{
      this.path=null;
      var dataLength=res.data.length;
      var i,j;
      for (i=0;i<dataLength;i++){
        if(res.data[i]['申请序号']===this.serialNumber){
          var data=res.data[i];
          var address = new Array(2);
          var addresses = new Array(data.address[0].length);//保存搜索到的数据中的几个经纬度
          for (j = 0; j < data.address[0].length; j++) {
            address[0] = parseFloat(data.address[0][j].jingdu);
            address[1] = parseFloat(data.address[0][j].weidu);
            addresses[j] = JSON.parse(JSON.stringify(address));
          }
          this.path=addresses;
          // console.log(this.path);
        }
      }
    },err=>{
      console.log(err);
    })
  }
};
</script>

<style scoped>
.mapDiv {
  width: 100%;
  height: 800px;
}
</style>