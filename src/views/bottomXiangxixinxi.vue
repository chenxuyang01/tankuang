<template>
  <div class="bottom-charts" id="bottomXiangxixinxi">
<!--    <div>
    <dv-decoration-9 class="decoration-1" dur="20" style="width:170px;height:170px;margin-top: 10px">11</dv-decoration-9>
    <dv-decoration-9 class="decoration-2" dur="20" style="width:170px;height:170px;padding-top: 10px">11</dv-decoration-9>
  </div>-->


<!--    <div style="margin-top: 15px;margin-left: 15px">
        <p class="ml-1 colorBlue fw-a" style="margin-top:10px" >{{"经济类型"}}</p>
        <dv-digital-flop :config="xiangXiXinXi[0].number" style="width:120px;height:30px;" />
    </div >
    <div style="margin-top: -44px;margin-left:180px">
      <p class="ml-1 colorBlue fw-a"  >{{"项目类型"}}</p>
      <dv-digital-flop :config="xiangXiXinXi[1].number" style="width:120px;height:30px;" />
    </div>
    <div style="margin-top: -44px;margin-left:345px">
      <p class="ml-1 colorBlue fw-a"  >{{"项目性质"}}</p>
      <dv-digital-flop :config="xiangXiXinXi[2].number" style="width:120px;height:30px;" />
    </div>
    <div style="margin-top: -44px;margin-left:510px">
      <p class="ml-1 colorBlue fw-a"  >{{"勘查阶段"}}</p>
      <dv-digital-flop :config="xiangXiXinXi[3].number" style="width:120px;height:30px;" />
    </div>-->

  </div>
</template>

<script>
import centerRightLeftChart from "@/components/echart/centerRightNew/centerRightLeftChart";
import centerRightRightChart from "@/components/echart/centerRightNew/centerRightRightChart";
import centerRightBottomChart from "@/components/echart/centerRightNew/centerRightBottomChart";
export default {

  data() {
    return {
      config: {

      },
      config1: {
          data: [

          ]
      },
      xiangXiXinXi:[
        {
          title: "经济类型",
          number: {
            number: [],
            toFixed: 0,
            content: "国有全资{nt}"
          }
        },
        {
          title: "项目类型",
          number: {
            number: [],
            toFixed: 0,
            content: "新增{nt}"
          }
        },
        {
          title: "项目性质",
          number: {
            number: [],
            toFixed: 0,
            content: "勘查基金项目{nt}"
          }
        },
        {
          title: "勘察阶段",
          number: {
            number: [],
            toFixed: 0,
            content: "预查{nt}"
          }
        }
      ]
    };
  },
  components: {
      centerRightLeftChart,
      centerRightRightChart,
      centerRightBottomChart
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
#centerRightPillars {
  padding: 0.0625rem;
  height: 6.125rem;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-color-black {
    padding: 0.0625rem;
    height: 6.125rem;
    border-radius: 0.125rem;
  }
  .text {
    color: #c3cbde;
  }
  .body-box {
    border-radius: 0.125rem;
    overflow: hidden;
  }

  .bc-height-chart-item {
      width: 100%;
      height: 45%;
      padding-top: 0px;
      box-sizing: border-box;
      .center-charts {
        width: 100%;
        height: 100%;
        display: flex;
        position: relative;
        .bc-width-chart-item-top {
            width:50%;
            height:100%;
            padding-top: 0px;
            box-sizing: border-box;
        }
      }
  }
}
</style>