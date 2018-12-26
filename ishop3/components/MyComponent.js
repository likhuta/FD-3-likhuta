import React from 'react';
import PropTypes from 'prop-types';

import './MyComponent.css';

import Product from './Product';
import LineInTable from './LineInTable';

class MyComponent extends React.Component{

  static PropTypes={
    titleOfTable: PropTypes.arrayOf(
      PropTypes.shape({
        name:PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        URL:PropTypes.string.isRequired,
        quantity: PropTypes.string.isRequired,
        control:PropTypes.string.isRequired,
      })
    ),
    infoForTable: PropTypes.arrayOf(
      PropTypes.shape({
        name:PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        URL:PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        control:PropTypes.bool,
        cod:PropTypes.number.isRequired,

      })
    ),

  }

  state ={

    isCheckNow:null,
    arrToShow:this.props.infoForTable.slice(),

  }


  checkLineTable= (cod)=> {
    this.setState({isCheckNow:cod});

  }

  deleteLineTable= (cod) => {
    if(this.askUser()){
      this.setState({arrToShow:this.state.arrToShow.filter(item=> item.cod!=cod)}, );
    }
    else{
      return;
    }
  }

  askUser=()=>{
    var answer=confirm('Delete');
    return answer;
  }

  render(){
  
    var answerCode = this.state.arrToShow.map( item=>
      < Product key={item.cod} name={item.name} price={item.price} URL={item.URL}
       quantity={item.quantity} control={item.control} isCheckNow={this.state.isCheckNow}
       cod={item.cod} cbCheckLineTable={this.checkLineTable} 
       cbDeleteLineTable={this.deleteLineTable} 
       />
      
      );
         
      
    return (
      <div >
        <table >
          <LineInTable titleOfTable={this.props.titleOfTable} />
          {answerCode}

        </table>

      </div>

    );

  }

}

export default MyComponent;
