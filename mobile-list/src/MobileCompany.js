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
    // 2 выбрали элемент для редактирования
    workModelSort:1,
    //1 -  показывает всех клиентов
    chooseClient:'',
  }

  saveClient='saveClient';
  chooseClient='chooseClient';
  deleteClient='deleteClient';
  addClient='addClient';

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
    console.log('EOsaveClient', param);
    // сохранить нового/измененного клиента
    // нажата кнопка сохранить
  }

  EOchooseClient=(id)=>{
    console.log('EOchooseClient', id)
    // редактировали клиента
  }

  EOdeleteClient=(id)=>{
    console.log('EOdeleteClient', id)
    // нажата кнопка удалить клиента из списка
  }

  EOaddClient=()=>{
    channelEvents.emit(this.addClient,)
  }

  render(){

    console.log("MobileCompany render");
    console.log(this.state.clients);

    var clientsCode=<table> 
     {  this.state.clients.map(client=>
      <MobileClient key={client.id} info={client} />
    )}
    </table>
    
   
    


    return(
      <div className={'out_border'}>
        <input type={'button'} value={'Velcom'} />
        <input type={'button'} value={'MTS'} />
        <p>Компания {this.state.nameCompany}</p>
        <hr/>

        <input type={'button'} value={'Все'} />
        <input type={'button'} value={'Активные'} />
        <input type={'button'} value={'Заблокированные'} />
        <hr/>

       { clientsCode}

       <input type={'button'} value={'Добавить клиента'} onClick={this.EOaddClient} />
       <br/>
       <br/>


      <FormField>

      </FormField>





      </div>

      
    )
  }

}

export default MobileCompany;