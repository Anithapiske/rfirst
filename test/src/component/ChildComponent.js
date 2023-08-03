import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={()=> props.greetHandler('child component')}> greet parent </button>
    </div>
  )
}

export default ChildComponent
