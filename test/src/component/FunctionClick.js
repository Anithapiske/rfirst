import React from 'react'

export default function FunctionClick() {
    function clickhandler(){
        console.log("function button clicked");
    }
  return (
    <div>
      <button onClick={clickhandler}>click</button>
    </div>
  )
}
