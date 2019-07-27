import React, { useState, useEffect } from 'react';
import { Navbar } from '../Components/Navbar/Navbar';
// import { Hero } from '../Components/Hero/Hero';
// import HeroImage from '../Images/hero5.jpg'
// import { Section } from '../Components/Section/Section';
import { SectionHeader } from '../Components/Section/SectionHeader/SectionHeader';
import { SectionSubheader } from '../Components/Section/SectionSubheader/SectionSubheader';
import { Card } from '../Components/Card/Card';

import { ClanService } from '../Services/ClanService';
import ClanConstants from '../Constants/ClanConstants';

import { TeamToggleButton } from "../Components/Button/TeamToggleButton/TeamToggleButton";

export function Home() {

  const [Clans, setClans] = useState(undefined);
  const [currClan, setCurrClan] = useState('React');

  async function getAllClans() {
    const allClansPromises = ClanConstants.allClans.map(clan => {
      ClanService.getClanInfo(clan.owner, clan.repoName);
    });
    const allClans = await Promise.all(allClansPromises);
    setClans(allClans);

    // const reactClan = await ClanService.getClanInfo('facebook', 'react');
    // const vueClan = await ClanService.getClanInfo('vuejs', 'vue');
    // const angularClan = await ClanService.getClanInfo('angular', 'angular.js');
    //
    // setClans([reactClan, vueClan, angularClan]);
  }

  function handleClanChange(newClan) {
    setCurrClan(newClan);
  }

  // componentDidMount
  useEffect( () => {
    getAllClans();
  }, []);

  return (
    <div>
      <Navbar/>
      {/*<Hero image={HeroImage} title="Battle of Krowemarf" description="The battle between React, Angular and Vue."/>*/}
      <div className="container">
        <div style={SectionStyle()}>
          <div className="d-flex justify-content-between">
            <SectionHeader text={`${currClan} War Room`}/>
            <TeamToggleButton teams={ClanConstants.allClans} currTeam={currClan} onClanChange={handleClanChange}/>
          </div>
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
