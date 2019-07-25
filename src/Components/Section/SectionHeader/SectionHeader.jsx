import React from 'react';

export function SectionHeader(props) {
 return (
   <div style={SectionHeaderStyle()}>
     { props.text }
   </div>
 );
}

function SectionHeaderStyle() {
  return {
    fontSize: '2.2rem',
    color: 'rgb(37, 39, 41)',
    fontWeight: '600',
  }
}
