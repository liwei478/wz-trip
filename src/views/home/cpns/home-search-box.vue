<template>
  <div class="search-box">
    <!-- 位置信息 -->
    <div class="location bottom-gray-line">
      <span class="city" @click="cityClick">{{ currentCity.cityName }}</span>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>

    <!-- 日期范围 -->
    <div class="section date-range bottom-gray-line" @click="showCalendar = true">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ startDateStr }}</span>
        </div>
        <div class="stay">共{{ stayDay }}晚</div>
      </div>
      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">{{ endDateStr }}</span>
        </div>
      </div>
    </div>
    <van-calendar v-model:show="showCalendar" type="range" color="#ff9854" :round="false" :show-confirm="false" @confirm="onConfirm"></van-calendar>

    <!-- 人数/价格 -->
    <div class="section price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>

    <!-- 关键字 -->
    <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>

    <!-- 热门建议 -->
    <div class="section hot-suggests">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div
          class="item"
          :style="{
            color: item.tagText.color,
            background: item.tagText.background.color
          }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>

    <!-- 搜索按钮 -->
    <div class="section search-btn">
      <div class="btn" @click="searchBtnClick">开始搜索</div>
    </div>
  </div>
</template>

<script setup>
import { formatMonthDay, getDiffDays } from "@/utils/formatDate"
import { computed, ref } from "vue"
import useCityStore from "@/stores/city"
import useHomeStore from "@/stores/home"
import { storeToRefs } from "pinia"
import { useRouter } from "vue-router"
import { useMainStore } from "@/stores/main"

const router = useRouter()
// 位置/城市
const cityClick = () => {
  router.push("/city")
}
const positionClick = () => {
  navigator.geolocation.getCurrentPosition(
    res => {},
    err => {}
  )
}
// 获取当前城市
const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)

// 获取动态日期
const mainStore = useMainStore()
const { startDate, endDate } = storeToRefs(mainStore)
const startDateStr = computed(() => formatMonthDay(startDate.value))
const endDateStr = computed(() => formatMonthDay(endDate.value))
const stayDay = ref(getDiffDays(startDate.value, endDate.value))

const showCalendar = ref(false)
const onConfirm = value => {
  // 选择日期范围
  const selectStartDate = value[0]
  const selectEndDate = value[1]
  mainStore.startDate = selectStartDate
  mainStore.endDate = selectEndDate
  stayDay.value = getDiffDays(selectEndDate, selectStartDate)

  // 关闭弹窗
  showCalendar.value = false
}

// 获取热门城市建议
// defineProps({
//   hotSuggests: {
//     type: Array,
//     default: () => []
//   }
// })
const homeStore = useHomeStore()
const { hotSuggests } = storeToRefs(homeStore)

// 监听搜索按钮的点击
const searchBtnClick = () => {
  router.push({
    path: "/search",
    query: {
      startDate: formatMonthDay(startDate.value, "MM-DD"),
      endDate: formatMonthDay(endDate.value, "MM-DD"),
      address: currentCity.value.cityName,
      cityId: 45
    }
  })
}
</script>

<style lang="less" scoped>
.search-box {
  --van-calendar-popup-height: 100%;
}
.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {
    flex: 1;
  }
  .position {
    width: 74px;
    display: flex;
    align-items: center;

    .text {
      position: relative;
      top: 2px;
      font-size: 12px;
    }

    img {
      width: 18px;
      height: 18px;
      margin-left: 5px;
    }
  }
}

.section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;
  height: 44px;

  .start {
    flex: 1;
    display: flex;
    height: 44px;
    align-items: center;
  }

  .end {
    min-width: 30%;
    padding-left: 20px;
  }

  .date {
    display: flex;
    flex-direction: column;

    .tip {
      font-size: 12px;
      color: #999;
    }

    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
}

.date-range {
  .stay {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
  }
}

.price-counter {
  .start {
    border-right: 1px solid f8f9f9;
  }
}

.hot-suggests {
  margin: 10px 0;
  // 如果希望别的内容高度保持不变，而此块内容高度由内容自动撑开，可设置高度为auto
  height: auto;

  .item {
    font-size: 12px;
    padding: 4px 8px;
    margin: 3px;
    border-radius: 14px;
    color: #3f4954;
    background-color: #f1f3f5;
  }
}

.search-btn {
  .btn {
    width: 342px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: var(--theme-linear-gradient);
  }
}
</style>
