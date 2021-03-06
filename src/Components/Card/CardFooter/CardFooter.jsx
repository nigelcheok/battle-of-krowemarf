import React from 'react';

import { GroupButton } from '../../Button/GroupButton/GroupButton';

export function CardFooter(props) {
  return (
    <div className="card-footer" style={CardFooterStyle()}>
      { props.clanDetails &&
        <div>
          <GroupButton label="Stars" value={props.clanDetails.starsCount} icon="fa-star"/>
          <div style={CardFooterDividerStyle()}/>
          <GroupButton label="Issues" value={props.clanDetails.issuesCount} icon="fa-exclamation-circle"/>
          <div style={CardFooterDividerStyle()}/>
          <GroupButton label="Forks" value={props.clanDetails.forksCount} icon="fa-code-branch"/>
          <div style={CardFooterDividerStyle()}/>
          <GroupButton label="Pull Requests" value={props.clanDetails.pullRequestsCount}
                       icon="fa-code-branch vertical-flip" flipIcon/>
        </div>
      }
    </div>
  );
}


function CardFooterStyle() {
  return {
    // borderTop: '0',
  }
}

function CardFooterDividerStyle() {
  return {
    display: 'inline-block',
    padding: '0 20px'
  }
}
