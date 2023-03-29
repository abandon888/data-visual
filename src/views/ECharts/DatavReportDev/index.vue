<template>
  <el-card id="dataReportDev">
    <TopView />
    <SalseView />
    <BottomView />
    <MapView />
    <Demo />
  </el-card>
</template>

<script setup>
import TopView from './components/TopView/TopView.vue'
import SalseView from './components/SalseView/SalseView.vue'
import BottomView from './components/BottomView/BottomView.vue'
import MapView from './components/MapView/MapView.vue'
import Demo from './components/DemoView/demo.vue'
</script>

<style lang="scss" scoped>
#dataReportDev {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: auto;
}
</style>