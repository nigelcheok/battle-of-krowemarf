import React from 'react';

export function SectionSubheader(props) {
  return (
    <div style={SectionSubheaderStyle()}>
      { props.text }
    </div>
  );
}

function SectionSubheaderStyle() {
  return {
    marginTop: '2.25rem',
    // marginBottom: '.5rem',
    fontSize: '1.5rem',
    color: 'rgb(37, 39, 41)',
    fontWeight: '600',
  }
}
