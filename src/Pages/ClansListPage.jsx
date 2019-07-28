import React, { useState, useEffect } from 'react';
import { SectionSubheader } from '../Components/Section/SectionSubheader/SectionSubheader';
import { Card } from '../Components/Card/Card';

import { ClanService } from '../Services/ClanService';
import ClanConstants from '../Constants/ClanConstants';

export function ClansListPage(props) {
  const [Clans, setClans] = useState([]);

  async function getAllClans() {
    const allClansPromises = ClanConstants.allClans.map(async clan => {
      const clanDetails = await ClanService.getClanDetails(clan);
      return await clanDetails;
    });
    const allClans = await Promise.all(allClansPromises);
    console.log(allClans);
    setClans(allClans);
  }

  useEffect( () => {
    getAllClans();
  }, []);

  return (
    <div>
      { Clans.filter(clan => clan.clan === props.currClan).length > 0 &&
        <div className="container">
          <SectionSubheader text="Allies"/>
        </div>
      }

      <div className="container">
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

      { Clans.filter(clan => clan.clan !== props.currClan).length > 0 &&
      <div className="container">
        <SectionSubheader text="Enemies"/>
      </div>
      }

      <div className="container">
        { Clans.filter(clan => clan.clan !== props.currClan).map(clan => {
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