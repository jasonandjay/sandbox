<template>
  <div id="chart2">111</div>
</template>

<script>
// echart使用三个步骤
import * as echarts from "echarts";

export default {
  mounted() {
    // 2. 配置图表选项
    const option = {
      legend: {},
      tooltip: {
        trigger: "axis",
        showContent: false,
      },
      dataset: {
        source: [
          ["product", "2012", "2013", "2014", "2015", "2016", "2017"],
          ["Milk Tea", 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
          ["Matcha Latte", 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
          ["Cheese Cocoa", 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
          ["Walnut Brownie", 25.2, 37.1, 41.2, 18, 33.9, 49.1],
        ],
      },
      xAxis: { type: "category" },
      yAxis: { gridIndex: 0 },
      grid: { top: "55%" },
      series: [
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "pie",
          id: "pie",
          radius: "30%",
          center: ["50%", "25%"],
          emphasis: { focus: "data" },
          label: {
            formatter: "{b}: {@2012} ({d}%)",
          },
          encode: {
            itemName: "product",
            value: "2012",
            tooltip: "2012",
          },
        },
      ],
    };

    console.log("myChart...", this.myChart);

    setTimeout(() => {
      // 1. 实例化echart实例
      this.myChart = echarts.init(document.getElementById("chart2"), null, {
        renderer: "svg",
      });

      this.myChart.on("updateAxisPointer", function (event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
          var dimension = xAxisInfo.value + 1;
          myChart.setOption({
            series: {
              id: "pie",
              label: {
                formatter: "{b}: {@[" + dimension + "]} ({d}%)",
              },
              encode: {
                value: dimension,
                tooltip: dimension,
              },
            },
          });
        }
      });

      // 3. 应用配置
      this.myChart.setOption(option);
    }, 1000);
  },
};
</script>

<style>
</style>