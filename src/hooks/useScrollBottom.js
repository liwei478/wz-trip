import { ref } from "vue"
import { onMounted, onUnmounted, onActivated, onDeactivated } from "vue"
import { throttle } from "underscore"

// 方式一：传入回调
// export default function useScroll(reachBottomCB) {
//   const scrollListenerHandler = () => {
//     const scrollTop = document.documentElement.scrollTop
//     const clientHeight = document.documentElement.clientHeight
//     const scrollHeight = document.documentElement.scrollHeight
//     if (scrollTop + clientHeight >= scrollHeight) {
//       console.log("滚动到底部啦")
//       reachBottomCB()
//     }
//   }

//   onMounted(() => {
//     window.addEventListener("scroll", scrollListenerHandler)
//   }),
//     onActivated(() => {
//       window.addEventListener("scroll", scrollListenerHandler)
//     })
//   onUnmounted(() => {
//     window.removeEventListener("scroll", scrollListenerHandler)
//   }),
//     onDeactivated(() => {
//       window.removeEventListener("scroll", scrollListenerHandler)
//     })
// }

// 方式二：设置变量
export default function useScroll(elRef) {
  let el = window

  const isReachBottom = ref(false)
  const scrollTop = ref(0)
  const clientHeight = ref(0)
  const scrollHeight = ref(0)

  const scrollListenerHandler = throttle(() => {
    if (el === window) {
      scrollTop.value = document.documentElement.scrollTop
      clientHeight.value = document.documentElement.clientHeight
      scrollHeight.value = document.documentElement.scrollHeight
    } else {
      clientHeight.value = el.clientHeight
      scrollTop.value = el.scrollTop
      scrollHeight.value = el.scrollHeight
    }

    if (scrollTop.value + clientHeight.value >= scrollHeight.value) {
      isReachBottom.value = true
    }
  }, 1000)

  onMounted(() => {
    if (elRef) el = elRef.value
    el.addEventListener("scroll", scrollListenerHandler)
  }),
    onActivated(() => {
      if (elRef) el = elRef.value
      el.addEventListener("scroll", scrollListenerHandler)
    })
  onUnmounted(() => {
    el.removeEventListener("scroll", scrollListenerHandler)
  }),
    onDeactivated(() => {
      el.removeEventListener("scroll", scrollListenerHandler)
    })

  return { scrollTop, clientHeight, scrollHeight, isReachBottom }
}
