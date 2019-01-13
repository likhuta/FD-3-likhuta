import React, { Component } from 'react';
import './App.css';
import RainbowFrame from  './RainbowFrame'
import BR from  './BR'


class App extends Component {
  render() {
   let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
   let text="первый<br>второй<br/>третий<br />последний";
   
  return (
    <span> 
    <RainbowFrame colors={colors}>
    
      Hello!
   
    </RainbowFrame>
    {
      // второе задание 
    }
    <BR text={text} />
    </span>
  );
  }
}

export default App;
