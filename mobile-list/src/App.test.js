import React from 'react';
// import ReactDOM from 'react-dom';
import App from '../src/App';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {

   // создаём тестовую версию компонента
   const component = renderer.create(
    <App />
  );

 
  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

    // найдём в вёрстке компонента саму кнопку
    const buttonElem = component.root.find( el => el.props.id==1 /*&& el.props.aaa == 'bbb'*/ ); 
    // и "нажмём" на неё
    buttonElem.props.onClick();
  
    // получаем уже изменённый снэпшот
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
  


 
});

