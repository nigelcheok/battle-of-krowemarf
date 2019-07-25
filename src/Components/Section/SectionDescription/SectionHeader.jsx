import React from 'react';

export function SectionHeader(props) {
 return (
   <div className="" style={SectionHeaderStyle()}>
     { props.text }
   </div>
 );
}

function SectionHeaderStyle() {
  return {
    fontSize: '2.25rem',
    color: 'rgb(37, 39, 41)',
    fontWeight: '600',
  }
}
