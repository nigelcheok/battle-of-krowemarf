import React from 'react';
import { Navbar } from '../Components/Navbar/Navbar';
import { Hero } from '../Components/Hero/Hero';
import HeroImage from '../Images/hero5.jpg'
// import { Section } from '../Components/Section/Section';
import { SectionHeader } from '../Components/Section/SectionHeader/SectionHeader';
import { SectionSubheader } from '../Components/Section/SectionSubheader/SectionSubheader';
import { Card } from '../Components/Card/Card';

export function Home() {
  return (
    <div>
      <Navbar/>
      {/*<h1>Battle of Krowemarf</h1>*/}
      <Hero image={HeroImage} title="Battle of Krowemarf" description="The battle between React, Angular and Vue."/>
      {/*<Section title="React War Room" description="You are in Team React."/>*/}
      <div className="container">
        <div style={SectionStyle()}>
          <SectionHeader text="React War Room"/>
          <SectionSubheader text="Allies"/>
        </div>
      </div>
      <div className="container">
        <Card/>
      </div>
    </div>
  );
}

function SectionStyle() {
  return {
    marginTop: '2.5rem',
  }
}
