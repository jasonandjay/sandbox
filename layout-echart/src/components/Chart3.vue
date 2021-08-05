<template>
  <div id="chart3">111</div>
</template>

<script>
// echart使用三个步骤
import Highcharts from "highcharts";

export default {
  mounted() {
    setTimeout(() => {
      Highcharts.setOptions({
        global: {
          useUTC: false,
        },
      });
      function activeLastPointToolip(chart) {
        var points = chart.series[0].points;
        chart.tooltip.refresh(points[points.length - 1]);
      }
      // 实例化highchart
      var chart = Highcharts.chart("chart3", {
        chart: {
          type: "spline",
          marginRight: 10,
          events: {
            load: function () {
              var series = this.series[0],
                chart = this;
              activeLastPointToolip(chart);
              setInterval(function () {
                var x = new Date().getTime(), // 当前时间
                  y = Math.random(); // 随机值
                series.addPoint([x, y], true, true);
                activeLastPointToolip(chart);
              }, 1000);
            },
          },
        },
        title: {
          text: "动态模拟实时数据",
        },
        xAxis: {
          type: "datetime",
          tickPixelInterval: 150,
        },
        yAxis: {
          title: {
            text: null,
          },
        },
        tooltip: {
          formatter: function () {
            return (
              "<b>" +
              this.series.name +
              "</b><br/>" +
              Highcharts.dateFormat("%Y-%m-%d %H:%M:%S", this.x) +
              "<br/>" +
              Highcharts.numberFormat(this.y, 2)
            );
          },
        },
        legend: {
          enabled: true,
        },
        series: [
          {
            name: "随机数据",
            data: (function () {
              // 生成随机值
              var data = [],
                time = new Date().getTime(),
                i;
              for (i = -19; i <= 0; i += 1) {
                data.push({
                  x: time + i * 1000,
                  y: Math.random(),
                });
              }
              return data;
            })(),
          },
        ],
      });
    }, 1000);
  },
};
</script>

<style>
</style>