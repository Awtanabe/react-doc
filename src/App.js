import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

function BilingVerdict(props){
  if(props.celsius >= 100){

    return <p>the water would boil</p>
  }
  return <p>the water would not be boild</p>
}

class App extends Component{
  constructor(props){
   super(props)
   this.state = {temp: ''}
   
  }

  handleChange(e){

  }

  render(){
    const temp = this.state.temp
    return(
      <div>
        <fieldset>
         <legend>Enter temp in celusius</legend>
         <input value={temp} onChange={()=> this.handleChange()}/>
         <BilingVerdict celcius={parseFloat(temp)}></BilingVerdict>
        </fieldset>
      </div>
    )
  }
}

export default App;
