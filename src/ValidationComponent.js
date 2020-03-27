import React, {Component} from 'react';

class ValidationComponent extends Component{
    
    render(){

       let text = null;
        if(this.props.length < 5){
            text = (<p>Text is short. Note: It should be atleast 5.</p>)
        }
        return(
            
            <div>
            {text}
            </div>  )}}
export default ValidationComponent;