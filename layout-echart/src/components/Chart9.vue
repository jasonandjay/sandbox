<template>
  <div id="chart9"></div>
</template>

<script>
import * as echarts from "echarts";
import { pinyin } from 'pinyin-pro';
import world from "../assets/world";
echarts.registerMap("world", world);

export default {
    data(){
        return {
            cityMap: {}
        }
    },
  methods: {
    renderChart(mapType='world') {
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
        { name: "United Kingdom", value: randomData() },
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
            name: mapType,
            label: {
              normal: {
                show: true, //省份名称
              },
              emphasis: {
                show: false,
              },
            },
            type: "map",
            mapType: mapType,
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
      // 1. 初始化echart实例
      this.chart = echarts.init(document.getElementById("chart9"));
      
      this.renderChart();

      // 4. 添加点击事件
      this.chart.on("click", (...params) => {
        let {name, seriesName} = params[0];
        console.log("params...", params, seriesName, name);
        if (seriesName === 'world'){
            fetch(`/assets/world/geoJson/${name}.json`).then(res=>res.json())
            .then(res=>{
                console.log("res...", res);
                echarts.registerMap(name, res);
                this.renderChart(name);
            })   
        }else if(seriesName === 'China'){
            name = pinyin(name, { toneType: 'none' }).replace(/\W/ig, ''); 
            console.log("params...", params, seriesName, name);
            fetch(`/assets/china-province/geoJson/${name}.json`).then(res=>res.json())
            .then(res=>{
                console.log("res...", res);
                let cityMap = {};
                res.features.forEach(item=>{
                    cityMap[item.properties.name] = item.id;
                })
                this.cityMap = cityMap;
                echarts.registerMap(name, res);
                this.renderChart(name);
            }) 
        }else if(/[市区]/.test(name) && !/[市区]/.test(seriesName)){
            console.log(this.cityMap)
            try{
                fetch(`/assets/china-city/geoJson/${this.cityMap[name]}.json`).then(res=>res.json())
                .then(res=>{
                    console.log("res...", res);
                    echarts.registerMap(name, res);
                    this.renderChart(name);
                }) 
            }catch(e){
                this.renderChart();
            }
        }else{
            this.renderChart();
        }
      });
    });
  },
};
</script>

<style></style>
