import React from 'react';
import { shallow } from 'enzyme';

import { TeamToggleButton } from './TeamToggleButton';
import ClanConstants from "../../../Constants/ClanConstants";

const clickFn = jest.fn();

describe('TeamToggleButton', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<TeamToggleButton/>);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with teams and currteam', () => {
    const component = shallow(<TeamToggleButton teams={ClanConstants.allClans} currTeam={ClanConstants.allClans[1]} onClanChange={clickFn}/>);

    component.find('button#team-Angular')
      .simulate('click');

    expect(clickFn).toHaveBeenCalled();
    expect(component).toMatchSnapshot();
  });
});