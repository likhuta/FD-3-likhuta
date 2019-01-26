import React from 'react';
import MobileClient from './MobileClient';
import MobileCompany from './MobileCompany';


import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json'



   describe('Test MobileClient', () => { 
    let client= 
     {id:589, nameClient:'Борис', serNameClient:'Смирнов', secondNameClient:'Геннадьевич' , balance:50}; 

      it('with shallow', () => {
        let mobileClient = shallow(<MobileClient  key={client.id} info={client} />)
        expect(toJson(mobileClient)).toMatchSnapshot();

      })



      it('MobileClient with renderer.create ',()=>{
        let wrapper=renderer.create(<MobileClient  key={client.id} info={client}/> )
        let tree = wrapper.toJSON();
        expect(tree).toMatchSnapshot();
      })

      it('MobileClient with render ',()=>{
        let wrapper=render(<MobileClient  key={client.id} info={client}/> )
        expect(toJson(wrapper)).toMatchSnapshot();
      })

    
  })

  describe('Mobile Company', () => { 
      let companyName='Velcom';
      let clientsArr=[ 
      {id:101, nameClient:'Иван', serNameClient:'Краснов', secondNameClient:'Сергеевич' , balance:200}, 
      {id:105, nameClient:'Сергей', serNameClient:'Зайцев', secondNameClient:'Владимирович' , balance:250}, 
      {id:1215, nameClient:'Мария', serNameClient:'Иванова', secondNameClient:'Александровна' , balance:-10}, 
      {id:589, nameClient:'Борис', serNameClient:'Смирнов', secondNameClient:'Геннадьевич' , balance:50}, 

      ]; 

      let wrapper=mount(<MobileCompany   name={companyName} clients={clientsArr}/> )

        it('Do snapshot with all elemnt ', ()=>{
        expect(toJson(wrapper.find('table'))).toMatchSnapshot();

        })

       

        it('check input \'Активные \' ', ()=>{
          // найдем кнопку
          let buttonActive=wrapper.find({ value: 'Активные'});

          // нажмем
          buttonActive.simulate("click", { target: { id: 2 }})

          // передалось ли значение 2 - для режиа активых клиентов
          expect(wrapper.state().workModelSort).toEqual(2);

          // вывод только положительных
          expect(toJson(wrapper.find('table'))).toMatchSnapshot();

          // проверим положительный ли у них баланс
           wrapper.find({ key:'balance'}).forEach((node) => {
             expect(node.text()).toBeGreaterThan(0);
           });
        })

        it('check input MTS ', ()=>{
          let buttonActive=wrapper.find({ value:'MTS'});
          buttonActive.simulate("click", { target: { value: 'MTS' }})
          expect(wrapper.find('p').first().text()).toEqual('Компания MTS')
        })


    
  })


