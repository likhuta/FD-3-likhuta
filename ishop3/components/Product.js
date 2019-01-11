
import React from 'react';
import PropTypes from 'prop-types';

import './Product.css';

class Product extends React.Component {

  static propTypes= {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    URL: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    control: PropTypes.bool,
    cod: PropTypes.number.isRequired,
    isCheckNow: PropTypes.any,
    cbCheckLineTable: PropTypes.func,
    cbDeleteLineTable: PropTypes.func,
    workModel: PropTypes.any
  }

  state={
    
  }

  deleteLineTable=(EO)=>{
    EO.stopPropagation();
    if(this.props.workModel==2 || this.props.workModel==3 ){
      return;
    }

    this.props.cbDeleteLineTable(this.props.cod);

  }

  checkLineTable=(EO)=>{
    EO.stopPropagation();
    if(this.props.workModel==2 || this.props.workModel==3 ){
      return;
    }
    this.props.cbCheckLineTable(this.props.cod);
    

  }

  editeLineProduct=(EO)=>{
    EO.stopPropagation();
    if(this.props.workModel==2 || this.props.workModel==3){
      return;
    }

    this.props.cbCnangeFormCard(this.props.cod);

  }

 


  render(){

    return (
      <tbody className={(this.props.isCheckNow==this.props.cod)?'active_line_in_table'
    :'dont_active_line_in_table'} onClick={this.checkLineTable}>
        <tr>
            <th>{this.props.name}</th>
            <th>{this.props.price}</th>
            <th>{this.props.URL}</th>
            <th>{this.props.quantity}</th>
            <th >
            {(this.props.control)
            ?
            <span>
               <input type='button' value='Edite' onClick={this.editeLineProduct} /> 
               <input type='button' value='Delete' onClick={this.deleteLineTable} /> 
            </span>
            :
            <span>{this.props.control}</span>}


            </th>


        </tr>
      
      </tbody>
    )


  }


}

export default Product;
