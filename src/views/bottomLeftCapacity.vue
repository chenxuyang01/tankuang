<template>
  <div id="bottomLeftCapacity">
    <div class="up">

      <div >
        <br>

        <p class="ml-3 colorBlue fw-a" style="margin-top:0rem;margin-left: 0.2rem">{{"面积/km²"}}</p>
        <div>
          <dv-digital-flop :config="titleItem[1].number" style="width:1.5rem;height:0.625rem;margin-top:0rem;margin-left: 0.25rem" />
        </div>
        <p class="ml-3 colorBlue fw-a" style="margin-top:-0.8rem;margin-left: 2.4rem">{{"行政区"}}</p>
        <div>
          <dv-digital-flop :config="titleItem[2].number" style="width:1.5rem;height:0.625rem;margin-top:0rem;margin-left: 2.5rem" />
        </div>
      </div>




    </div>
    <template>
      <el-select v-model="value"   style="margin-left:0.15rem;width:5.6rem" placeholder="请选择矿种" @change="getKuangZhong(value)">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        >
        </el-option>
      </el-select>

    </template>
    <br><br>
    <div class="down">

      <div class="bg-color-black">
        <div class="d-flex jc-center body-box" style="width:5.65rem;height:4.35rem;margin-left:0.08rem" >
          <el-table
              :data="tableData"
              height="250"
              style="width: 100%"
              @row-click="setProject">
            <el-table-column
                prop="id"
                label="项目序号"
                width="100">
            </el-table-column>
            <el-table-column
                prop="name"
                label="项目名称"
                width="350">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>



import BottomChart from "@/components/echart/bottom/bottomLeftChart";
import bottomXiangxixinxi from "@/views/bottomXiangxixinxi";
import Qs from 'qs'
export default {
  data() {
    return {
      tableData:[
        {id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},
        {id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},
        {id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},
        {id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},
        {id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},
        {id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},
        {id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},
        {id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},
        {id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},
        {id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},{id:'',name:''},

      ],
      options: [
        {value: '11001', label: '煤'},
        {value: '11002', label: '油页岩'},
        {value: '17050', label: '地热'},
        {value: '22001', label: '铁矿'},
        {value: '22002', label: '锰矿'},
        {value: '22004', label: '钛矿'},
        {value: '32006', label: '铜矿'},
        {value: '32007', label: '铅矿'},
        {value: '32008', label: '锌矿'},
        {value: '32009', label: '铝土矿'},
        {value: '32012', label: '镍矿'},
        {value: '32014', label: '钨矿'},
        {value: '32015', label: '锡矿'},
        {value: '32017', label: '钼矿'},
        {value: '32019', label: '锑矿'},
        {value: '32020', label: '多金属'},
        {value: '42101', label: '铂矿'},
        {value: '42200', label: '砂金'},
        {value: '42201', label: '金矿'},
        {value: '42202', label: '银矿'},
        {value: '52401', label: '铍矿'},
        {value: '52500', label: '重稀土矿'},
        {value: '63200', label: '蓝晶石'},
        {value: '63210', label: '矽线石'},
        {value: '63220', label: '红柱石'},
        {value: '63701', label: '萤石(普通)'},
        {value: '63951', label: '冶金用石英岩'},
        {value: '64031', label: '冶金用脉石英'},
        {value: '73901', label: '电石用灰岩'},
        {value: '74080', label: '含钾岩石'},
        {value: '75690', label: '磷矿'},
        {value: '83010', label: '金刚石'},
        {value: '83020', label: '石墨'},
        {value: '83230', label: '硅灰石'},
        {value: '83330', label: '叶腊石'},
        {value: '83340', label: '透辉石'},
        {value: '83360', label: '沸石'},
        {value: '83620', label: '方解石'},
        {value: '83800', label: '玉石'},
        {value: '83900', label: '石灰岩'},
        {value: '83906', label: '水泥用石灰岩'},
        {value: '83940', label: '白云岩'},
        {value: '83950', label: '石英岩'},
        {value: '83972', label: '玻璃用砂岩'},
        {value: '83991', label: '玻璃用砂'},
        {value: '84110', label: '硅藻土'},
        {value: '84130', label: '页岩'},
        {value: '84131', label: '陶粒页岩'},
        {value: '84133', label: '水泥配料用页岩'},
        {value: '84150', label: '高岭土'},
        {value: '84170', label: '陶瓷土'},
        {value: '84290', label: '膨润土'},
        {value: '84533', label: '饰面用蛇纹岩'},
        {value: '84590', label: '安山岩'},
        {value: '84591', label: '饰面用安山岩'},
        {value: '84712', label: '饰面用花岗岩'},
        {value: '84730', label: '珍珠岩'},
        {value: '84790', label: '浮石'},
        {value: '84853', label: '建筑用石料(凝灰岩)'},
        {value: '84910', label: '大理岩'},
        {value: '84911', label: '饰面用石料(大理石)'},
        {value: '84913', label: '水泥用大理石'},
        {value: '85670', label: '硼矿'},
        {value: '97010', label: '矿泉水'},
        {value: '97030', label: '地下水'},
      ],
      value: '',
      projectid:'18230334',
      config: {

        header: ["申请序号", "项目名称"],
        data: [
          {key:"07233945", value:"黑龙江省绥芬河市建新矿村金刚石矿详查"},
          {key:"07233945", value:"黑龙江省绥芬河市建新矿村金刚石矿详查"},
        ],
        importantData: ["金矿","65.00","黑河市"],
        rowNum: 7, //表格行数
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
            number: [116.33],
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
    BottomChart,
    bottomXiangxixinxi
  },
  mounted() {},

  methods: {

    getKuangZhong(value) {
      const _this = this
      for(let i=0;i<_this.tableData.length;i++){
        _this.tableData[i].id =''
        _this.tableData[i].name =''
      }
      _this.$axios.get('http://192.168.1.222:8003/querybymintype?type='+value).then(function (resp) {
        for (let  i = 0; i < 158; i++) {
          _this.tableData[i].id = Qs.parse(resp.data)[i].申请序号
          _this.tableData[i].name = Qs.parse(resp.data)[i].项目名称
        }
      })
    },

    setProject(selection){
      const _this = this
      this.projectid=selection.id
      this.$axios.get('http://192.168.1.222:8003/findone?id='+this.projectid).then(function (resp) {
        // console.log("之前面积"+_this.titleItem[1].number.number[0])
        _this.titleItem[1].number.number[0]=Qs.parse(resp.data).总面积
        alert("面积"+_this.titleItem[1].number.number[0])
        bottomXiangxixinxi.config2.formatter=Qs.parse(resp.data).勘查单位
      })
    },

  },

  created(){
    const _this = this
    // console.log(this.projectid)
    // this.$axios.get('http://192.168.1.222:8003/findone?id='+this.projectid)


  },

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