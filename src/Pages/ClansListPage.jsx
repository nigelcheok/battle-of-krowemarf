import React, { useState, useEffect } from 'react';
import { SectionSubheader } from '../Components/Section/SectionSubheader/SectionSubheader';
import { Card } from '../Components/Card/Card';
import { CardLoader } from '../Components/Loader/CardLoader/CardLoader';

import { ClanService } from '../Services/ClanService';
import ClanConstants from '../Constants/ClanConstants';

export function ClansListPage(props) {
  const [isLoading, setLoader] = useState(true);
  const [Clans, setClans] = useState([]);

  async function getAllClans() {
    const allClansPromises = ClanConstants.allClans.map(async clan => {
      const clanDetails = await ClanService.getClanDetails(clan);
      return await clanDetails;
    });
    const allClans = await Promise.all(allClansPromises);
    console.log(allClans);
    setClans(allClans);
    setLoader(false);
  }

  useEffect( () => {
    getAllClans();
  }, []);

  return (
    <div>
      <div className="container">
        <SectionSubheader text="Allies"/>
      </div>

      <div className="container">
        { isLoading && <CardLoader/> }

        { Clans.filter(clan => clan.clan === props.currClan).map(clan => {
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

      <div className="container mt-4">
        <SectionSubheader text="Enemies"/>
      </div>

      <div className="container">
        { isLoading && <CardLoader/> }

        {
          Clans.filter(clan => clan.clan !== props.currClan).map(clan => {
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
