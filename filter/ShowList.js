
var ShowList=React.createClass({

  displayName:'ShowList',
/*
  propTypes: {
    dictionary:React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    stayToAbc:React.PropTypes.bool.isRequired,
    selectStr:React.PropTypes.string,


  },


*/

  render: function(){
   
    return React.DOM.div({},
      React.DOM.p(null, this.props.text)

    )
 
    

  }

// отобразить список







})