
var MyComponent=React.createClass({

  displayName:'MyComponent',

  propTypes: {
    titleOfTable:React.PropTypes.arrayOf(
      React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.string.isRequired,
        URL: React.PropTypes.string.isRequired,
        quantity: React.PropTypes.string.isRequired,
        control: React.PropTypes.string,
      })
    ),
    
    infoForTable:React.PropTypes.arrayOf(
      React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        URL: React.PropTypes.string.isRequired,
        quantity: React.PropTypes.number.isRequired,
        control: React.PropTypes.bool,
        cod: React.PropTypes.number.isRequired,
      })
    ),
  },
  getInitialState: function() {
    return {
      isCheckNow:null,
      isDelete:[],
    };
  },

  checkLineTable: function(cod){
    this.setState({isCheckNow:cod});
  },

  deleteLineTable:function(cod){
    var abc=this.state.isDelete;
    //    var abc=this.state.isDelete.push(cod);
    abc.push(cod);
    if(this.askUser()){
      this.setState({isDelete:abc});
    }
    else{
      return;
    }

  },

  askUser: function(){
    var answer=confirm('Delete');
    return answer;
  },

  render: function(){

    var answerCode=this.props.infoForTable.map(item =>
      React.createElement(Product,{
        key:item.cod, name:item.name, price:item.price, URL:item.URL,
        quantity:item.quantity, control:item.control, isDelete:this.state.isDelete,
        isCheckNow:this.state.isCheckNow, cod:item.cod, cbCheckLineTable:this.checkLineTable,
        cbDeleteLineTable:this.deleteLineTable,     
      }
        )
      );

    return React.DOM.div({},
     
      React.DOM.table({},
        React.createElement(LineInTable,{
          name:this.props.titleOfTable[0].name,
          price:this.props.titleOfTable[0].price,
          URL:this.props.titleOfTable[0].URL,
          quantity:this.props.titleOfTable[0].quantity,
          control:this.props.titleOfTable[0].control,
        }),
        answerCode,

      ),
    )

  },

})