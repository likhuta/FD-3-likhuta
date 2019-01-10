import React from 'react';
import PropTypes from 'prop-types';

import './FormForProduct.css';

class FormForProduct extends React.Component{
/*
  static propTypes = {
    infoFormCard: PropTypes.arrayOf(
      PropTypes.shape({
        name:PropTypes.string,
        price: PropTypes.number,
        URL:PropTypes.string,
        quantity: PropTypes.number,
        control:PropTypes.bool,
        cod:PropTypes.number,

      })
    ),
  }
*/


  state = {
    name:this.props.infoFormCard.name,

  }

  componentDidMount(){
    this.setState({name:EO.target.value})

  }


  validation=(EO)=>{
    this.setState({name:EO.target.value})
  }
  
  render(){
    const {name, price, URL, quantity, cod, }=this.props.infoFormCard;
    const {workModel, isCheckNow}= this.props;

        console.log("this.props----",this.props)
        console.log('this.props.infoFormCard--',this.props.infoFormCard.name)
        console.log('this.state----',this.state)
 
 


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

          {(workModel==2)
          ?<form>
           
              <span>ID </span> {cod}
            <br/>
            <span>Name</span>    <input  value={this.state.name} 
               onChange={this.validation} />
            <br/>


          

            <input type='button' value='Save'/>
            <input type='button' value='Cansel'/>

          </form>
          :null

          }
        </div>
      </div>
    )
    
  }


}

export default FormForProduct