import { defineStore } from "pinia"
import { getOrderList } from "@/services"

const useOrderStore = defineStore("order", {
  state: () => ({
    orderlist: []
  }),
  actions: {
    async fetchOrderList(type) {
      const res = await getOrderList(type)
      this.orderlist = res.data.data.orders
    }
  }
})

export default useOrderStore
