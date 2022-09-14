<script setup>
import tabBar from "./components/tabbar/tab-bar.vue"
components: {
  tabBar
}
</script>

<template>
  <div class="app">
    <router-view></router-view>

    <tab-bar />
  </div>
</template>

<style scoped></style>
