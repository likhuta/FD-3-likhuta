import React from 'react';
import './App.css';
import MobileCompany from './MobileCompany';


class App extends React.PureComponent {



 

  
  render() {

    let companyName='Velcom';
    let clientsArr=[ 
    {id:101, nameClient:'Иван', serNameClient:'Краснов', secondNameClient:'Сергеевич' , balance:200}, 
   {id:105, nameClient:'Сергей', serNameClient:'Зайцев', secondNameClient:'Владимирович' , balance:250}, 
    {id:1215, nameClient:'Мария', serNameClient:'Иванова', secondNameClient:'Александровна' , balance:-10}, 
   {id:589, nameClient:'Борис', serNameClient:'Смирнов', secondNameClient:'Геннадьевич' , balance:50}, 

    ]; 

    return (
    <MobileCompany 
    name={companyName}
    clients={clientsArr}
     /> 

    )

  }
  
}

export default App;
