import React, { Component } from 'react'
import Person  from './Person';
class ArrayList extends Component {
  render() {
    const personList=[
        {
            id:1,
            name:"a",
            age:12
        },
        {
            id:2,
            name:"b",
            age:13
        },
        {
            id:3,
            name:"c",
            age:14
        },
        {
            id:4,
            name:"d",
            age:15
        }
    ]
    const personL = personList.map(person=><Person key={person.id} person={person}/>);
    return (
      <div>
       {personL}
      </div>
    )
  }
}

export default ArrayList
