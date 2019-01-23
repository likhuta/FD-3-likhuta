import React from 'react';
//import ReactDOM from 'react-dom';
import App from './App';
import MobileCompany from './MobileCompany';

// его нужно установить
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';


it('renders without crashing', () => {
  const component = renderer.create(
    <App />
  );
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  /*

  const buttonElem = component.root.find( el => el.props.id == 2 ); 
  buttonElem.props.onClick();

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  ReactTestUtils.Simulate.click(buttonElem,{id:2})
  */

 const value = 2;
 const onClick = jest.fn();
 const wrapper = shallow(
     <MobileCompany />
 );

 expect(wrapper).toMatchSnapshot();

 wrapper.find({ id: 2 }).simulate('click', {
 target: { value },
});

expect(onClick).toBeCalledWith(value);

});
