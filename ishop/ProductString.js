var ProductString= React.createClass({
  displayName:'ProductString',

  render: function(){
   
    return React.DOM.div({className:'MyComponentText'}, 
    React.DOM.span({className:'MyComponentText'},  'Наименование: '),
 
    React.DOM.span({className:'MyComponentText'},  this.props.name),
    React.DOM.span({className:'MyComponentText'},  '   Стоимость: '),

    React.DOM.span({className:'MyComponentText'},  this.props.cost),
    React.DOM.span({className:'MyComponentText'},  '   Количество в наличии: '),

    React.DOM.span({className:'MyComponentText'},  this.props.count),

   React.DOM.br(),
    React.DOM.img({src:'src/'+this.props.name+'.jpg'}),

     )


  },





});