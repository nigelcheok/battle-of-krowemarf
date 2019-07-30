import React, {useEffect, useState} from 'react';

import { BrowserRouter as Router, Route, } from 'react-router-dom';
import { ClansListPage } from "./ClansListPage";
import { ClanDetailsPage } from "./ClanDetailsPage";

import ClanConstants from '../Constants/ClanConstants';
import { Navbar } from '../Components/Navbar/Navbar';
import { SectionHeader } from '../Components/Section/SectionHeader/SectionHeader';
import { TeamToggleButton } from '../Components/Button/TeamToggleButton/TeamToggleButton';
import { Footer } from '../Components/Footer/Footer';
// import { OutlineButton } from "../Components/Button/OutlineButton/OutlineButton";

export function BaseLayout() {
  const [currClan, setCurrClan] = useState(ClanConstants.allClans[0]);

  function handleClanChange(newClan) {
    setCurrClan(newClan);
  }

  return (
    <Router>
      <div style={BaseLayoutStyle()}>
      <Navbar/>

      <div className="container">
        <div className="mt-5"/>
        <div className="d-sm-flex justify-content-between align-items-end">
          <SectionHeader id="clan-header" text={`${currClan.clanName} War Room`}/>
          <div className="mt-3 mt-sm-0">
            <div className="text-sm-right" style={AllianceSwitchTextStyle()}>
               Switch Alliance
            </div>
            <TeamToggleButton teams={ClanConstants.allClans} currTeam={currClan} onClanChange={handleClanChange}/>
          </div>
        </div>
      </div>

      <Route exact path="/" render={() => (<ClansListPage currClan={currClan}/>)}/>
      <Route path="/:id" component={ClanDetailsPage} />

      <Footer/>
      </div>
    </Router>
  );

  function BaseLayoutStyle() {
    return {
      position: 'relative',
      minHeight: '100vh',
    }
  }

  function AllianceSwitchTextStyle() {
    return {
      textTransform: 'uppercase',
      fontSize: '.8rem',
      fontWeight: '600',
      letterSpacing: '.5px',
      color: 'rgb(142, 142, 143)',
      marginBottom: '3px',
    }
  }
}
