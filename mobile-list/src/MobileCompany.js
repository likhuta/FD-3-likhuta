import React from 'react';
import './MobileCompany.css';
import MobileClient from './MobileClient'
import FormField from './FormField'
import {channelEvents} from './events';

class MobileCompany extends React.PureComponent {

  state={
    nameCompany:this.props.name,
    clients:this.props.clients,
    workModelFormField:1,
    // 1 - форма не отображается
    // 2  - выбрали клиента для редактирования
    // 3 - чистая форма, нового клиента нужно добавить
    workModelSort:1,
    //1 -  показывает всех клиентов
    //2- активные
    // 3- заблокированы
    iChooseClient:'clientInfo',
    sortClient:this.props.clients,
  }

  saveClient='saveClient';
  chooseClient='chooseClient';
  deleteClient='deleteClient';
  addClient='addClient';
  iChooseClient='iChooseClient'

  componentDidMount =()=>{
    channelEvents.addListener(this.saveClient, this.EOsaveClient)
    channelEvents.addListener(this.chooseClient,this.EOchooseClient)
    channelEvents.addListener(this.deleteClient, this.EOdeleteClient)
  }

  componentWillMount =()=>{
    channelEvents.removeListener(this.saveClient, this.EOsaveClient)
    channelEvents.removeListener(this.chooseClient, this.EOchooseClient)
    channelEvents.removeListener(this.deleteClient, this.EOdeleteClient)

  }

  EOsaveClient=(param)=>{
    let newClient=[...this.state.clients]
    if(this.state.workModelFormField===3){
       newClient=[...newClient,param ]
    }
    if(this.state.workModelFormField===2){

    newClient.forEach((item,i)=>{
        if(item.id===param.id){
          newClient[i]=param;
        }
      })
   }
    this.setState({
      clients:newClient,
      workModelFormField:1,
    })
  }

  EOchooseClient=(clientInfo)=>{
 //   console.log('EOchooseClient', clientInfo)
    // редактировали клиента
    // показать данные клиента в форме

    this.setState({
      workModelFormField:2,
      iChooseClient:clientInfo
    })
  }

  EOdeleteClient=(id)=>{
  //  console.log('EOdeleteClient', id)
    // нажата кнопка удалить клиента из списка по этому id
    // из state.clients
    let hash=[...this.state.clients];
    hash.forEach((item,i)=>{
      if(item.id===id){
        hash.splice(i,1);
      }
    })
    this.setState({
      clients:hash,
    })
  }

  EOaddClient=()=>{
    channelEvents.emit(this.addClient,)
    //  показать форму
    this.setState({
      workModelFormField:3,
      iChooseClient:false,
    })
  }

  sortList=(EO)=>{
      this.setState({
        workModelSort:+EO.target.id,
         })
  }
  changeNameCompany=(EO)=>{
    this.setState({
      nameCompany:EO.target.value,
    })
  }

  render(){

    console.log("MobileCompany render");
   
      let sortClient=[];
      
      if(this.state.workModelSort===1) {
        sortClient=this.state.clients
      }
      else if (this.state.workModelSort===2 )
      {
        sortClient= this.state.clients.filter((item,i)=>item.balance>0);
      }
      
      else if (this.state.workModelSort===3)  {
        sortClient=this.state.clients.filter((item,i)=>item.balance<=0); 
      }
      

    var clientsCode=<table> 
     {  sortClient.map(client=>
      <MobileClient key={client.id} info={client} />
    )}
    </table>

    return(
      <div className={'out_border'}>
        <input type={'button'} value={'Velcom'} onClick={this.changeNameCompany} />
        <input type={'button'} value={'MTS'}  onClick={this.changeNameCompany} />
        <p>Компания {this.state.nameCompany}</p>
        <hr/>

        <input type={'button'} value={'Все'} id={1}  onClick={this.sortList} />
        <input type={'button'} value={'Активные'} id={2}  onClick={this.sortList} />
        <input type={'button'} value={'Заблокированные'} id={3}  onClick={this.sortList} />
        <hr/>

       { clientsCode}

       <input type={'button'} value={'Добавить клиента'} onClick={this.EOaddClient} />
       <br/>
       <br/>

      {
        (this.state.workModelFormField===1 )
          ?null
          :<FormField key={this.state.iChooseClient.id}  iChooseClient={ 
            (this.state.iChooseClient)
            ?this.state.iChooseClient
            :false} workModelFormField={this.state.workModelFormField}>

          </FormField>
      }

      </div>
    )
  }

}

export default MobileCompany;