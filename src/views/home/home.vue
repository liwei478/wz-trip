<template>
  <div class="home" ref="homeRef">
    <van-nav-bar title="宏源旅途"></van-nav-bar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>

    <home-search-box />
    <home-categories />

    <div class="search-box-bar" v-if="isShowSearchBox">
      <search-bar />
    </div>
    <home-content />
    <!-- <button @click="moreBtnClick">加载更多</button> -->
  </div>
</template>

<script setup name="home">
import useHomeStore from "@/stores/home"
import { storeToRefs } from "pinia"
import HomeSearchBox from "./cpns/home-search-box.vue"
import HomeCategories from "./cpns/home-categories.vue"
import HomeContent from "./cpns/home-content.vue"
import SearchBar from "../../components/search-box/search-box.vue"
import { onActivated, watch, ref } from "vue"
import { computed } from "@vue/reactivity"
import useScroll from "@/hooks/useScrollBottom"
import SearchBox from "../../components/search-box/search-box.vue"

const homeStore = useHomeStore()
homeStore.fetchHotSuggests()
homeStore.fetchCategories()
homeStore.fetchHouselist()

const homeRef = ref()
const { scrollTop, isReachBottom } = useScroll(homeRef)
watch(isReachBottom, newVal => {
  if (newVal) {
    homeStore.fetchHouselist().then(() => {
      isReachBottom.value = false
    })
  }
})

// 定义的可响应式数据，依赖另一个可响应式数据，那么我们可以使用计算属性(computed)
const isShowSearchBox = computed(() => scrollTop.value >= 100)
// 跳转回home时, 保留原来的位置
onActivated(() => {
  homeRef.value?.scrollTo({
    top: scrollTop.value
  })
})
</script>

<style lang="less" scoped>
.home {
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  padding-bottom: 50px;
}
.banner {
  img {
    width: 100%;
  }
}
.search-box-bar {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background: #fff;
}
</style>
