<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue'
export default {
  data () {
    return {
      cdata: {
        category: [
          "第一勘察年",
          "第二勘察年",
          "第三勘察年",
        ],
        proData: [
          87.09,
          192.79,
          49.82,
          /*{ name: "第一勘察年", value: 9 },
          { name: "第二勘察年", value: 3 },
          { name: "第三勘察年", value: 6 },*/
        ],
      }
    };
  },
  components: {
    Chart,
  },
  mounted () {
    // this.setData();
  },
  methods: {
    // 根据自己的业务情况修改
    setData () {
      for (let i = 0; i < this.cdata.barData.length -1; i++) {
        let rate = this.cdata.barData[i] / this.cdata.lineData[i];
        this.cdata.rateData.push(rate.toFixed(2));
      }
    },
  }
};
</script>

<style lang="scss" scoped>
</style>