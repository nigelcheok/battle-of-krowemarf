import React from 'react';

export function GroupButton(props) {
  return (
    <div className="btn-group" role="group" aria-label="" style={ GroupButtonStyle() }>
      <button type="button" className="btn btn-outline-secondary font-weight-bold" disabled>
        <div className={`fa ${props.icon} fa-1x`} style={GroupButtonIconStyle()}/>
        { props.label }
      </button>
      <button type="button" className="btn btn-outline-secondary font-weight-bold" disabled>{ props.value }</button>
    </div>
  );
}

function GroupButtonStyle() {
  return {
    marginRight: '12px',
  }
}

function GroupButtonIconStyle() {
  return {
    display: 'inline-block',
    marginRight: '6px',
  }
}
