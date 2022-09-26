import HYRequest from "../request/index"

export function getHomeHotSuggests() {
  return HYRequest.get({
    url: "/home/hotSuggests"
  })
}

export function getHomeCategories() {
  return HYRequest.get({
    url: "/home/categories"
  })
}

export function getHouselist(currentPage) {
  return HYRequest.get({
    url: "/home/houselist",
    params: {
      page: currentPage
    }
  })
}
