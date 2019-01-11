import React from 'react';
import PropTypes from 'prop-types';

import './FormForProduct.css';

class FormForProduct extends React.Component{

  static propTypes = {
    infoFormCard: PropTypes.object,
    workModel: PropTypes.any,
    isCheckNow: PropTypes.any,
    cbRemovePosition: PropTypes.func.isRequired,
    cbChangeWorkModel: PropTypes.func.isRequired,
  }



  state = {

    name:this.props.infoFormCard.name,
    price:this.props.infoFormCard.price,
    cod:this.props.infoFormCard.cod,
    URL:this.props.infoFormCard.URL,
    quantity:this.props.infoFormCard.quantity,
    activeButSave:false,
    whoHaveMistake:[],
    clickMouse:false

  }


  fixChange=(EO)=>{
    const { id, value } = EO.currentTarget
    this.setState({[id]:value},this.validation());
  
  }
  makeRemoveLineInTable=()=>{
    const {name, price, URL, quantity, cod }=this.state;

    var obj={
      name:name,
      price:+price,
      URL:URL,
      quantity:+quantity,
      control:true,
      cod:cod,
    }
   
      this.removePosition(obj);

    
  }

  removePosition=(obj)=>{
    this.props.cbRemovePosition(obj);
  }


  validation=(param)=>{
    var arr=[];
    const {name, price,URL, quantity}=this.state;

    if(!name){
     this.arrWnoHaveMistake(arr,'name')
    }
   
   if(+price<0 || price==""  || isNaN(+price)==true){
    this.arrWnoHaveMistake(arr,'price')
   }

   if(+quantity<0 || quantity=="" || isNaN(+quantity)==true){
    this.arrWnoHaveMistake(arr,'quantity')
   }

   if(!URL){
    this.arrWnoHaveMistake(arr,'URL')
   }

  this.saveButton(arr,param);
  }
  
  saveFromButton=()=>{
    this.validation('mouse');

  }

  arrWnoHaveMistake=(arr,param)=>{
    arr.push(param)
  }
 
 
  saveButton=(arr,param)=>{
    if(arr.length>0){
      this.setState({activeButSave:true, whoHaveMistake:arr} )
    }
     else{
      this.setState({activeButSave:false, whoHaveMistake:arr}, ()=>{
        if(param){
          this.makeRemoveLineInTable()
        }
      }
        );
    }
    
  
   
  }
  doSmth=(EO)=> {
    EO.stopPropagation();
    if(this.state.whoHaveMistake.length==0){
      this.setState({activeButSave:false})

    }
  
  };

  changeWorkModel=()=>{
    this.props.cbChangeWorkModel();
  }

  
  render(){
    const {name, price, URL, quantity, cod, }=this.state;
    const {workModel, isCheckNow}= this.props;

    return(
      <div className='FormForProduct_card'>
        <br/>
        <div>
    
          { (isCheckNow && workModel==1)
          ? <span>
              Name: {name} <br/>
              Price: {price}
          </span>
          :null
          }

          {(workModel==2 || workModel==3 )
          ?<form onChange={this.doSmth}>
              {
                (workModel==2)
                ?( <span>
                  <span>ID </span>
                {cod}</span>
                 )
                :null

              }

            <br/>
            <span>Name</span>    <input  value={name} 
               onChange={this.fixChange} onBlur={this.fixChange}
                id='name' /> 
               {
                  (this.state.whoHaveMistake.some(item=>item=='name'))
                ?<span>Enter name. Not empty field</span>
                :null
                }

            <br/>
            <span>Price</span>    <input  value={price} 
               onChange={this.fixChange} onBlur={this.fixChange}
                id='price' />
                {
                  (this.state.whoHaveMistake.some(item=>item=='price'))
                ?<span> Positive summ </span>
                :null
                }

                <br/>
                <span>URL</span>    <input  value={URL} 
               onChange={this.fixChange} onBlur={this.fixChange}
                id='URL' />
                {
                  (this.state.whoHaveMistake.some(item=>item=='URL'))
                ?<span> Enter URL. Not empty field </span>
                :null
                }

                <br/>
                <span>Quantity</span>    <input  value={quantity} 
               onChange={this.fixChange} onBlur={this.fixChange}
                id='quantity' />
                {
                  (this.state.whoHaveMistake.some(item=>item=='quantity'))
                ?<span> Positive number </span>
                :null
                }
                <br/>
            <input type='button' value='Save' onClick={this.saveFromButton}
             disabled={this.state.activeButSave}/>
            <input type='button' value='Cansel' onClick={this.changeWorkModel}/>

          </form>
          :null

          }
        </div>
      </div>
    )
    
  }


}

export default FormForProduct