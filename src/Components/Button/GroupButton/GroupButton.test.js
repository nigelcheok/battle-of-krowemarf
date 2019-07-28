import React from 'react';
import { shallow } from 'enzyme';
import { GroupButton } from './GroupButton';

describe('GroupButton', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<GroupButton/>);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with label and value', () => {
    const component = shallow(<GroupButton label="test" value="value description"/>);
    expect(component).toMatchSnapshot();
  });
});