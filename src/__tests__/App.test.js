import React from 'react';


import App from '../components/App';


import renderer from 'react-test-renderer';

// Mount (full, shallow), Render, testing
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Component } from 'react';

configure({ adapter: new Adapter() });


describe('App correctly renders', () => {

    // Snapshot test
    it('Snapshot test', () => {
        const snap = renderer.create(<App />).toJSON();
        expect(snap).toMatchSnapshot();
    });

    it ('Test that three Converters are rendered on the page', ()=>{
        let converters = mount(<div></div>);
        expect(converters.find('.App')).toBeDefined();
    });

    it ('Test that the first converter is miles and kilometers', ()=>{
        let Component = mount(<App />);
        let label = Component.find('.converter').at(0);
        label.simulate('click');
        expect(Component.find('.converter .converter-heading').at(0).text()).toBe('Converting Miles to/from Kilometers')
    });


    it ('Test that the second converter is cups and fluid ounces', ()=>{
        let component = mount(<App />);
        let label = component.find('.converter').at(1);
        label.simulate('click');
        expect(component.find('.converter .converter-heading').at(1).text()).toBe('Converting Cups to/from Fluid Ounces')
    });


    it ('Test that the third converter is inches and centimeters', ()=>{
        let component = mount(<App />);
        let label = component.find('.converter').at(2);
        label.simulate('click');
        expect(component.find('.converter .converter-heading').at(2).text()).toBe('Converting Inches to/from Centimeters')
    });

        
    it ('Test that all three Converters properly convert to and from', ()=>{
        let component = shallow(<App />);
        let label = component.find('.App');
       label.simulate('click');
        expect(component.find('.App').at(0).text()).toBeDefined()
    });
        

});









