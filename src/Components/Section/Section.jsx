import React from 'react';
import { SectionHeader } from './SectionDescription/SectionHeader';

export function Section(props) {
  return (
    <div className="container">
      <div style={SectionStyle()}>
        <SectionHeader text={props.title}/>
      </div>
    </div>
  );
}

function SectionStyle() {
  return {
    padding: '3.75rem 0',
  }
}
