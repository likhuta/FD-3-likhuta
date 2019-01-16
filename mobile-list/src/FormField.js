
import React from 'react';
import './FormField.css';
import {channelEvents} from './events';


class FormField extends React.PureComponent {

  constructor(props) {
    super(props);
    this.inputName = React.createRef();
    this.inputSurName = React.createRef();

  }

  state={
    workModelFormField:1,
    // 1 - форма не отображается
  }

  saveClient='saveClient';
  EOsaveClient=(EO)=>{
   console.log('EOsaveClient in field')
   channelEvents.emit(this.saveClient, 23)
   this.setNewInputAll()

  }


  componentDidMount =()=>{
    channelEvents.addListener(this.addClient, this.EOaddClient)
  }

  componentWillMount =()=>{
    channelEvents.removeListener(this.addClient, this.EOaddClient)
  }

  addClient='addClient';

  EOaddClient=()=>{
    console.log('EOaddClient in field')
    // показать форму, чтобы ввести данные нового клиента
  }

  setNewInputAll=()=>{
    console.log( this.inputName.current.value)
    console.log( this.inputSurName.current.value)

  }


  render(){


    return(
      <div>
        <span> name </span>
      <input type={'text'} defaultValue={'name'} ref={this.inputName} /> <br/>
    
      <span> surname </span>
      <input type={'text'} defaultValue={'surname'} ref={this.inputSurName} /> <br/>
    
      <span> secondname </span>
      <input type={'text'} defaultValue={'secondname'}  /> <br/>
    
      <span> balance </span>
      <input type={'text'} defaultValue={'balance'}  /> <br/>
     
      <input type='button' value={ 'Сохранить'} onClick={this.EOsaveClient} />
      <input type='button' value={ 'Отмена'} />


      </div>


    )
  }

}

export default FormField;