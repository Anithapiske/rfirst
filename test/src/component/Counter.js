import React, { Component } from 'react'

 class Counter extends Component {
   constructor(){
    super()
    this.state={
      count:5
    }
   }
   increment(){
    this.setState(prevState=>({
      count : prevState.count+1
    }),()=>console.log(this.state.count))
   }
   incrementFive(){
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();


   }
  render() {
    const {count} = this.state;
    return (
      <div>
        <h1 style={{textAlign:"center"}}>count- {count}</h1>
        <h1>hello {this.props.name}</h1>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
        <button className='btn btn-primary' onClick={()=>this.incrementFive()}>Increment</button>
        </div>
       

      </div>
    )
  }
}



export default Counter
