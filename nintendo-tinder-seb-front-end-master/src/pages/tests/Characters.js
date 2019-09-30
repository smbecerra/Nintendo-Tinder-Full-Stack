import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Characters from '../Characters'
import { mount } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

const characters = [
  {
    id: 1,
    name: 'Morris',
    age: 2,
    world: 'Mushroom',
    enjoys: "Long walks on the beach."
  },
  {
    id: 2,
    name: 'Paws',
    age: 4,
    world: 'Mushroom',
    enjoys: "Snuggling by the fire."
  },
  {
    id: 3,
    name: 'Mr. Meowsalot',
    age: 12,
    world: 'Mushroom',
    enjoys: "Being in charge."
  }
]

it('Characters renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Characters characters={characters} />, div);
});

it('Renders the characters', ()=>{
  const component = mount(<Characters characters={characters} />)
  const headings = component.find('h4 > .character-name')
  expect(headings.length).toBe(3)
})
