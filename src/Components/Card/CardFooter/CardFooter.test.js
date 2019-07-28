import React from 'react';
import { shallow } from 'enzyme';
import { CardFooter } from './CardFooter';

describe('CardFooter', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<CardFooter/>);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with props clanDetails', () => {
    const clanDetailsData = {
      clan: undefined,
      id: undefined,
      name: undefined,
      starsCount: 1,
      forksCount: 2,
      issuesCount: 3,
      pullRequestsCount: 4,
    };

    const component = shallow(<CardFooter clanDetails={clanDetailsData}/>);
    expect(component).toMatchSnapshot();
  });
});