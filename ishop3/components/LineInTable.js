
import React from 'react';
import PropTypes from 'prop-types';

import './LineInTable.css';

class LineInTable extends React.Component {

  static propTypes= {
    titleOfTable: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        URL: PropTypes.string.isRequired,
        quantity: PropTypes.string.isRequired,
        control: PropTypes.string.isRequired,

      })
    )
  }

  render(){

    return (
      

            <tbody>
        <tr>
            <th>{this.props.titleOfTable[0].name}</th>
            <th>{this.props.titleOfTable[0].price}</th>
            <th>{this.props.titleOfTable[0].URL}</th>
            <th>{this.props.titleOfTable[0].quantity}</th>
            <th>
            {(this.props.titleOfTable[0].control===true)
            ?
            <input type='button' value={this.props.titleOfTable[0].control} />
            :
            <span>{this.props.titleOfTable[0].control}</span>}


            </th>

        </tr>
      
      </tbody>

    )


  }

}


export default LineInTable;

