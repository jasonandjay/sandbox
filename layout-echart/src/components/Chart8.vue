<template> 
    <div id="chart8"></div>
</template>

<script>
import * as echarts from "echarts";
import world from "../assets/world";
echarts.registerMap("world", world);

export default {
  watch: {
    wh() {
      this.chart.resize();
    },
  },
  methods: {
    renderChart() {
      // 1. 初始化echart实例
      this.chart = echarts.init(document.getElementById("chart8"));
    function randomData() {
        return Math.round(Math.random() * 500);
      }
      const mydata = [
        { name: "China", value: "100" },
        { name: "United States", value: randomData() },
        { name: "Russia", value: randomData() },
        { name: "Canada", value: randomData() },
        { name: "Australia", value: randomData() },
        { name: "India", value: randomData() },
        { name: "Japan", value: randomData() },
        { name: "Korea", value: randomData() },
        { name: "France", value: randomData() },
        { name: "Argentina", value: randomData() },
        { name: "Brazil", value: randomData() },
        { name: "山东", value: randomData() },
        { name: "Italy", value: randomData() },
        { name: "United Kingdom", value: randomData() }
      ];
      // 2. 配置option
      const option = {
        //左侧小导航图标
        visualMap: {
          show: true,
          x: "left",
          y: "center",
          splitList: [
            { start: 500, end: 600 },
            { start: 400, end: 500 },
            { start: 300, end: 400 },
            { start: 200, end: 300 },
            { start: 100, end: 200 },
            { start: 0, end: 100 },
          ],
          color: [
            "#5475f5",
            "#9feaa5",
            "#85daef",
            "#74e2ca",
            "#e6ac53",
            "#9fb5ea",
          ],
        },
        series: [
          {
            name: "数据",
            label: {
              normal: {
                show: true, //省份名称
              },
              emphasis: {
                show: false,
              },
            },
            type: "map",
            mapType: "world",
            data: mydata,
          },
        ],
      };
      // 3. 更新echart
      this.chart.setOption(option);
    },
  },
  mounted() {
    setTimeout(() => {
      this.renderChart();
    });
  },
};
</script>

<style></style>
