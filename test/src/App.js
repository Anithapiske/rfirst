
import './App.css';
import  React, { Component }  from 'react';
//import Navbar from './component/Navbar';
//import Counter from './component/Counter';
import FunctionClick from './component/FunctionClick';
import ClassClick from './component/ClassClick';
import ParentComponent from './component/ParentComponent';
import ArrayList from './component/ArrayList';
/*function App(){

    return (
      
      <Navbar/>
    );
} */

class App extends Component{
  render(){
    return(
      <>
      <ArrayList/>
      {/*<ParentComponent/>*/}
     {/* <Counter name="sangameshwer"/> */}
    {/*<Navbar  name="aa" heroName="aaa"/> */}
    {/*<FunctionClick/>
    <ClassClick/> */ }

      </>
    );
    
  }
}

export default App;
