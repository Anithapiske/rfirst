import React from 'react'

function Person({person}) {
    const personl = <h1>hello {person.name} . im {person.age} old</h1>
  return (
    <div>
      {personl}
    </div>
  )
}

export default Person
