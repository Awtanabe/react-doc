import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component{
  constructor(props){
   super(props)
   this.state = {value: ''}
   
  }

  handleChange(e){
    this.setState({value: e.target.value})
  }
  handleSubmit(e){


    alert(this.state.value)
  }
  render(){
    return(
      <div>
        <form onSubmit={(e)=> this.handleSubmit(e)}>
         <label>
           Name
         </label>
         <input type="text" defaultValue={this.state.value} onChange={(e) => this.handleChange(e)}></input>
         <input type="submit" value="sub"></input>
        </form>
      </div>
    )
  }
}

export default App;
