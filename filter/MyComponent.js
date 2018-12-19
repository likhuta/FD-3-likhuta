
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

      this.setState({stayToAbc:EO.target.checked, filtrArr:this.props.dictionary },  this.toMakeFilter  );
console.log(1);
  },

  knowSelectStr: function(EO){
    this.setState({selectStr:EO.target.value}, this.toMakeFilter);
    console.log(2);

 }, 

  aaa: function(){
    console.log(this.state.stayToAbc);
  },

  toMakeFilter:function(){
   var sortArr=[];
   console.log(3);
   console.log(this.state.filtrArr);
   console.log(this.props.dictionary );

   if(this.state.selectStr==''){
    sortArr=this.props.dictionary;
    console.log(this.props.dictionary );

    }
   else if  (this.state.selectStr!='') {
       sortArr = this.props.dictionary.filter(item=>{
           if (item.indexOf(this.state.selectStr)!=-1  ){
           return item;
            }

      });
console.log(this.state.filtrArr);

   };

    if(this.state.stayToAbc){
    sortArr.sort(this.abcFunction);
    console.log('sort');

    }
    else{
      console.log('haa');
    };

    this.setState({filtrArr:sortArr} );

  },

  render: function(){
    this.aaa();
    var answersCode = this.state.filtrArr.map(item=>
      React.createElement(ShowList,{key:item.toString(), text:item})
      );
      console.log('-------------end--------')

    return React.DOM.div({},
      React.DOM.input({type:'checkbox', onClick:this.doSortArrAbc}),
      React.DOM.input({type:'text', onChange:this.knowSelectStr }),
      React.DOM.div({},answersCode )
      );
    

  },

})