import React from 'react';

export function OutlineButton(props) {
  return (
    <button type="button" className="btn btn-outline-primary font-weight-bold">
      { props.text }
    </button>
  );
}