
var Block=React.createClass({

  displayName:'Block',

  propTypes: {
    dictionary:React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    stayToAbc:React.PropTypes.bool.isRequired,
    selectStr:React.PropTypes.string,


  },

  getInitialState: function() {
    return {
      filtrArr:this.props.dictionary, 
      stayToAbc:this.props.stayToAbc,
      selectStr:this.props.selectStr,
    };
  },

  abcFunction: function(a,b){
    if(a>b){
      return 1;
    }
    if(a<b){
      return -1
    }
  },


  doSortArrAbc: function(EO){
      this.setState({stayToAbc:EO.target.checked},  this.toMakeFilter  );
  },

  knowSelectStr: function(EO){
    this.setState({selectStr:EO.target.value}, this.toMakeFilter);
 }, 

 

  toMakeFilter:function(){
   var sortArr=[];

   if(this.state.selectStr==''){
    sortArr=this.props.dictionary.slice();
    }
   else if  (this.state.selectStr!='') {
       sortArr = this.props.dictionary.filter(item=>{
           if (item.indexOf(this.state.selectStr)!=-1  ){
           return item;
            }
      });

   };

    if(this.state.stayToAbc){
    sortArr.sort(this.abcFunction);
    }
    this.setState({filtrArr:sortArr} );
  },

  render: function(){
    var answersCode = this.state.filtrArr.map(item=>
      React.createElement(ShowList,{key:item.toString(), text:item})
      );

    return React.DOM.div({},
      React.DOM.input({type:'checkbox', checked:this.state.stayToAbc, onClick:this.doSortArrAbc}),
      React.DOM.input({type:'text', onChange:this.knowSelectStr }),
      React.DOM.div({},answersCode )
      );
    

  },

})