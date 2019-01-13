
import React, { Component } from 'react';
import './RainbowFrame.css';
import PropTypes from 'prop-types';



class RainbowFrame extends Component {

  static propTypes= {
    colors: PropTypes.arrayOf(PropTypes.string)
  }

  render(){
    
    let colors =this.props.colors;
    var answerCode=[];
    colors.map((item,i)=>{
      let abc=
      <div style={{border:"solid 2px "+colors[i],padding:"10px"}}>
       {answerCode} {
        (i)
        ?null
        :this.props.children
        }
      </div>
    
  return  answerCode=abc;
    })

    return (
        <div> 
        { answerCode}
        </div>

      )

  }
}

export default RainbowFrame;