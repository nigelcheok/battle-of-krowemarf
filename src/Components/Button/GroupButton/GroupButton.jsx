import React from 'react';

export function GroupButton(props) {
  return (
     <div className="display-inline-block mt-2 mt-lg-0">
      <div className="btn-group" role="group" aria-label="" style={ GroupButtonStyle() }>
        <button type="button" className="btn btn-outline-transparent font-weight-bold" disabled style={DisabledButtonStyle()}>
          <div className={`fa ${props.icon} fa-1x`} style={GroupButtonIconStyle()}/>
          { props.label }
        </button>
        <button type="button" className="btn btn-outline-transparent" disabled style={DisabledButtonStyle()}>
          { props.value }
          </button>
      </div>
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

function DisabledButtonStyle() {
  return {
    pointerEvents: 'none',
  }
}
