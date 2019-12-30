
import React from 'react';


import Converter from '../components/Converter';


import renderer from 'react-test-renderer';

// Mount (full, shallow), Render, testing
import { configure, mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe ('Converter correctly renders', ()=>{

  
  it ('Snapshot test', ()=>{

    const snap = renderer.create(<Converter />).toJSON();
    expect(snap).toMatchSnapshot();
  });

  it ('Test that changing the x input field properly changes the state', ()=>{
    let Component = mount(<Converter />);
    let label = Component.find('.x-label #x').at(0);
    label.simulate('change');
    expect(Component.state('rate')).toBe(1)
  });

  it ('Test that changing the y input field properly changes the state', ()=>{
    let Component = mount(<Converter />);
    let input = Component.find('.y-label #y').at(0);
    input.simulate('change');
    expect(Component.state('rate')).toEqual(1)
  });
    
 it ('Test that the component renders two input fields', ()=>{
   
   let component = render(<Converter />);
   expect(component.find('.x-label .y-label')).toBeDefined();
 });








it ('Test that the labels are correctly set', ()=>{
  let Component = shallow(<Converter />);
  expect(Component.state('x')).toBeDefined();
  expect(Component.state('y')).toBeDefined();

})


})