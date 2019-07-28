import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ClansListPage } from "./ClansListPage";
import { ClanDetailsPage } from "./ClanDetailsPage";

import ClanConstants from '../Constants/ClanConstants';
import { Navbar } from '../Components/Navbar/Navbar';
import { SectionHeader } from '../Components/Section/SectionHeader/SectionHeader';
import { TeamToggleButton } from '../Components/Button/TeamToggleButton/TeamToggleButton';

export function BaseLayout() {
  const [currClan, setCurrClan] = useState(ClanConstants.allClans[0]);

  function handleClanChange(newClan) {
    setCurrClan(newClan);
  }

  return (
    <div>
      <Navbar/>

      <div className="container">
        <div className="mt-5"/>
        <div className="d-flex justify-content-between">
          <SectionHeader text={`${currClan.clanName} War Room`}/>
          <TeamToggleButton teams={ClanConstants.allClans} currTeam={currClan} onClanChange={handleClanChange}/>
        </div>
      </div>

      <Router>
        <Route exact path="/" render={() => (<ClansListPage currClan={currClan}/>)}/>
        <Route exact path="/:id" component={ClanDetailsPage} />
      </Router>
    </div>
  )
}