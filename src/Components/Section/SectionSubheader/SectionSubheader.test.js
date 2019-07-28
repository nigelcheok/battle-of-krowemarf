import React from 'react';
import { shallow } from 'enzyme';
import { SectionSubheader } from './SectionSubheader';

describe('SectionSubheader', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<SectionSubheader/>);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with props', () => {
    const component = shallow(<SectionSubheader text="test"/>);
    expect(component).toMatchSnapshot();
  });
});