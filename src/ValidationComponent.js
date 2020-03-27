import React, {Component} from 'react';

class ValidationComponent extends Component{
    
    render(){

       let text = null;
        if(this.props.length < 5){
            text = (<p>Text is short. Note: It should be atleast 5.</p>)
        }

        else if(this.props.length > 20){
            text = (<p>Text is too long. Note: It should be atleast 5.</p>)
        }
        return(
            
            <div>
                {text}
            {/* USING TERNARY CONDITION  {(this.props.length < 5) ? <p>Text is short. Note: It should be atleast 5.</p> : null} */}
            </div>  )}}
export default ValidationComponent;