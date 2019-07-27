import React from 'react';

import { GroupButton } from '../../Button/GroupButton/GroupButton';

export function CardFooter(props) {
  return (
    <div className="card-footer">
      <GroupButton label="Stars" value="0" icon="star"/>
      <GroupButton label="Issues" value="0" icon="exclamation-circle"/>
      <GroupButton label="Forks" value="0" icon="code-fork"/>
      <GroupButton label="Pull Requests" value="0" icon="code-branch"/>
    </div>
  );
}


function CardFooterStyle() {
  return {
    borderTop: '0',
  }
}
