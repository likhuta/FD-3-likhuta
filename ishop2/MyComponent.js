
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
    console.log('checkLineTable'+cod);
    this.setState({isCheckNow:cod});
  },

  deleteLineTable:function(cod){

    var abc=this.state.isDelete;
    //    var abc=this.state.isDelete.push(cod);
    abc.push(cod);
    if(this.askUser()){
      this.setState({isDelete:abc});
      console.log('deleteLineTable -My component ')
    }
    else{
      console.log('NOT deleteLineTable -My component ')
      return;
    }

  },

  askUser: function(){
    var answer=confirm('Delete');
    return answer;
  },

  render: function(){

    return React.DOM.div({},
     
      React.DOM.table({},
        React.createElement(LineInTable,{
          name:this.props.titleOfTable[0].name,
          price:this.props.titleOfTable[0].price,
          URL:this.props.titleOfTable[0].URL,
          quantity:this.props.titleOfTable[0].quantity,
          control:this.props.titleOfTable[0].control,
          
        }),
        React.createElement(Product1,{
          name:this.props.infoForTable[0].name,
          price:this.props.infoForTable[0].price,
          URL:this.props.infoForTable[0].URL,
          quantity:this.props.infoForTable[0].quantity,
          control:this.props.infoForTable[0].control,
          isDelete:this.state.isDelete,
          isCheckNow:this.state.isCheckNow,
          cod:this.props.infoForTable[0].cod,
          cbCheckLineTable:this.checkLineTable,
          cbDeleteLineTable:this.deleteLineTable,
        }),
        React.createElement(Product2,{
          name:this.props.infoForTable[1].name,
          price:this.props.infoForTable[1].price,
          URL:this.props.infoForTable[1].URL,
          quantity:this.props.infoForTable[1].quantity,
          control:this.props.infoForTable[1].control,
          isDelete:this.state.isDelete,
          isCheckNow:this.state.isCheckNow,
          cod:this.props.infoForTable[1].cod,
          cbCheckLineTable:this.checkLineTable,
          cbDeleteLineTable:this.deleteLineTable,

        }),
        React.createElement(Product2,{
          name:this.props.infoForTable[2].name,
          price:this.props.infoForTable[2].price,
          URL:this.props.infoForTable[2].URL,
          quantity:this.props.infoForTable[2].quantity,
          control:this.props.infoForTable[2].control,
          isDelete:this.state.isDelete,
          isCheckNow:this.state.isCheckNow,
          cod:this.props.infoForTable[2].cod,
          cbCheckLineTable:this.checkLineTable,
          cbDeleteLineTable:this.deleteLineTable,
  

        }),

      )


    )

  },

})