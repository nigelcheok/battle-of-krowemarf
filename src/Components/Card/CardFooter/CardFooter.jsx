import React from 'react';

import { GroupButton } from '../../Button/GroupButton/GroupButton';

export function CardFooter(props) {
  return (
    <div className="card-footer">
      <GroupButton label="Stars" value="0" icon="fa-star"/>
      <GroupButton label="Issues" value="0" icon="fa-exclamation-circle"/>
      <GroupButton label="Forks" value="0" icon="fa-code-branch"/>
      <GroupButton label="Pull Requests" value="0" icon="fa-code-branch vertical-flip" flipIcon/>
    </div>
  );
}


function CardFooterStyle() {
  return {
    borderTop: '0',
  }
}
