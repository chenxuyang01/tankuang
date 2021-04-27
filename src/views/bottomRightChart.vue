<template>
  <div id="bottomRight">

    <div class="bc-height-chart-item" style="margin:0rem 0.22rem 0rem 0rem">
      <div class="d-flex pt-2 pl-2">
                <span style="color:#5cd9e8">
                    <icon name="chart-bar"></icon>
                </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">区块金额</span>
        </div>
      </div>
      <centerRightBottomChart/>

    </div>

  </div>

</template>

<script>
import LabelTag from './LabelTag'
import centerRightBottomChart from "@/components/echart/centerRightNew/centerRightBottomChart";
import centerRightLeftChart from "_c/echart/centerRightNew/centerRightLeftChart/index";
import centerRightRightChart from "_c/echart/centerRightNew/centerRightRightChart/index";

export default {
  components: {
    centerRightLeftChart,
    centerRightRightChart,
    centerRightBottomChart
  },
  name: 'BottomCharts',

  mounted() {},
  methods: {}
}
</script>

<style lang="scss">
#bottomRight {
  padding: 0.2rem 0.2rem 0;
  height: 5.5rem;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  .bottom-charts {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;

    .bc-chart-item {
      width: 20%;
      height: 100%;
      padding-top: 0.3rem;
      box-sizing: border-box;
    }

    .bcci-header {
      height: 0.75rem;
      text-align: center;
      line-height: 0.75rem;
      font-size: 0.3rem;
    }

    .dv-active-ring-chart {
      height: 65%;
    }

    .label-tag {
      height: 0.45rem;
    }

    .active-ring-name {
      font-size: 0.20rem !important;
    }

    .decoration-1, .decoration-2, .decoration-3, .decoration-4 {
      display: absolute;
      left: 0%;
    }
  }
}
</style>
