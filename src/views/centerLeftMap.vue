<template>
  <div class="mapDiv" id="centerLeftMap">
    <tdt-map :center="center" :zoom="zoom" :controls="controls" :maxBounds="maxBounds" minZoom=6 @init="init">
      <tdt-polygon :path="path2" :edit="edit" color="black" :opacity="1"></tdt-polygon>

      <tdt-control position="topright">
      </tdt-control>
      <div v-for="path in paths" :key="path.id">
        <tdt-polygon :path=path color="black" :opacity="1" :weight="2"></tdt-polygon>
      </div>
      <tdt-marker :position="marker1"></tdt-marker>
    </tdt-map>
  </div>
</template>


<script>
import heiborder from "../resource/heiborder.json"

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
      controls: [{name: "zoom", position: "topleft"}, "scale", "copyright", "overviewMap", "mapType"],
      paths: [],
      path2:[],
      map: null
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    mapClick(evt) {
      alert("click map");
    },
    init(map) {
      // map.setStyle('indigo');
      this.map = map
    },
    //绘制边界,来自天地图demo.
    drawArea(json, opacity) {

      // var area = json.area;
      // var points = area.points;

      // console.log(json)


      // //如果有区域坐标信息，画出此行政区的多边形。
      // if (points && points.length != 0) {
      //   //面的线的样式
      var style = {
        strokeColor: "#0027eb",
        fillColor: "red",
        strokeWeight: 1,
        strokeOpacity: 0.000001,
        fillOpacity: opacity, //透明度，随机生成。
        strokeStyle: "dashed" //虚线
      }

      var data = json.split(";")
      //   for (var i = 0; i < points.length; i++) {
      //     var region = points[i].region;//单个面
      //     var pointArr = region.split(",");
      //     var pointsz = [];
      var addresses = new Array(data.length)

      for (var j = 0; j < data.length - 1; j++) {
        var p = data[j];
        var pArr = p.split(",");
        var point = [parseFloat(pArr[0]), parseFloat(pArr[1])];
        console.log(point)

        addresses[j] = JSON.parse(JSON.stringify(point));
        // this.path2.push(addresses);

      }
      // var poly = new TPolygon(pointsz, style);
      // map.addOverLay(poly);
      //   }
      // }
    }
  },
  created() {

    this.$http.get(this.url).then(res => {
      let i, j;
      // eslint-disable-next-line no-unused-vars
      let k = 0;
      address = new Array(2);
      console.log("总大小为:" + res.data.length)
      for (i = 0; i < 506; i++) {
        var data = res.data[i];
        var address = new Array(2);
        var addresses = new Array(data.address[0].length);//保存读取到的每条数据中的几个经纬度
        for (j = 0; j < data.address[0].length; j++) {
          address[0] = parseFloat(data.address[0][j].jingdu);
          address[1] = parseFloat(data.address[0][j].weidu);
          addresses[j] = JSON.parse(JSON.stringify(address));
        }
        this.paths.push(addresses);
        k++;
        // console.log("k的大小为" + k);
      }
    }, err => {
      console.log(err)
    })

    this.drawArea(heiborder.districts[0].polyline, 0.2)
  }
};

</script>

<!--<style scoped>-->
<!--.mapDiv {-->
<!--  width: 100%;-->
<!--  height: 950px;-->
<!--}-->

<!--</style>-->

<style lang="scss">
#centerLeftMap {
  padding: 0.2rem;
  height: 6.125rem;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
}
</style>