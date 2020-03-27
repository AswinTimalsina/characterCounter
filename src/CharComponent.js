import React, {Component} from 'react';
import './AppInp.css';

class CharComponent extends Component{
render(){
return(<div className='charComp' onClick={this.props.changed}>{this.props.texx}</div>)
}
}


export default CharComponent;
