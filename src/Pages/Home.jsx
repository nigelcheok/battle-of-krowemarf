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
      {/*<Hero image={HeroImage} title="Battle of Krowemarf" description="The battle between React, Angular and Vue."/>*/}
      <div className="container">
        <div style={SectionStyle()}>
          <SectionHeader text="React War Room"/>
          <SectionSubheader text="Allies"/>
        </div>
      </div>
      <div className="container">
        <Card title="React" description="By Facebook"/>
      </div>
    </div>
  );
}

function SectionStyle() {
  return {
    marginTop: '2.5rem',
  }
}
