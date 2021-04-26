<template>
  <div>
    <Echart
        :options="options"
        id="centerRightRightChart"
        height="350px"
        width="100%"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'
export default {
  data () {
    return {
      options: {},
    };
  },
  components: {
    Echart,
  },
  props: {
    cdata: {
      type: Object,
      default: () => ({})
    },
  },
  watch: {
    cdata: {
      handler (newData) {
        this.options = {
          color: ['#1d953f', '#006699', '#4cabce'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          // legend: {
          //     data: ['TEST1', 'TEST2', 'TEST3']
          // },
          grid: {
            left: '3%',
            right: '8%',
            bottom: '0%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            name: '万元'
          },
          yAxis: {
            type: 'category',
            data: newData.category
          },
          series: [
            {
              name: '金额',
              type: 'bar',
              // animationCurve: 'easeOutBack',
              lineArea: {
                show: true,
                gradient: ['rgba(251, 114, 147, 0.6)', 'rgba(251, 114, 147, 0)']
              },
              gradient: {
                color: ['#37a2da', '#67e0e3']
              },
              stack: '总量',

              data: newData.proData,
              radius: '60%',


            },

          ]
        };
      },
      immediate: true,
      deep: true
    },
  },
}
</script>

<style lang="scss" scoped>
</style>