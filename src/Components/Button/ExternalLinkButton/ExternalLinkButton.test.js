import React from 'react';
import { shallow } from 'enzyme';
import { ExternalLinkButton } from './ExternalLinkButton';

describe('ExternalLinkButton', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<ExternalLinkButton/>);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with name and description', () => {
    const component = shallow(<ExternalLinkButton link="http://google.com" icon="test" text="test" description="test description"/>);
    expect(component).toMatchSnapshot();
  });
});
