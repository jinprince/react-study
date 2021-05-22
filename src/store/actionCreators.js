import axios from 'axios'
import {
    ADD_NUMBER,
    SUB_NUMBER,
    INC_NUMBER,
    DEC_NUMBER,
    CHANGE_BANNERS,
    CHANGE_RECOMMENDS


} from './constants.js';
// export function addAction(num){
//     return{
//         type:"ADD_NUMBER",
//         num
//     }
// }

// export const addAction=(num)=>{
//     return{
//         type:'ADD_NUMBER',
//         num
//     }
// }

//另外一种写法
export const addAction= num =>({
    type:ADD_NUMBER,
    num
})

export const subAction= num =>({
    type: SUB_NUMBER,
    num
})
export const incAction= ()=>({
    type: INC_NUMBER,
})
export const decAction= ()=>({
    type: DEC_NUMBER,
})
//轮播图和推荐的action
export const changeBannersAction=(banners)=>({
    type:CHANGE_BANNERS,
    banners

})
export const changeRecommendsAction=(recommends)=>({
    type:CHANGE_RECOMMENDS,
    recommends

})
//redux-thunk中定义的action函数
export const getHomeMultidataAction=(dispatch,getState)=>{
//    console.log("action函数中",dispatch)
console.log(getState())
  axios({
      url:'http://123.207.32.32:8000/home/multidata'
    }).then((res)=>{
      const ret=res.data.data
      // console.log(res.data.data)
      dispatch(changeBannersAction(ret.banner.list))
      dispatch(changeRecommendsAction(ret.recommend.list));
    })
}