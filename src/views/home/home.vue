<template>
  <div class="home">
    <van-nav-bar title="宏源旅途"></van-nav-bar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <div class="location">
      <span class="city">广州</span>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
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
</style>
