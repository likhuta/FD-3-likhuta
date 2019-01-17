import React from 'react';
import './MobileClient.css';
import {channelEvents} from './events';


class MobileClient extends React.PureComponent {
 

  state={
    info:this.props.info,
  }
  //вписать state  карточке и покрасить цвет
  defineStatusClient=(this.state.info['balance']>0)?'active_client':'blocked_client';

  
  chooseClient='chooseClient';
  deleteClient='deleteClient';

  componentWillReceiveProps = (newProps) => {
    this.setState({info:newProps.info});
   this.defineStatusClient=(newProps.info['balance']>0)?'active_client':'blocked_client';
  };

  EOchooseClient=()=>{
   // console.log('chooseClient in client')
    channelEvents.emit(this.chooseClient, this.state.info)
  }


  EOdeleteClient=()=>{
  //  console.log('EOdeleteClient in client')
    channelEvents.emit(this.deleteClient, this.state.info.id)
  }



  render(){
    //  console.log('this.state',this.state)
   //   console.log('this props', this.props)
 
      console.log('render Mobile client')
 
      var answerCode=[];
      for(var k in this.state.info){
        if(k==='id'){
          continue
        }
        answerCode.push(<th key={k} > 
         {this.state.info[k]} 
         </th>)
         

      }
      answerCode.push(<th  key='status' className={ this.defineStatusClient}> 
                              {   this.defineStatusClient  }
                               </th> );

    return(
      
    <tbody>
    <tr>
      {answerCode}
      <th>
      <input type='button' value={ 'Редактировть'} onClick={this.EOchooseClient} />
            </th>
            <th>
      <input type='button' value={ 'Удалить'} onClick={this.EOdeleteClient}/>
            </th>

    </tr>
    </tbody>

      
    )
  }

}

export default MobileClient;