import React, { PureComponent } from 'react';
// import {connect} from '../utils/connect'
import axios from 'axios';
import {connect} from 'react-redux';
import {
    incAction,addAction,changeBannersAction,changeRecommendsAction
} from '../store/actionCreators'
class Home extends PureComponent {
  componentDidMount(){
    axios({
      url:'http://123.207.32.32:8000/home/multidata'
    }).then((res)=>{
      const ret=res.data.data
      // console.log(res.data.data)
      this.props.changeBanners(ret.banner.list);
      this.props.changeRecommends(ret.recommend.list);
    })
  }
  render() {
    return (
      <div>
         <h1>home</h1>
         <h2>当前计数:{this.props.counter}</h2>
         <button onClick={e=>{this.props.increment()}}>+1</button>  
         <button onClick={e=>{this.props.addNumber(5)}}>+5</button>   
      </div>
    )
  }
}
const mapStateToProps=(state)=>({
  counter:state.counter
})
const mapDispachToProps=dispatch=>({
  increment(){
    dispatch(incAction())
  },
  addNumber(num){
    dispatch(addAction(num))
  },
  changeBanners(banners){
   dispatch(changeBannersAction(banners))
  },
  changeRecommends(recommends){
    dispatch(changeRecommendsAction(recommends))
  }
})
export default connect(mapStateToProps,mapDispachToProps)(Home);


