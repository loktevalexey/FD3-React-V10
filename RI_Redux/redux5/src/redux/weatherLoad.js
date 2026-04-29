import { updateLoadState, updateData } from "./weatherSlice.js";

// мы используем эту thunk-функцию как action вместо обычного ОБЪЕКТА
// redux-thunk просто исполнит её, не передаст этот action редьюсеру

// redux-thunk передаёт dispatch-функцию аргументом,
// чтобы изнутри thunk-функции можно было диспатчить другие action

export async function weatherLoad(dispatch) {
    try {
      dispatch( updateLoadState({state:1,error:null}) );
      const response=await fetch("https://www.ncei.noaa.gov/access/monitoring/climate-at-a-glance/global/time-series/globe/land_ocean/ytd/12/1880-2016.json");
      if ( response.ok ) {
        const data=await response.json();
        dispatch( updateLoadState({state:2,error:null}) );
        dispatch( updateData(data) );
      }
      else {
        dispatch( updateLoadState({state:3,error:"HTTP error "+response.status}) );
      }
    }
    catch ( err ) {
      dispatch( updateLoadState({state:3,error:err.message}) );
    }
}
