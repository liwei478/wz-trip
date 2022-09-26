<template>
  <div class="app">
    <router-view v-slot="props">
      <keep-alive include="home">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>
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
