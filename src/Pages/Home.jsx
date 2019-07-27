import React, { useState, useEffect } from 'react';
import { Navbar } from '../Components/Navbar/Navbar';
// import { Hero } from '../Components/Hero/Hero';
// import HeroImage from '../Images/hero5.jpg'
// import { Section } from '../Components/Section/Section';
import { SectionHeader } from '../Components/Section/SectionHeader/SectionHeader';
import { SectionSubheader } from '../Components/Section/SectionSubheader/SectionSubheader';
import { Card } from '../Components/Card/Card';

import { ClanService } from '../Services/ClanService';

export function Home() {

  async function getAllClans() {
    const reactClan = await ClanService.getClanInfo('facebook', 'react');
    const angularClan = await ClanService.getClanInfo('angular', 'angular.js');
    const vueClan = await ClanService.getClanInfo('vuejs', 'vue');

    return [reactClan, angularClan, vueClan];
  }

  const [Clans, setClans] = useState(undefined);

  // const updateClans = () => {
  //   setClans(getClans());
  // };

  useEffect(() => {
    setClans(getAllClans());
  });

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
