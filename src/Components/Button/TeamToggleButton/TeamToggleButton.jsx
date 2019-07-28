import React from 'react';

export function TeamToggleButton(props) {
  return (
    <div className="btn-group" role="group" aria-label="">
      { props.teams.map((team,index) => {
          return (
            <button
              key={index}
              type="button"
              className={`btn btn-outline-primary font-weight-bold ${props.currTeam === team ? 'active' : ''}`}
              onClick={ () => { props.onClanChange(team) } }
            >
             <div className={`fab ${team.clanIcon} fa-1x`} style={TeamToggleButtonIconStyle()}/>
             <div className="font-size-smaller display-inline-block">{ team.clanName }</div>
            </button>
          )
       })
     }
    </div>
  );
}

function TeamToggleButtonIconStyle() {
  return {
    display: 'inline-block',
    marginRight: '6px',
  }
}
