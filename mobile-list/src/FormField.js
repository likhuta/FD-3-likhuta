
import React from 'react';
import './FormField.css';
import {channelEvents} from './events';


class FormField extends React.PureComponent {

  constructor(props) {
    super(props);
    this.inputName = React.createRef();
    this.inputSerName = React.createRef();
    this.inputSecondNameClient = React.createRef();
    this.inputBalance = React.createRef();

  }

  state={
   workModelFormField:this.props.workModelFormField,
    // 1 - форма не отображается
    clientInfo:this.props.iChooseClient
  }

  saveClient='saveClient';
  addClient='addClient';

  EOsaveClient=()=>{
    // собрать введенные данные в едино из формы
    let abc=(this.state.workModelFormField===3)?Date.now():this.state.clientInfo.id
      var newClient={
        id:abc,
        nameClient:this.inputName.current.value,
        serNameClient:this.inputSerName.current.value,
        secondNameClient: this.inputSecondNameClient.current.value,
        balance:+this.inputBalance.current.value,
      
  
    }
   channelEvents.emit(this.saveClient,newClient)

  }

  componentWillReceiveProps = (newProps) => {
    this.setState({clientInfo:newProps.iChooseClient});
  };


  clearForm=()=>{
    this.inputName.current.value = '';
    this.inputSerName.current.value='';
    this.inputSecondNameClient.current.value='';
    this.inputBalance.current.value=''

  }

  render(){

    const {nameClient ,serNameClient, secondNameClient, balance } = this.state.clientInfo
    console.log( 'render FormField')

    return(
      <div>
        <span> Имя </span>
      <input type={'text'} defaultValue={nameClient} ref={this.inputName} /> <br/>
    
      <span> Фамилия </span>
      <input type={'text'} defaultValue={serNameClient}  ref={this.inputSerName} /> <br/>
    
      <span> Отчество </span>
      <input type={'text'}  defaultValue={secondNameClient} ref={this.inputSecondNameClient} /> <br/>
    
      <span> Баланс </span>
      <input type={'text'}  defaultValue={balance}  ref={this.inputBalance} /> <br/>
     
      <input type='button' value={ 'Сохранить'} onClick={this.EOsaveClient} />
      <input type='button' value={ 'Отмена'} onClick={this.clearForm} />


      </div>


    )
  }

}

export default FormField;