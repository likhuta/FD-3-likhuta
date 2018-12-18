
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

  doSortArrAbc: function(){
    if(this.state.stayToAbc){
      this.setState({stayToAbc:false})
    }
    else{
      this.setState({stayToAbc:true});
   //  var prevArr=this.state.filtrArr;
   //  this.setState({filtrArr:prevArr.sort(this.abcFunction)})
    }
  },

  knowSelectStr:function(EO){
    this.setState({selectStr:EO.target.value});
    this.toMakeFilter();
  }, 

  toMakeFilter:function(){
    /*
    var sortArr = this.props.dictionary.filter(item=>{
      if (item.indexOf(this.state.selectStr)!=-1 || selectStr=='' ){
        return item;
      }
    });
*/
var sortArr=[];
//console.log(arr);

if(this.state.selectStr==''){
 // console.log(sortArr);
 this.setState({filtrArr:sortArr});

}
else if  (this.state.selectStr!='') {
  sortArr = this.props.dictionary.filter(item=>{
      if (item.indexOf(this.state.selectStr)!=-1 ){
        return item;
      }

    });
};

    if(this.state.stayToAbc){
    sortArr.sort(this.abcFunction);
    }
    console.log('-sortArr-',sortArr)

    this.setState({filtrArr:sortArr});
  },

  render: function(){

 console.log(this.state.filtrArr)
    var answersCode = this.state.filtrArr.map(item=>
      React.createElement(ShowList,{key:item, text:item})
      );

    return React.DOM.div({},
      React.DOM.input({type:'checkbox', onClick:this.doSortArrAbc}),
      React.DOM.input({type:'text', onChange:this.knowSelectStr }),
      React.DOM.div({},answersCode )
     

      );
    

  },

// отобразить список







})