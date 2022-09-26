import { defineStore } from "pinia"
import { getDetailInfos } from "../services/index"

const useDetailStore = defineStore("detail", {
  state: () => ({
    detailInfos: []
  }),
  actions: {
    async fetchDetailInfos(houseId) {
      const res = await getDetailInfos(houseId)

      this.detailInfos = res.data
    }
  }
})

export default useDetailStore
