import{h as e}from"./index.ca1821e6.js";import{W as i}from"./index.f437f4e8.js";function a(){return e.get({url:"/city/all"})}const l=i("city",{state:()=>({allCities:{},currentCity:{cityName:"\u5317\u4EAC"}}),actions:{async fetchAllCitiesData(){const t=await a();this.allCities=t.data}}});export{l as u};
