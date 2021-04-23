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
          "基本区块数",
          "四分之一区",
          "小区块数",
          "折成基本区",
          /*"T5",
          "T6"*/
        ],
        proData: [
          18,
          19,
          0,
          22.75,
          /*178,
          407*/
        ],
        /*deskData: [
          123,
          2345,
          1234,
          4321,
          332,
          671
        ],
        comData: [
          321,
          3245,
          6321,
          2356,
          666,
          841
        ]*/
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