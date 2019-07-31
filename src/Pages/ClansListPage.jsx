import React, { useState, useEffect } from 'react';
import { PageHeader } from '../Components/Page/PageHeader/PageHeader';
import { SectionSubheader } from '../Components/Section/SectionSubheader/SectionSubheader';
import { Card } from '../Components/Card/Card';
import { CardLoader } from '../Components/Loader/CardLoader/CardLoader';

import { ClanService } from '../Services/ClanService';
import ClanConstants from '../Constants/ClanConstants';

export function ClansListPage(props) {
  const [isLoading, setLoader] = useState(true);
  const [clans, setClans] = useState([]);

  async function getAllClans() {
    const allClansPromises = ClanConstants.allClans.map(async clan => {
      const clanDetails = await ClanService.getClanDetails(clan);
      return await clanDetails;
    });
    const allClans = await Promise.all(allClansPromises);
    setClans(allClans);
    setLoader(false);
  }

  useEffect( () => {
    getAllClans();
  }, []);

  return (
    <div>
      <div className="container">
        <PageHeader currClan={props.currClan} onClanChange={props.onClanChange}/>
      </div>

      <div className="container">
        <SectionSubheader text="Allies"/>
      </div>

      <div className="container">
        { isLoading && <CardLoader/> }

        { clans.filter(clan => clan.clan === props.currClan).map(clan => {
            return (
              <Card
                key={clan.id}
                title={clan.clan.clanName}
                description={`By ${clan.clan.ownerName}`}
                clanDetails={clan}
                id={`card-${clan.clan.clanName}`}
              />
            )
          })
        }
      </div>

      <div className="container mt-4">
        <SectionSubheader text="Enemies"/>
      </div>

      <div className="container">
        { isLoading && <CardLoader/> }

        {
          clans.filter(clan => clan.clan !== props.currClan).map(clan => {
            return (
              <Card
                key={clan.id}
                title={clan.clan.clanName}
                description={`By ${clan.clan.ownerName}`}
                clanDetails={clan}
                id={`card-${clan.clan.clanName}`}
              />
            )
          })
        }
      </div>

    </div>
  );
}
