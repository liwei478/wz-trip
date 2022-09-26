<template>
  <div class="rules-area">
    <detail-area title="预订须知">
      <div class="notice-inner">
        <template v-for="(item, index) in rules.orderRules" :key="index">
          <div class="item">
            <span class="title">{{ item.title }}</span>
            <span class="intro">{{ item.introduction }}</span>
            <span class="tip" v-if="item.tips">查看说明</span>
          </div>
        </template>
      </div>
    </detail-area>
  </div>
</template>

<script setup>
import DetailArea from "@/components/detail-area/detail-area.vue"
defineProps({
  rules: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.notice-inner {
  .item {
    position: relative;
    padding: 10px;

    .tip {
      position: absolute;
      right: 10px;
      font-weight: 700;
    }
  }
}
</style>
