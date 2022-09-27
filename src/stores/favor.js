import { defineStore } from "pinia"
import { getFavorList, getHistoryList } from "@/services/modules/favor"

const useFavorStore = defineStore("favor", {
  state: () => ({
    favorList: [],
    historyList: []
  }),
  actions: {
    async fetchFavorList() {
      const res = await getFavorList()
      this.favorList = res.data.data.items
    },
    async fetchHistoryList() {
      const res = await getHistoryList()
      this.historyList = res.data.data.items
    }
  }
})

export default useFavorStore
