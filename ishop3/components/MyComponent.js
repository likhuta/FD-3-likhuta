
import React from 'react';
import PropTypes from 'prop-types';

import './MyComponent.css';

import Product from './Product';
import LineInTable from './LineInTable';
import FormForProduct from './FormForProduct';

class MyComponent extends React.Component{

  static propTypes={
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

    isCheckNow:'22',
    arrToShow:this.props.infoForTable.slice(),
    workModel: '',
    infoFormCard:''

  }


  checkLineTable= (cod)=> {
  // console.log(this.whoCheckByCode(cod))

    this.setState({ isCheckNow:cod,
                    infoFormCard:this.whoCheckByCode(cod),
                    workModel:1
    
    });
  }

  whoCheckByCode=(cod)=>{
    var arrForFormCard=this.state.arrToShow.filter(item=>(cod==item.cod) );   
    if(arrForFormCard.length==1){
     // console.log('yes');
      return arrForFormCard[0];
    }
    return 'вернули 2 значения в массиве'
  }

  deleteLineTable= (cod) => {
    if(this.askUser()){
      this.setState({arrToShow:this.state.arrToShow.filter(item=> item.cod!=cod)}, );
    }
    else{
      return;
    }
  }

  cnangeFormCard=(cod)=>{
   // var changeDoNow=this.whoCheckByCode(cod);
   // console.log('changeDoNow----', changeDoNow );
    this.setState({ workModel:2,
                    isCheckNow:cod,
                    infoFormCard:this.whoCheckByCode(cod)  
    })
  }

  askUser=()=>{
    var answer=confirm('Delete');
    return answer;
  }

  render(){
  
    var answerCode = this.state.arrToShow.map( item=>
      < Product key={item.cod} name={item.name} price={item.price} URL={item.URL}
       quantity={item.quantity} control={item.control} isCheckNow={this.state.isCheckNow}
       cod={item.cod} 
       cbCheckLineTable={this.checkLineTable} 
       cbDeleteLineTable={this.deleteLineTable}
       cbCnangeFormCard={this.cnangeFormCard} 
       />
      
      );

        console.log('my component state--', this.state) 

        
      
    return (
      <div >
        <table >
          <LineInTable titleOfTable={this.props.titleOfTable} />
          {answerCode}

        </table>
        <input type='button' value='New product' />
        <br/>
       
        <FormForProduct infoFormCard={this.state.infoFormCard} 
        isCheckNow={this.state.isCheckNow}
        workModel={this.state.workModel}
        />
      </div>

    );

  }

}

export default MyComponent;
