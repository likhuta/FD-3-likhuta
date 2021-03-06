
var Product= React.createClass({
  displayName:'Product',

  propTypes: {
    name: React.PropTypes.string.isRequired,
    price: React.PropTypes.number.isRequired,
    URL: React.PropTypes.string.isRequired,
    quantity: React.PropTypes.number.isRequired,
    control: React.PropTypes.bool,
    cod:React.PropTypes.number.isRequired,
    isCheckNow:React.PropTypes.number,
    cbCheckLineTable:React.PropTypes.func,
    cbDeleteLineTable:React.PropTypes.func,


  },

  deleteLineTable: function(EO){
    EO.stopPropagation();
    this.props.cbDeleteLineTable(this.props.cod);

  },

  checkLineTable: function(EO){
    EO.stopPropagation();
    this.props.cbCheckLineTable(this.props.cod);
  },


  render: function(){

    var forClassStyle=(this.props.isCheckNow==this.props.cod)?'active_line_in_table'
    :'dont_active_line_in_table';
    
      return  React.DOM.tbody( {
        className:forClassStyle,
        onClick:this.checkLineTable,
      },    
          React.DOM.tr({},
          React.DOM.th({},this.props.name),
          React.DOM.th({},this.props.price),
          React.DOM.th({},this.props.URL),
          React.DOM.th({},this.props.quantity),
          React.DOM.th({
            onClick:this.deleteLineTable,
          },
            (this.props.control)
            ?React.DOM.input({type:'button', value:'Delete', 
          })
            :React.DOM.span({}, this.props.control)
            ),
        ) 
      )

  },


})