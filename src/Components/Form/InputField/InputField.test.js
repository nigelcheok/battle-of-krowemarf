import React from 'react';
import { shallow } from 'enzyme';
import { InputField } from './InputField';

const clickFn = jest.fn();

describe('InputField', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<InputField/>);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with props', () => {
    const component = shallow(<InputField onQueryStringChanged={clickFn}/>);

    component.find('input')
      .simulate('change', {target: {value: 't'}})
      .simulate('change', {target: {value: 'te'}})
      .simulate('change', {target: {value: 'tes'}})
      .simulate('change', {target: {value: 'test'}});

    expect(clickFn).toHaveBeenCalledTimes(4);
    expect(component).toMatchSnapshot();
  });
});