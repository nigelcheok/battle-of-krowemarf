import axios from 'axios';
import parseLinkHeader from 'parse-link-header';

import { Clan } from '../Models/Clan';

const apiUrl = 'https://api.github.com';

// const axiosConfig = {
//     headers: {
//       // Authorization: 'Bearer ' + store.state.tokenPackage.accessToken
//     }
// };

export class ClanService {
  static getRepo(owner, repoName) {
    return axios.get(`${apiUrl}/repos/${owner}/${repoName}`);
  }
  static getRepoPullRequests(owner, repoName) {
    return axios.get(`${apiUrl}/repos/${owner}/${repoName}/pulls`);
  }

  static async getClanDetails(clan) {
    const repoResponse = await this.getRepo(clan.ownerName, clan.repoName);
    const repoPullRequestsResponse = await this.getRepoPullRequests(clan.ownerName, clan.repoName);
    const linkHeaders = parseLinkHeader(repoPullRequestsResponse.headers.link);
    const lastPage = linkHeaders.last.page;
    const repoPullRequestsLastPageResponse = await axios.get(linkHeaders.last.url);
    const pullRequestsTotalCount = (lastPage-1) * 30 + repoPullRequestsLastPageResponse.data.length;

    const clanDetails = new Clan(
      clan,
      repoResponse.data.id,
      repoResponse.data.name,
      repoResponse.data.stargazers_count,
      repoResponse.data.forks_count,
      repoResponse.data.open_issues_count - pullRequestsTotalCount,
      pullRequestsTotalCount
    );

    return clanDetails;
  }

  static getRepoStarredUsers(owner, repoName) {
    return axios.get(`${apiUrl}/repos/${owner}/${repoName}/stargazers`);
  }

  // static async getClanMembers() {
  //
  // }
}
