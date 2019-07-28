import React from 'react';
import { shallow } from 'enzyme';
import { Navbar } from './Navbar';

describe('Navbar', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<Navbar/>);
    expect(component).toMatchSnapshot();
  });
});