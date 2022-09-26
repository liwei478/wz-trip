<template>
  <div class="swiper">
    <div class="main">
      <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
        <template v-for="(item, index) in swipeData">
          <van-swipe-item class="item">
            <img :src="item.url" alt="" />
          </van-swipe-item>
        </template>

        <!-- 自定义指示器 -->
        <template #indicator="{ active, total }">
          <div class="indicator">
            <template v-for="(value, key, index) in swipeGroup" :key="key">
              <span class="item" :class="{ active: swipeData[active]?.enumPictureCategory == key }">
                <span class="text">{{ getName(value[0].title) }}</span>
                <span class="count" v-if="swipeData[active]?.enumPictureCategory == key"> {{ getCategoryIndex(swipeData[active]) }}/{{ value.length }} </span>
              </span>
            </template>
          </div>
        </template>
      </van-swipe>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"
import useDetailStore from "@/stores/detail"
import { storeToRefs } from "pinia"
const detailStore = useDetailStore()
const { detailInfos } = storeToRefs(detailStore)
const mainPart = computed(() => detailInfos.value.mainPart)
const swipeData = computed(() => mainPart?.value?.topModule?.housePicture?.housePics)

// 对数据进行转换
const swipeGroup = {}
if (swipeData.value) {
  for (const item of swipeData.value) {
    let valueArray = swipeGroup[item.enumPictureCategory]
    if (!valueArray) {
      valueArray = []
      swipeGroup[item.enumPictureCategory] = valueArray
    }
    valueArray.push(item)
  }
}

// 定义转化数据的方法
const getName = name => {
  // 简单粗暴的方法
  // return name.replace("：", "").replace("】", "").replace("【", "")
  // 正则表达式
  const nameReg = /【(.*?)】/i
  const results = nameReg.exec(name)
  return results[1]
}
const getCategoryIndex = item => {
  const valueArray = swipeGroup[item.enumPictureCategory]
  return valueArray.findIndex(data => data === item) + 1
}
</script>

<style lang="less" scoped>
.swiper {
  .swipe-list {
    .item {
      img {
        width: 100%;
      }
    }
  }

  .indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    color: #fff;
    background: #000;

    display: flex;

    .item {
      margin: 0 3px;
    }

    .active {
      padding: 0 3px;
      border-radius: 5px;
      color: #333;
      background-color: #fff;
    }
  }
}
</style>
