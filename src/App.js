import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AppInput from './AppInput';

class App extends Component {

state = {
  count: 0
}

textChangeHandler = (event) =>{
const newCount = (event.target.value).length;
this.setState({count: newCount})
}


  render(){
  return (
    <div>
      <AppInput changeLength={(event) => this.textChangeHandler(event)} length={this.state.count}/>
    </div>
  );
}}

export default App;
