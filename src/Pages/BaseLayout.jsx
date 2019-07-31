import React, {useState} from 'react';

import { BrowserRouter as Router, Route, } from 'react-router-dom';
import { ClansListPage } from "./ClansListPage";
import { ClanDetailsPage } from "./ClanDetailsPage";

import ClanConstants from '../Constants/ClanConstants';
import { PageHeader } from '../Components/Page/PageHeader/PageHeader';
import { Navbar } from '../Components/Navbar/Navbar';
import { Footer } from '../Components/Footer/Footer';

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
        <PageHeader currClan={currClan} onClanChange={handleClanChange}/>
      </div>

      <Route exact path="/" render={() => (<ClansListPage currClan={currClan} onClanChange={handleClanChange}/>)}/>
      <Route path="/:id" component={ClanDetailsPage}/>

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
}
