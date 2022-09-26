<template>
  <div class="detail top-page" ref="detailRef">
    <tab-control v-if="showTabControl" class="tabs" :titles="names" @tabItemClick="tabClick" />
    <van-nav-bar title="房屋详情" left-text="旅途" left-arrow @click-left="onClickLeft" />
    <div class="main" v-if="detailInfos?.mainPart?.topModule?.housePicture?.housePics" v-memo="[detailInfos]">
      <detail-swiper />
      <detail-infos name="描述" :ref="getSectionRef" :top-infos="detailInfos?.mainPart?.topModule" />
      <detail-facility name="设施" :ref="getSectionRef" :house-facility="detailInfos.mainPart.dynamicModule.facilityModule.houseFacility" />
      <detail-landlord name="房东" :ref="getSectionRef" :landlord="detailInfos.mainPart.dynamicModule.landlordModule" />
      <detail-comment name="评论" :ref="getSectionRef" :comment="detailInfos.mainPart.dynamicModule.commentModule" />
      <detail-notice name="须知" :ref="getSectionRef" :rules="detailInfos.mainPart.dynamicModule.rulesModule" />
      <detail-map name="地图" :ref="getSectionRef" :position="detailInfos.mainPart.dynamicModule.positionModule" />
      <detail-intro :price-intro="detailInfos.mainPart.introductionModule" />
      <div class="footer">
        <img src="@/assets/img/detail/icon_ensure.png" alt="" />
        <div class="text">弘源旅途, 永无止境!</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useDetailStore from "@/stores/detail"
import { storeToRefs } from "pinia"
import { useRoute, useRouter } from "vue-router"
import DetailSwiper from "./cpns/detail_01-swiper.vue"
import DetailInfos from "./cpns/detail_02-infos.vue"
import DetailFacility from "./cpns/detail_03-facility.vue"
import DetailLandlord from "./cpns/detail_04-landlord.vue"
import DetailComment from "./cpns/detail_05-comment.vue"
import DetailNotice from "./cpns/detail_06-notice.vue"
import DetailMap from "./cpns/detail_07-map.vue"
import DetailIntro from "./cpns/detail_08-intro.vue"
import TabControl from "@/components/tab-control/tab-control.vue"
import { computed, ref } from "vue"
import useScroll from "@/hooks/useScrollBottom"

const route = useRoute()
const router = useRouter()
const onClickLeft = () => {
  router.back()
}

// 请求房屋详情数据
const detailStore = useDetailStore()
detailStore.fetchDetailInfos(route.params.id)
const { detailInfos } = storeToRefs(detailStore)

// tabControl相关的操作
const detailRef = ref()
const { scrollTop } = useScroll(detailRef)
const showTabControl = computed(() => {
  return scrollTop.value >= 300
})

// const landlordRef = ref()
// const sectionEls = []
// const getSectionRef = value => {
//   sectionEls.push(value.$el)
// }

const sectionEls = ref({})
const names = computed(() => {
  return Object.keys(sectionEls.value)
})
const getSectionRef = value => {
  const name = value.$el.getAttribute("name")

  sectionEls.value[name] = value.$el
}

const tabClick = index => {
  const key = Object.keys(sectionEls.value)[index]
  const el = sectionEls.value[key]
  let instance = el.offsetTop
  if (index !== 0) instance = instance - 44

  detailRef.value.scrollTo({
    top: instance,
    behavior: "smooth"
  })
}
</script>

<style lang="less" scoped>
.tabs {
  position: fixed;
  z-index: 9;
  left: 0;
  right: 0;
  top: 0;
  background-color: #fff;
}
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;

  img {
    width: 123px;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>
