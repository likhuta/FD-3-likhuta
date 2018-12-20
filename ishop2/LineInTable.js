
var LineInTable= React.createClass({
  displayName:'LineInTable',

  propTypes: {

        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.string.isRequired,
        URL: React.PropTypes.string.isRequired,
        quantity: React.PropTypes.string.isRequired,
        control: React.PropTypes.string,
      
/*
    name:this.props.name,
    price:this.props.price,
    URL:this.props.URL,
    quantity:this.quantity,
    control:this.props.control,

*/
  },

  render: function(){

    return React.DOM.tbody( {},    
        React.DOM.tr({},
        React.DOM.th({},this.props.name),
        React.DOM.th({},this.props.price),
        React.DOM.th({},this.props.URL),
        React.DOM.th({},this.props.quantity),
        React.DOM.th({},
          (this.props.control===true)
          ?React.DOM.input({type:'button', value:this.props.control})
          :React.DOM.span({}, this.props.control)
          ),



       )
 
      

    )

  },


})