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

export function ClansListPage() {
  const [currClan, setCurrClan] = useState(ClanConstants.allClans[0]);
  const [Clans, setClans] = useState([]);

  async function getAllClans() {
    const allClansPromises = ClanConstants.allClans.map(async clan => {
      const clanDetails = await ClanService.getClanDetails(clan);
      return await clanDetails;
    });
    console.log(allClansPromises);
    const allClans = await Promise.all(allClansPromises);
    console.log(allClans);
    setClans(allClans);
  }

  function handleClanChange(newClan) {
    setCurrClan(newClan);
  }

  useEffect( () => {
    getAllClans();
  }, []);

  return (
    <div>
      <Navbar/>
      {/*<Hero image={HeroImage} title="Battle of Krowemarf" description="The battle between React, Angular and Vue."/>*/}
      <div className="container">
        <div style={SectionStyle()}/>
          <div className="d-flex justify-content-between">
            <SectionHeader text={`${currClan.clanName} War Room`}/>
            <TeamToggleButton teams={ClanConstants.allClans} currTeam={currClan} onClanChange={handleClanChange}/>
          </div>
      </div>

      { Clans.filter(clan => clan.clan === currClan).length &&
        <div className="container">
          <SectionSubheader text="Allies"/>
        </div>
      }

      <div className="container">
        { Clans.filter(clan => clan.clan === currClan).map(clan => {
            return (
              <Card
                key={clan.id}
                title={clan.clan.clanName}
                description={`By ${clan.clan.ownerName}`}
                clanDetails={clan}
              />
            )
          })
        }
      </div>

      { Clans.filter(clan => clan.clan !== currClan).length &&
      <div className="container">
        <SectionSubheader text="Enemies"/>
      </div>
      }

      <div className="container">
        { Clans.filter(clan => clan.clan !== currClan).map(clan => {
          return (
            <Card
              key={clan.id}
              title={clan.clan.clanName}
              description={`By ${clan.clan.ownerName}`}
              clanDetails={clan}
            />
          )
        })
        }
      </div>

    </div>
  );
}

function SectionStyle() {
  return {
    marginTop: '2.5rem',
  }
}
