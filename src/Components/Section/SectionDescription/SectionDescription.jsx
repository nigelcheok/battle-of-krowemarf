import React from 'react';

export function SectionDescription(props) {
  return (
    <div style={SectionDescriptionStyle()}>
      { props.text }
    </div>
  );
}

function SectionDescriptionStyle() {
  return {
    marginTop: '.25rem',
    fontSize: '1.2rem',
    color: 'rgb(37, 39, 41)',
    fontWeight: '200',
  }
}
