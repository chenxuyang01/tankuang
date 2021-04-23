<template>
  <div id="bottomLeftCapacity">
    <div class="up">

<!--      <div class="item bg-color-black" v-for="item in titleItem" :key="item.title">
          <p class="ml-3 colorBlue fw-a">{{item.title}}</p>
          <div>
          <dv-digital-flop :config="item.number" style="width:1.5rem;height:0.625rem;" />

          </div>
      </div>-->
       <div >
         <br>
        <!--<p class="ml-3 colorBlue fw-a" style="top:10px" >{{"矿种"}}</p>
        <div>
          <dv-digital-flop :config="titleItem[0].number" style="width:1.5rem;height:0.625rem;" />
        </div>-->
      <p class="ml-3 colorBlue fw-a" style="margin-top:-0px;margin-left: 20px">{{"面积/km²"}}</p>
      <div>
        <dv-digital-flop :config="titleItem[1].number" style="width:1.5rem;height:0.625rem;margin-top:0px;margin-left: 20px" />
      </div>
         <p class="ml-3 colorBlue fw-a" style="margin-top:-64px;margin-left: 200px">{{"行政区"}}</p>
         <div>
           <dv-digital-flop :config="titleItem[2].number" style="width:1.5rem;height:0.625rem;margin-top:0px;margin-left: 200px" />
         </div>
       </div>




    </div>
    <template>
      <el-select v-model="value"   style="margin-left:10px;width:450px" placeholder="请选择矿种">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>

    </template>
    <br><br>
    <div class="down">

      <div class="bg-color-black">
        <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="chart-line"></icon>
        </span>
          <div class="d-flex">
            <span class="fs-xl text mx-2">项目列表</span>
          </div>
        </div>
        <div class="d-flex jc-center body-box">
          <dv-scroll-board :config="config" style="width:440px;height:310px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BottomChart from "@/components/echart/bottom/bottomLeftChart";
export default {
  data() {
    return {
      options: [{
        value: '11001',
        label: '金矿'
      }, {
        value: '97010',
        label: '铜矿'
      }, {
        value: '42201',
        label: '铅矿'
      }, {
        value: '17050',
        label: '氢气矿'
      },],
      value: '',
      config: {

        header: ["申请序号", "项目名称"],
        data: [
          ["07233945", "黑龙江省绥芬河市建新矿村金刚石矿详查"],
          ["14230678", "黑龙江省伊春市红山地区钼多金属矿预查"],
          ["12230012", "黑龙江省阿城市王家岗子地热普查"],
          ["14230944", "黑龙江省铁力市二股东山铁矿外围铁多金属矿详查"],
          ["15010199", "黑龙江省黑河市老爷岭金多金属矿详查"],
          ["13230474", "黑龙江省尚志市大泥河中游金多金属矿普查"],
          ["18230129", "黑龙江省庆安县依通河林场银多金属矿普查"],
          ["17230136", "黑龙江省萝北县延军第一林场石墨矿普查"],
          ["19230009", "黑龙江省七台河市向阳村铜多金属矿普查"],
          ["15230247", "黑龙江省东宁县金厂矿区及外围岩金详查"]
        ],
        importantData: ["金矿","65.00","黑河市"],
        rowNum: 6, //表格行数
        headerHeight: 35,
        headerBGC: "#0f1325", //表头
        oddRowBGC: "#0f1325", //奇数行
        evenRowBGC: "#171c33", //偶数行
        index: true,
        columnWidth: [20],
        align: ["center"]
      },
        titleItem: [
            {
            title: "矿种",
            number: {
                number: [],
                toFixed: 0,
                content: "建筑用石料"
            }
            },
            {
            title: "面积",
            number: {
                number: [39.79],
                toFixed: 2,
                content: ""
            }
            },
            {
            title: "行政区",
            number: {
                number: [],
                toFixed: 1,
                content: "东宁市"
            }
            },
        ],
      // 通过率和达标率的组件复用数据
      rate: [
        {
          id: "centerRate1",
          tips: 60,
          colorData: {
            textStyle: "#3fc0fb",
            series: {
              color: ["#00bcd44a", "transparent"],
              dataColor: {
                normal: "#03a9f4",
                shadowColor: "#97e2f5"
              }
            }
          }
        },
        {
          id: "centerRate2",
          tips: 40,
          colorData: {
            textStyle: "#67e0e3",
            series: {
              color: ["#faf3a378", "transparent"],
              dataColor: {
                normal: "#ff9800",
                shadowColor: "#fcebad"
              }
            }
          }
        }
      ]
    };
  },
  components: {
      BottomChart
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
#bottomLeft {
  padding: 0.2rem 0rem;
  height: 5.5rem;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  .up {
    padding: 0rem 0.2rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .item {
      border-radius: 0.0625rem;
      padding-top: 0.1rem;
      margin-top: 0.1rem;
      width: 32%;
      height: 0.875rem;
    }
  }
  .down {
    padding: 0.1rem 0.2rem;
    padding-bottom: 0;
    width: 100%;
    display: flex;
    height: 3.1875rem;
    justify-content: space-between;
    .bg-color-black {
      border-radius: 0.0625rem;
    }
    .ranking {
      padding: 0.125rem;
      width: 59%;
    }
    .percent {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 33%;
        height: 1.5rem;
        span {
          margin-top: 0.0875rem;
          display: flex;
          justify-content: center;
        }
      }
    }
  }
}
</style>