var MyComponentForHometask = React.createClass({

  displayName: 'MyComponentForHometask',

  propTypes: {
    nameShop: React.PropTypes.string.isRequired,
    product: React.PropTypes.arrayOf( 
     React.PropTypes.shape({
        name:React.PropTypes.string.isRequired,
        cost:React.PropTypes.string.isRequired,
        count: React.PropTypes.number.isRequired,
        code: React.PropTypes.number.isRequired,
      })
      )

  },

  render: function(){
  console.log(this.props);
  var allInfo= this.props.product.map(v=>React.createElement(ProductString,
    {key:v.code, name:v.name, cost:v.cost, count:v.count}));

    return React.DOM.div( {className:'MyComponentFrame'}, 
      React.DOM.p( {className:'MyNameShop'}, this.props.nameShop ),
      React.DOM.div( {className:'PositionOfProduct'}, allInfo ),
    );
  },

});