import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import AppInput from './AppInput';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';
import './AppInp.css';

class App extends Component {

state = {
  count: 0,
  text: [] 
}

textChangeHandler = (event) =>{
const newCount = (event.target.value).length;
this.setState({count: newCount, text: event.target.value.split('')})

}

deleteCharHandler =(index)=>{
  const text1 = [...this.state.text];
  text1.splice(index, 1);
  this.setState({text:text1});
}

  render(){
  let eachChar = (
     this.state.text.map((txt, index)=>{
       return (<CharComponent val={this.state.text} texx={txt} changed={()=>this.deleteCharHandler(index)}/>)
     })
   )

  return (
    <div>
      <AppInput changeLength={(event) => this.textChangeHandler(event)} length={this.state.count}>
      <ValidationComponent length={this.state.count}/>
      </AppInput>
      <div className='blockBox'>
      {eachChar}
      </div>
    </div>
  );
}}

export default App;
