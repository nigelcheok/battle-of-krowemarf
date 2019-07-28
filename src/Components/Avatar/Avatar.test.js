import React from 'react';
import { shallow } from 'enzyme';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<Avatar/>);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with name and description', () => {
    const component = shallow(<Avatar name="test" description="test description"/>);
    expect(component).toMatchSnapshot();
  });
});