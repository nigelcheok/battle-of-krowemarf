import React, { useState, useEffect } from 'react';
import { SectionSubheader } from '../Components/Section/SectionSubheader/SectionSubheader';
import { Card } from '../Components/Card/Card';
import { Loader } from '../Components/Loader/Loader';
import { Avatar } from "../Components/Avatar/Avatar";

import { ClanService } from '../Services/ClanService';
import ClanConstants from '../Constants/ClanConstants';
import {UserFactory} from "../Factories/UserFactory";

export function ClanDetailsPage(routeInfo) {
  const [isLoading, setLoader] = useState(true);
  const [ClanDetails, setClanDetails] = useState(undefined);
  const [ClanMembers, setClanMembers] = useState([]);

  const clanRouteId = routeInfo.match.params.id;
  const clan = getClan(clanRouteId);

  function getClan(clanRouteId) {
    const clanInfo = ClanConstants.allClans.filter(clan => clan.clanName.toLowerCase() === clanRouteId);
    if (clanInfo.length) return clanInfo[0];
    return undefined;
  }

  async function getClanDetails(clan) {
    const clanDetails = await ClanService.getClanDetails(clan);
    setClanDetails(clanDetails);

    const response = await ClanService.getRepoStarredUsers(clan.ownerName, clan.repoName);
    console.log(response);

    const clanMembers = UserFactory.createFromJsonArray(response.data);
    setClanMembers(clanMembers);
    console.log(clanMembers);

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
        <SectionSubheader text={`${ clan ? clan.clanName : ''} Clan Details`}/>
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

      <div className="container">
        <SectionSubheader text={`${ clan ? clan.clanName : ''} Clan Members`}/>
      </div>

      <div className="container">
        <div className="d-flex justify-content-between flex-wrap">
        { ClanMembers.map(member => {
          return (
            <Avatar key={member.id} name={member.name} avatarUrl={member.avatarUrl} description={member.profileUrl}/>
          )
        })
        }
        </div>
      </div>

    </div>
  );
}