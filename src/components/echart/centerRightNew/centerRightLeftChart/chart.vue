<template>
  <div>
    <Echart
        :options="options"
        id="centerRightLeftChart"
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
          color: ['#ffe600', '#006699', '#4cabce'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          /*legend: {
              data: ['全球数1', '全球数2', '全球数3']
          },*/
          grid: {
            left: "6%",
            right: "4%",
            bottom: "0%",
            containLabel: true,
          },
          xAxis: [
            {
              type: 'category',
              data: newData.category,
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '万元'
            }
          ],
          series: [
            {
              name: '金额',
              type: 'bar',
              // animationCurve: 'easeOutBack',
              shapeType:'normal',
              data: newData.deskData,

              lineArea: {
                show: true,
                gradient: ['rgba(251, 114, 147, 0.6)', 'rgba(251, 114, 147, 0)']
              },
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