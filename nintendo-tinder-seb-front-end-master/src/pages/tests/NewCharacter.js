import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import NewCharacter from '../NewCharacter'
import { mount } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NewCharacter />, div)
})

it('has a name input', ()=>{
  const component = mount(<NewCharacter />)
 expect(component.find('label#name').text()).toBe("Name")
})

it('has a age input', ()=>{
  const component = mount(<NewCharacter />)
  expect(component.find('label#age').text()).toBe("Age")
})

it('has a world input', ()=>{
  const component = mount(<NewCharacter />)
  expect(component.find('label#world').text()).toBe("World")
})

it('has a enjoys input', ()=>{
  const component = mount(<NewCharacter />)
  expect(component.find('label#enjoys').text()).toBe("Enjoys")
})

it('has a submit button', ()=>{
  const component = mount(<NewCharacter />)
  expect(component.find('button#submit').text()).toBe("Create Character Profile")
})
