import { getHomeHotSuggests, getHomeCategories, getHouselist } from "@/services"
import { defineStore } from "pinia"

const useHomeStore = defineStore("hotSuggests", {
  state: () => ({
    hotSuggests: [],
    categories: [],

    currentPage: 1,
    houselist: []
  }),
  actions: {
    async fetchHotSuggests() {
      const res = await getHomeHotSuggests()
      this.hotSuggests = res.data
    },
    async fetchCategories() {
      const res = await getHomeCategories()
      this.categories = res.data
    },
    async fetchHouselist() {
      const res = await getHouselist(this.currentPage)
      this.houselist.push(...res.data)
      this.currentPage++
    }
  }
})

export default useHomeStore
