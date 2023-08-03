
import React, { Component } from 'react'

/*export default function Navbar(props) {
  const {name,heroName}=props;
  return (
    <>
    <h1>hello {name} as {heroName}</h1>
    
  </>
  )
} */
export default class Navbar extends Component{
  constructor(){
    super()
    this.state = {
      message:"welcome aa",
      greet:"how are u"
    }
  }
  change(){
    this.setState({
      message:"thank you"
    })
  }
  render (){
    const {message,greet} = this.state
    return (
      <>
      <h1>{message}</h1>
      <p>{greet} {message}</p>
      <h1>hello {this.props.name} as {this.props.heroName}</h1>
      <button onClick={() => this.change()}>subcribe</button>
      </>
    );

  }
} 

/*const Navbar = ({name,heroName})=>{
  return <h1>hello {name} as {heroName}</h1>
}
export default Navbar;  */