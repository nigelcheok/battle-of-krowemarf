import React from 'react';
import { SectionHeader } from './SectionHeader/SectionHeader';
import { SectionDescription } from './SectionDescription/SectionDescription';

export function Section(props) {
  return (
    <div className="container">
      <div style={SectionStyle()}>
        <SectionHeader text={props.title}/>
        <SectionDescription text={props.description}/>
      </div>
    </div>
  );
}

function SectionStyle() {
  return {
    padding: '3.75rem 0',
  }
}
