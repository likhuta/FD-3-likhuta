

import {EOsaveClient} from './forTestImmutation';

test('проверка EOsaveClient ', () => {
  let client= 
      {id:589, nameClient:'Борис', serNameClient:'Смирнов', 
      secondNameClient:'Геннадьевич' , balance:50000}; 

      let all=[ 
        {id:101, nameClient:'Иван', serNameClient:'Краснов', secondNameClient:'Сергеевич' , balance:200}, 
        {id:105, nameClient:'Сергей', serNameClient:'Зайцев', secondNameClient:'Владимирович' , balance:250}, 
        {id:1215, nameClient:'Мария', serNameClient:'Иванова', secondNameClient:'Александровна' , balance:-10}, 
        {id:589, nameClient:'Борис', serNameClient:'Смирнов', secondNameClient:'Геннадьевич' , balance:50}, 
    
        ]; 

  // добавили нового
  let workModel2=2;

    // отредактировали клиента, котоый есть
    let workModel3=3;

  expect(EOsaveClient(all,client,workModel2)).not.toEqual(all)
  expect(EOsaveClient(all,client,workModel3)).not.toEqual(all)


});



