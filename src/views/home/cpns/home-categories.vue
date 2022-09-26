<template>
  <div class="categories">
    <template v-for="item in categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="" />
        <div class="text">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import useHomeStore from "@/stores/home"
import { storeToRefs } from "pinia"

const homeStore = useHomeStore()
const { categories } = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
.categories {
  display: flex;
  // 只希望水平方向可以滚动
  // 为啥这个模块设置垂直方向不可以滚动后，其他页面也会受到影响？？？？？？？？？
  overflow-y: auto;
  height: 80px;
  margin-top: 8px;
  padding: 0 10px;
  &::-webkit-scrollbar {
    display: none;
  }

  .item {
    width: 70px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    text-align: center;

    img {
      width: 32px;
      height: 32px;
    }

    .text {
      font-size: 12px;
      margin-top: 8px;
    }
  }
}
</style>
