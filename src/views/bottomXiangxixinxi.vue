<template>
  <div class="bottom-charts" id="bottomXiangxixinxi">
    <div style="margin-top:10px">
      <div class="d-flex pt-2 pl-2">
                 <span style="color:#5cd9e8">
                      <icon name="chart-bar"></icon>
                 </span>
       <div class="d-flex">
          <span class="fs-xl text mx-2">经纬度信息</span>
        </div>
      </div>

      <dv-capsule-chart :config="config1" style="width:300px;height:200px;margin-left:10px" />
    </div>



  <div style="margin-top:10px">
     <div class="d-flex pt-2 pl-2">
                  <span style="color:#5cd9e8">
                       <icon name="chart-bar"></icon>
                  </span>
        <div class="d-flex">
         <span class="fs-xl text mx-2">申请人信息</span>
       </div>
      </div>
      <dv-scroll-board :config="config4" style="width:120px;height:160px;margin-left:10px;" />
    <dv-scroll-board :config="config5" style="width:350px;height:160px;margin-top:-160px;margin-left:120px;" />
  </div>

    <dv-decoration-2 :reverse="true" style="width:5px;height:250px;margin-left: 450px;margin-top:-420px" />

    <!--    5个彩色装饰-->
    <div >
      <div style="margin-top:-255px;margin-left:470px">
       <div class="d-flex pt-2 pl-2">
                     <span style="color:#5cd9e8">
                         <icon name="chart-bar"></icon>
                    </span>
         <div class="d-flex">
          <span class="fs-xl text mx-2">矿种</span>
         </div>
      </div>
        <dv-percent-pond :config="config6" style="width:200px;height:100px;" />
     </div>
     <div style="margin-top:0px;margin-left:470px">
       <div class="d-flex pt-2 pl-2">
                     <span style="color:#5cd9e8">
                          <icon name="chart-bar"></icon>
                    </span>
          <div class="d-flex">
           <span class="fs-xl text mx-2">项目性质</span>
         </div>
        </div>
       <dv-percent-pond :config="config7" style="width:200px;height:100px;" />
      </div>
    </div>

    <div style="margin-top:230px;margin-left:370px">
      <div style="margin-top:-484px;margin-left:330px">
        <div class="d-flex pt-2 pl-2">
                     <span style="color:#5cd9e8">
                         <icon name="chart-bar"></icon>
                    </span>
          <div class="d-flex">
            <span class="fs-xl text mx-2">经济类型</span>
          </div>
        </div>
        <dv-percent-pond :config="config8" style="width:200px;height:100px;" />
      </div>
      <div style="margin-top:0px;margin-left:330px">
        <div class="d-flex pt-2 pl-2">
                     <span style="color:#5cd9e8">
                          <icon name="chart-bar"></icon>
                    </span>
          <div class="d-flex">
            <span class="fs-xl text mx-2">项目类型</span>
          </div>
        </div>
        <dv-percent-pond :config="config9" style="width:200px;height:100px;" />
      </div>
    </div>

<!--    <div style="margin-top:-100px;margin-left:600px">

      <div  style="margin-top:-254px;margin-left:160px" class="d-flex pt-2 pl-2">
                     <span style="color:#5cd9e8">
                         <icon name="chart-bar"></icon>
                    </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2" >勘查阶段</span>
        </div>
      </div>
      <dv-water-level-pond :config="config" style="width:150px;height:200px;margin-top:10px;margin-left:168px" />
    </div>-->

    <dv-decoration-2 style="width:450px;height:20px;margin-top:15px;margin-left:480px" />

    <div style="margin-top:0px;margin-left:480px">
    <div   class="d-flex pt-2 pl-2">
                     <span style="color:#5cd9e8">
                         <icon name="chart-bar"></icon>
                    </span>
      <div class="d-flex">
        <span class="fs-xl text mx-2" >勘察单位</span>
      </div>
    </div>

    <dv-percent-pond :config="config2" style="width:450px;height:90px;margin-left:0px;margin-top:10px" />
    </div>

    </div>
<!---->

</template>

<script>
import centerRightLeftChart from "@/components/echart/centerRightNew/centerRightLeftChart";
import centerRightRightChart from "@/components/echart/centerRightNew/centerRightRightChart";
import centerRightBottomChart from "@/components/echart/centerRightNew/centerRightBottomChart";
const fullWidth = 300
const borderGap = 3
const borderWidth = 3
const usefulWidth = fullWidth - (borderGap + borderWidth) * 2

const pieceLength = [0.25, 0.5, 0.25]
const pieceGap = 3

const lineDash = pieceLength
    .map(l => [usefulWidth * (l-2), pieceGap])
    .reduce((all, current) => [...all, ...current], [])
export default {

  data() {
    return {
      config: {
        data: [58],
        shape: 'round',
        waveHeight:20,
        waveNum:2,
        waveOpacity:0.6,
        formatter:'预察'
      },
      config4:{
        data: [
          ['申请人'],
          ['申请人法人代表'],
          ['许可证号'],
          // ['项目档案号']
        ],
        oddRowBGC:'#0F1325',
        evenRowBGC:'#171C33',
        rowNum:3,

      },
      config5:{
        data: [
          ['黑河市经济合作区星河实业发展有限公司呼玛分公司'],
          ['李仰春'],
          ['T01120080402000447'],
          // ['0100000610538']
        ],
        oddRowBGC:'#0F1325',
        evenRowBGC:'#171C33',
        rowNum:3,
      },
      config6:{
        value: 89,
        localGradient: true,
        formatter:'饰面用石料(大理石)',
        colors: ['#E5323E', '#FF8B00'],
        lineDash: [10, 2]
      },
      config7:{
        value: 83,
        localGradient: true,
        formatter:'勘察基金项目',
        colors: ['#01D6B6', '#0279FD'],
        lineDash: [10, 2]
      },
      config8:{
        value: 95,
        localGradient: true,
        formatter:'其他有限责任公司',
        colors: ['#D5AA02', '#3CE6CA'],
        lineDash: [10, 2]
      },
      config9:{
        value: 79,
        localGradient: true,
        formatter:'新增',
        colors: ['#013AFE', '#6602FD'],
        lineDash: [10, 2]
      },
      config3: {
        data: [47],
        shape: 'roundRect',
        waveHeight:20,
        waveNum:2
      },
      config2: {
        value: 100,
        formatter:'中国建筑材料工业地质勘查中心黑龙江总队',
        colors: ['#c135ff', '#01c4f9'],
        lineDash
      },
      config1: {
        data: [
          {
            name: '经度起',
            value: 130.7666666
          },
          {
            name: '经度止',
            value: 130.9416666
          },
          {
            name: '纬度起',
            value: 47.7625
          },
          {
            name: '纬度止',
            value: 47.8833333
          }
        ],
        colors:['#6A5ACD', '#00BAFF', '#3DE7C9', '#FFFF00'],
        showValue:'True'
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