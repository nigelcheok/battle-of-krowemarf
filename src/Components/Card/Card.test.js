import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './Card';
import ClanConstants from '../../Constants/ClanConstants';

describe('Card', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<Card/>);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with props', () => {
    const clanDetailsData = {
      clan: ClanConstants.allClans[0],
      id: undefined,
      name: 'react',
      starsCount: 1,
      forksCount: 2,
      issuesCount: 3,
      pullRequestsCount: 4,
    };

    const component = shallow(<Card title="test" description="test description" clanDetails={clanDetailsData}/>);
    expect(component).toMatchSnapshot();
  });
});