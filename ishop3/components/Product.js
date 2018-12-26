
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
    isCheckNow: PropTypes.number,
    cbCheckLineTable: PropTypes.func,
    cbDeleteLineTable: PropTypes.func,
  }

  deleteLineTable=(EO)=>{
    EO.stopPropagation();
    this.props.cbDeleteLineTable(this.props.cod);

  }

  checkLineTable=(EO)=>{
    EO.stopPropagation();
    this.props.cbCheckLineTable(this.props.cod);

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
            <th onClick={this.deleteLineTable}>
            {(this.props.control)
            ?
            <input type='button' value='Delete' />
            :
            <span>{this.props.control}</span>}


            </th>


        </tr>
      
      </tbody>
    )


  }


}

export default Product;
