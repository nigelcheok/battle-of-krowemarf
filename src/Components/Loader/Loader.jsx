import React from 'react';

export function Loader() {
  return (
    <div className="spinner-grow text-secondary" style={LoaderStyle()} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
}

function LoaderStyle() {
  return {
    width: '5rem',
    height: '5rem',
  }
}