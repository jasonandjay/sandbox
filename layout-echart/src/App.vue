<template>
  <div>
    <grid-layout
      :layout.sync="layout"
      :col-num="12"
      :row-height="33"
      :is-draggable="true"
      :is-resizable="true"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transforms="true"
    >
      <grid-item
        v-for="item in layout"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.i"
      >
        <component v-if="item.component" :is="item.component"></component>
        <span v-else>{{ item.i }}</span>
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
import VueGridLayout from "vue-grid-layout";
// 引入图表组件
import Chart1 from './components/Chart1.vue'
import Chart2 from './components/Chart2.vue'
import Chart3 from './components/Chart3.vue'
import Chart4 from './components/Chart4.vue'
import Chart5 from './components/Chart5.vue'
import Chart6 from './components/Chart6.vue'
import Chart7 from './components/Chart7.vue'
import Chart8 from './components/Chart8.vue'
import Chart9 from './components/Chart9.vue'



export default {
  name: "App",
  data() {
    return {
      layout: [
        { x: 0, y: 0, w: 4, h: 5, i: "0", component: Chart1 },
        { x: 4, y: 0, w: 4, h: 5, i: "1", component: Chart2 },
        { x: 8, y: 0, w: 4, h: 5, i: "2", component: Chart3 },
        { x: 0, y: 5, w: 4, h: 5, i: "3", component: Chart4 },
        { x: 4, y: 5, w: 4, h: 5, i: "4", component: Chart5 },
        { x: 8, y: 5, w: 4, h: 5, i: "5", component: Chart6 },
        { x: 0, y: 10, w: 12, h: 25, i: "6", component: Chart7 },
        { x: 0, y: 35, w: 12, h: 25, i: "7", component: Chart8 },
        { x: 0, y: 55, w: 12, h: 25, i: "8", component: Chart9 },
      ],
    };
  },
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    Chart1,
    Chart2,
    Chart3,
    Chart4,
    Chart5,
    Chart6,
    Chart7,
    Chart8,
    Chart9
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.vue-grid-item{
  background: #eee;
  border: 1px solid #ccc;
  box-sizing: border-box;
  &>div{
    width: 100%;
    height: 100%;
  }
}
</style>
