
import React, { Component } from 'react';
import './RainbowFrame.css';
import PropTypes from 'prop-types';



class RainbowFrame extends Component {

  static propTypes= {
    colors: PropTypes.arrayOf(PropTypes.string)
  }

  render(){
    /*
    let colors =this.props.colors;
    var answerCode=this.props.children;

    for(let i=0; i<=colors.length-1; i++){
      answerCode=<div style={{border:"solid 3px "+colors[i],padding:"10px"}} >
        {answerCode }
      </div>
    }
    return (
        <div> 
        { answerCode}
        </div>
      )
  */
 let colors =this.props.colors;

  return(
    
  <div style={{border:"solid 3px "+colors[0],padding:"10px"}}  >
      {
        (colors.length!==0)
        ?  <RainbowFrame colors={colors.slice().splice(1,colors.length-1)} >
            {this.props.children}
           </RainbowFrame>
        :   this.props.children
      }
    </div>

  )
}
}

export default RainbowFrame;