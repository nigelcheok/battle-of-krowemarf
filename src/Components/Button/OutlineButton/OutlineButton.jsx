import React from 'react';
import { Link } from 'react-router-dom';

export function OutlineButton(props) {
  return (
    <Link to="/">
      <button type="button" className="btn btn-outline-primary font-weight-bold btn-lg">
        { props.text }
      </button>
    </Link>
  );
}