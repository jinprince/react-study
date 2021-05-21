import React, { PureComponent } from 'react';
import store from '../store';
import{
    decAction,subAction
} from '../store/actionCreators'
export default class About extends PureComponent {
    constructor(){
        super();
        this.state={
            counter:store.getState().counter
        }
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({
                counter:store.getState().counter
            })
        })
    }
  render() {
    return (
      <div>
         <h1>about</h1>
         <h2>当前计数:{this.state.counter}</h2>
         <button onClick={e=>{this.decement()}}>-1</button>  
         <button onClick={e=>{this.subNumber(5)}}>-5</button>   
      </div>
    );
  }
  decement(){
      store.dispatch(decAction())
  }
  subNumber(num){
      store.dispatch(subAction(num))

  }
}
