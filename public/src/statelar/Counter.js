 import React, { Component } from 'react'
 
 export default class Counter extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0
         }
     }
    inc(){
        this.setState({
            count:this.state.count+1
        })
    }
    dec(){
        this.setState({
            count:this.state.count-1
        })
    }
    reset(){
        this.setState({
            count:0
        })
    }
     render() {
         return (
             <div>
                 <h1>{this.state.count}</h1>
                 <button onClick={(e)=>this.inc(e)}>+</button>
                 <button onClick={(e)=>this.dec(e)}>-</button>
                 <button onClick={(e)=>this.reset(e)}>Reset</button>
             </div>
         )
     }
 }
 