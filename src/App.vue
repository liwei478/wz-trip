<template>
  <div class="app">
    <router-view></router-view>

    <tab-bar v-if="!route.meta.hiddenTab" />
    <loading />
    <!-- <tab-bar /> -->
  </div>
</template>

<script setup>
import { useRoute } from "vue-router"
import tabBar from "./components/tabbar/tab-bar.vue"
import Loading from "./components/loading/loading.vue"
const route = useRoute()
</script>

<style scoped></style>
