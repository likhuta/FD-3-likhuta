
import React, { Component } from 'react';
import './BR.css';

class BR extends Component {
  render(){
  let textStr=this.props.text;
  let textArr=textStr.split(/<.*?>/g);
    let test=[]
    for(let i=0; i<=textArr.length-1; i++){
    if(i) {
      test.push(<br key={i}/>)
    }
    test.push(textArr[i] );
    }
    return(
      <div>
      {test}
      </div>
    )

  }

}

export default BR