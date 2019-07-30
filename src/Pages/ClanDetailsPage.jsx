import React, { useState, useEffect } from 'react';
import { SectionSubheader } from '../Components/Section/SectionSubheader/SectionSubheader';
import { Card } from '../Components/Card/Card';
import { Loader } from '../Components/Loader/Loader';
import { Avatar } from '../Components/Avatar/Avatar';
import { InputField } from '../Components/Form/InputField/InputField';
import { ExternalLinkButton } from '../Components/Button/ExternalLinkButton/ExternalLinkButton';
import { CardLoader } from '../Components/Loader/CardLoader/CardLoader';

import ClanConstants from '../Constants/ClanConstants';
import { ClanService } from '../Services/ClanService';
import { UserFactory } from '../Factories/UserFactory';
import parseLinkHeader from 'parse-link-header';

export function ClanDetailsPage(routeInfo) {
  const [isLoading, setLoader] = useState(true);
  const [clanDetails, setClanDetails] = useState(undefined);
  const [clanMembers, setClanMembers] = useState([]);
  const [clanMembersNextPageUrl, setClanMembersNextPageUrl] = useState(undefined);
  const [isFetching, setFetcher] = useState(false);
  const [queryString, setQueryString] = useState('');

  const clanRouteId = routeInfo.match.params.id;
  const clan = getClan(clanRouteId);

  function getClan(clanRouteId) {
    const clanInfo = ClanConstants.allClans.filter(clan => clan.clanName.toLowerCase() === clanRouteId);
    if (clanInfo.length) return clanInfo[0];
    return undefined;
  }

  function updateClanMembers(response) {
    const clanMembersToBeIncluded = UserFactory.createFromJsonArray(response.data);
    setClanMembers([...clanMembers, ...clanMembersToBeIncluded]);
    const linkHeaders = parseLinkHeader(response.headers.link);
    setClanMembersNextPageUrl(linkHeaders.next.url);
  }

  function handleScroll() {
    if (Math.ceil(window.innerHeight + document.documentElement.scrollTop + 100) < document.documentElement.offsetHeight) return;
    setFetcher(true);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function getClanDetails(clan) {
      const clanDetails = await ClanService.getClanDetails(clan);
      setClanDetails(clanDetails);

      const response = await ClanService.getRepoStarredUsers(clan.ownerName, clan.repoName);
      updateClanMembers(response);
      setLoader(false);
    }

    if (clan) {
      getClanDetails(clan);
    }
    window.addEventListener('scroll', handleScroll);

    return function cleanup() {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [clan]);

  useEffect(() => {
    async function getMoreClanMembers(nextPageUrl) {
      const response = await ClanService.getDataFromUrl(nextPageUrl);
      updateClanMembers(response);
      setFetcher(false);
    }

    if (isFetching && clanMembersNextPageUrl) {
      getMoreClanMembers(clanMembersNextPageUrl);
    }
  }, [isFetching]);

  return (
    <div>
      <div className="container">
        <div className="d-sm-flex justify-content-between align-items-end">
          <SectionSubheader text={`${ clan ? clan.clanName : ''} Clan Details`}/>
          { clan &&
            <ExternalLinkButton
              id="github-link"
              icon="fa-github"
              text={`Visit ${clan.ownerName}/${clan.repoName} on GitHub`}
              link={`https://github.com/${clan.ownerName}/${clan.repoName}`}
            />
          }
        </div>
      </div>

      <div className="container">
        { isLoading && <CardLoader/> }

        { clanDetails &&
          <Card
            title={clanDetails.clan.clanName}
            description={`By ${clanDetails.clan.ownerName}`}
            clanDetails={clanDetails}
            disabled
          />
        }
      </div>

      <div className="container">
        <div className="d-sm-flex justify-content-between align-items-end">
          <SectionSubheader text={`${ clan ? clan.clanName : ''} Clan Members`}/>
          <div>
            <InputField queryString={queryString} onQueryStringChanged={(e) => setQueryString(e)}/>
          </div>
        </div>
      </div>

      <div className="container">
        { isLoading && <CardLoader/> }

        { queryString === '' &&
          <div className="mr-n3">
            <div className="d-flex justify-content-between flex-wrap">
              {
                clanMembers.map(member => {
                  return (
                    <Avatar
                      key={member.id}
                      name={member.name}
                      avatarUrl={member.avatarUrl}
                      description={member.profileUrl}
                      link={member.profileUrl}
                    />
                  )
                })
              }
            </div>

            { !isLoading && isFetching &&
              <div className="mr-3">
                <div className="d-flex justify-content-center">
                  <Loader/>
                </div>
              </div>
            }
          </div>
        }

        { queryString !== '' &&
          <div className="d-flex justify-content-between flex-wrap">
            {
              clanMembers.filter(member => member.name.toLowerCase().includes(queryString.toLowerCase())).map(member => {
                return (
                  <Avatar
                    key={member.id}
                    name={member.name}
                    avatarUrl={member.avatarUrl}
                    description={member.profileUrl}
                    link={member.profileUrl}
                  />
                )
              })
            }
          </div>
        }
      </div>
    </div>
  );
}
