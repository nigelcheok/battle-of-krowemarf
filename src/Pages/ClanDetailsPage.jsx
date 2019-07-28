import React, { useState, useEffect } from 'react';
import { SectionSubheader } from '../Components/Section/SectionSubheader/SectionSubheader';
import { Card } from '../Components/Card/Card';
import { Loader } from '../Components/Loader/Loader';
import { Avatar } from "../Components/Avatar/Avatar";

import { ClanService } from '../Services/ClanService';
import ClanConstants from '../Constants/ClanConstants';
import {UserFactory} from "../Factories/UserFactory";
import parseLinkHeader from "parse-link-header";

export function ClanDetailsPage(routeInfo) {
  const [isLoading, setLoader] = useState(true);
  const [ClanDetails, setClanDetails] = useState(undefined);
  const [ClanMembers, setClanMembers] = useState([]);
  const [ClanMembersNextPageUrl, setClanMembersNextPageUrl] = useState(undefined);
  const [isFetching, setFetcher] = useState(false);

  const clanRouteId = routeInfo.match.params.id;
  const clan = getClan(clanRouteId);

  function getClan(clanRouteId) {
    const clanInfo = ClanConstants.allClans.filter(clan => clan.clanName.toLowerCase() === clanRouteId);
    if (clanInfo.length) return clanInfo[0];
    return undefined;
  }

    function handleScroll() {
    if (Math.ceil(window.innerHeight + document.documentElement.scrollTop) < document.documentElement.offsetHeight) return;
    setFetcher(true);
  }

  useEffect(() => {
    async function getClanDetails(clan) {
      const clanDetails = await ClanService.getClanDetails(clan);
      setClanDetails(clanDetails);

      const response = await ClanService.getRepoStarredUsers(clan.ownerName, clan.repoName);
      const linkHeaders = parseLinkHeader(response.headers.link);
      setClanMembersNextPageUrl(linkHeaders.next.url);

      const clanMembers = UserFactory.createFromJsonArray(response.data);
      setClanMembers(clanMembers);
      setLoader(false);
    }

    if (clan) {
      getClanDetails(clan);
    }
    window.addEventListener('scroll', handleScroll);
  }, [clan]);

  useEffect(() => {
    async function getMoreClanMembers() {
      const response = await ClanService.getDataFromUrl(ClanMembersNextPageUrl);
      const linkHeaders = parseLinkHeader(response.headers.link);
      setClanMembersNextPageUrl(linkHeaders.next.url);

      const additionalClanMembers = UserFactory.createFromJsonArray(response.data);
      setClanMembers([...ClanMembers, ...additionalClanMembers]);
      setFetcher(false);
    }

    if (isFetching) {
      getMoreClanMembers();
    }
  }, [isFetching]);

  return (
    <div>
      <div className="container">
        <SectionSubheader text={`${ clan ? clan.clanName : ''} Clan Details`}/>
      </div>

      <div className="container">
        { isLoading && <Loader/> }

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
        { isLoading && <Loader/> }

        <div className="d-flex justify-content-between flex-wrap">
        {
          ClanMembers.map(member => {
            return (
              <Avatar key={member.id} name={member.name} avatarUrl={member.avatarUrl} description={member.profileUrl}/>
            )
          })
        }
        </div>

        { isFetching &&
        <div className="d-flex justify-content-center">
          <Loader/>
        </div>
        }
      </div>

    </div>
  );
}