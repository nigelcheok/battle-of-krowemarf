import React, { useState, useEffect } from 'react';
import { SectionSubheader } from '../Components/Section/SectionSubheader/SectionSubheader';
import { Card } from '../Components/Card/Card';
import { Loader } from '../Components/Loader/Loader';

import { ClanService } from '../Services/ClanService';
import ClanConstants from '../Constants/ClanConstants';

export function ClanDetailsPage(routeInfo) {
  const [isLoading, setLoader] = useState(true);
  const [ClanDetails, setClanDetails] = useState(undefined);

  const clanRouteId = routeInfo.match.params.id;
  const clan = getClan(clanRouteId);

  function getClan(clanRouteId) {
    const clanInfo = ClanConstants.allClans.filter(clan => clan.clanName.toLowerCase() === clanRouteId);
    if (clanInfo.length) return clanInfo[0];
    return undefined;
  }

  async function getClanDetails(clan) {
    const clanDetails = await ClanService.getClanDetails(clan);
    console.log(clanDetails);
    setClanDetails(clanDetails);
    setLoader(false);
  }

  useEffect( () => {
    if (clan) {
      getClanDetails(clan);
    }
  }, []);

  return (
    <div>
      <div className="container">
        <SectionSubheader text={`${clan.clanName} Clan Details`}/>
      </div>

      <div className="container">
        { isLoading &&
        <Loader/>
        }

        { ClanDetails &&
          <Card
          title={ClanDetails.clan.clanName}
          description={`By ${ClanDetails.clan.ownerName}`}
          clanDetails={ClanDetails}
          />
        }
      </div>
    </div>
  );
}