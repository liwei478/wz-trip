<template>
  <div class="home">
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

<script setup>
import useHomeStore from "@/stores/home"
import { storeToRefs } from "pinia"
import HomeSearchBox from "./cpns/home-search-box.vue"
import HomeCategories from "./cpns/home-categories.vue"
import HomeContent from "./cpns/home-content.vue"
import SearchBar from "../../components/search-box/search-box.vue"
import { onMounted, onUnmounted, onActivated, onDeactivated, watch, ref, computed } from "vue"
import useScroll from "@/hooks/useScrollBottom"
import SearchBox from "../../components/search-box/search-box.vue"

const homeStore = useHomeStore()
homeStore.fetchHotSuggests()
homeStore.fetchCategories()
homeStore.fetchHouselist()

// const moreBtnClick = () => {
//   homeStore.fetchHouselist()
// }

// 监听window窗口的变化
// 1. 当我们离开页面时，需要移除监听
// 2. 如果别的页面也需要进行类似的监听，会编写重复的代码
// const scrollListenerHandler = () => {
//   const scrollTop = document.documentElement.scrollTop
//   const clientHeight = document.documentElement.clientHeight
//   const scrollHeight = document.documentElement.scrollHeight
//   if (scrollTop + clientHeight >= scrollHeight) {
//     homeStore.fetchHouselist()
//   }
// }

// onMounted(() => {
//   window.addEventListener("scroll", scrollListenerHandler)
// }),
//   onActivated(() => {
//     window.addEventListener("scroll", scrollListenerHandler)
//   })
// onUnmounted(() => {
//   window.removeEventListener("scroll", scrollListenerHandler)
// }),
//   onDeactivated(() => {
//     window.removeEventListener("scroll", scrollListenerHandler)
//   })

// 方式一：传入回调
// useScroll(() => {
//   homeStore.fetchHouselist()
// })

// 方式二：watch监听
const { scrollTop, isReachBottom } = useScroll()
watch(isReachBottom, newVal => {
  if (newVal) {
    homeStore.fetchHouselist().then(() => {
      isReachBottom.value = false
    })
  }
})

// 搜索框内容的展示
// const isShowSearchBox = ref(false)
// watch(scrollTop, newVal => {
//   return (isShowSearchBox.value = newVal >= 100)
// })
// 定义的可响应式数据，依赖另一个可响应式数据，那么我们可以使用计算属性(computed)
const isShowSearchBox = computed(() => scrollTop.value >= 100)
</script>

<style lang="less" scoped>
.home {
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
