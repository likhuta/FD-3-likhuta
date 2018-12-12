var ProductString= React.createClass({
  displayName:'ProductString',

  render: function(){
   
    return React.DOM.div({className:'PositionOfProduct'}, 
    React.DOM.span({className:'Discription'},  'Наименование: '),
 
    React.DOM.span({className:'InfoAboutProduct'},  this.props.name),
    React.DOM.span({className:'Discription'},  '   Стоимость: '),

    React.DOM.span({className:'InfoAboutProduct'},  this.props.cost),
    React.DOM.span({className:'Discription'},  '   Количество в наличии: '),

    React.DOM.span({className:'InfoAboutProduct'},  this.props.count),

   React.DOM.br(),
    React.DOM.img({src:'src/'+this.props.name+'.jpg',className:'ImageOfProduct'}),

     )


  },





});