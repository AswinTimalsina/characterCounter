import React, {Component} from 'react';
import './AppInp.css';

class AppInput extends Component{
render(){
    return(
        <div className='block'>
            <p>NUMBER OF CHARACTERS COUNTER</p>
    <p>No. of text: {this.props.length}</p>
        <input type="text" onChange={this.props.changeLength}></input>
        </div>
    )

}

}

export default AppInput;