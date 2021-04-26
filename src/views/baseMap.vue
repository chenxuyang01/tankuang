<template>
  <div class="mapDiv">
    <tdt-map :center="center" :zoom="zoom" :controls="controls" :maxBounds="maxBounds" minZoom="6" @init="init">
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
export default {
  name: "ex-map",
  data() {
    return {
      url:'http://192.168.1.222:8003/all',
      maxBounds:[
          [137,55], [120,42]
      ],
      center: [128, 48],
      zoom: 6,
      marker1: [128, 48],
      controls: [{ name: "zoom", position: "topleft" }, "scale", "copyright", "overviewMap", "mapType"],
      paths:[]
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    mapClick(evt) {
      alert("click map");
    }
  },
  created() {

    this.$http.get(this.url).then(res => {
      let i, j;
      // eslint-disable-next-line no-unused-vars
      let k = 0;
      address = new Array(2);
      console.log("总大小为:"+res.data.length)
      for (i=0; i<506; i++) {
        var data=res.data[i];
        var address = new Array(2);
        var addresses=new Array(data.address[0].length);//保存读取到的每条数据中的几个经纬度
        for (j=0; j<data.address[0].length; j++) {
          address[0]=parseFloat(data.address[0][j].jingdu);
          address[1]=parseFloat(data.address[0][j].weidu);
          addresses[j]=JSON.parse(JSON.stringify(address));
        }
        this.paths.push(addresses);
        k++;
        console.log("k的大小为"+k);
      }
    },err=>{
      console.log(err)
    })
  }
};
</script>

<style scoped>
.mapDiv {
  width: 100%;
  height: 950px;
}
</style>