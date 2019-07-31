import React from 'react';
import ClanConstants from '../../../Constants/ClanConstants';
import { SectionHeader } from '../../Section/SectionHeader/SectionHeader';
import { TeamToggleButton } from '../../Button/TeamToggleButton/TeamToggleButton';
import { OutlineButton } from "../../Button/OutlineButton/OutlineButton";

export function PageHeader(props) {

  const isMainPage = (window.location.pathname === '/');

  return (
    <div className="mt-5">
      <div className="d-sm-flex justify-content-between align-items-end">
        <SectionHeader id="clan-header" text={`${props.currClan.clanName} War Room`}/>
        { isMainPage &&
          <div className="mt-3 mt-sm-0">
            <div className="text-sm-right" style={AllianceSwitchTextStyle()}>
              Switch Alliance
            </div>
            <TeamToggleButton teams={ClanConstants.allClans} currTeam={props.currClan} onClanChange={props.onClanChange}/>
          </div>
        }
        { !isMainPage &&
          <div className="mt-3 mt-sm-0">
            <OutlineButton text="Back to Main Listing"/>
          </div>
        }
      </div>
    </div>
  )
}

function AllianceSwitchTextStyle() {
  return {
    textTransform: 'uppercase',
    fontSize: '.8rem',
    fontWeight: '600',
    letterSpacing: '.5px',
    color: 'rgb(142, 142, 143)',
    marginBottom: '3px',
  }
}
