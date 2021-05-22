import React from 'react';
// http://123.207.32.32:8000/home/multidata
// import {connect} from '../utils/connect'
import {connect} from 'react-redux';
import{
    decAction,subAction
} from '../store/actionCreators'
 function About(props){
    return (
      <div>
         <h1>about</h1>
         <h2>当前计数:{props.counter}</h2>
         <button onClick={e=>{ props.decrement()}}>-1</button>  
         <button onClick={e=>{ props.subNumber(5)}}>-5</button>   
         <h1>banners</h1>
         <ul>
             {
                 props.banners.map((item)=>{
                     return <li key={item.acm}>{item.title}</li>
                 })
             }
         </ul>
         <h1>recommends</h1>
         <ul>
             {
                 props.recommends.map((item)=>{
                     return <li key={item.acm}>{item.title}</li>
                 })
             }
         </ul>
      </div>
    )
}
const mapStateToProps=state=>{
    return {counter:state.counter,
        banners:state.banners,
        recommends:state.recommends
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        decrement:function(){
            dispatch(decAction())
        },
        subNumber:function(num){
            dispatch(subAction(num))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(About);


