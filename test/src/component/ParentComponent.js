import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'parent'
      }
      this.geetParent = this.geetParent.bind(this);
    }

    geetParent(child){
        alert(`hello ${this.state.message} from ${child}`)
    }
    
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.geetParent}/>
      </div>
    )
  }
}

export default ParentComponent
