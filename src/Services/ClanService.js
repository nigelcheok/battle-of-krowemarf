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

  static getClanInfo(owner, repoName) {
    this.getRepo(owner, repoName).then(repoResponse => {
      // console.log(repoResponse);
      this.getRepoPullRequests(owner, repoName).then(repoPullRequestsResponse => {
        const linkHeaders = parseLinkHeader(repoPullRequestsResponse.headers.link);
        const lastPage = linkHeaders.last.page;
        axios.get(linkHeaders.last.url).then(repoPullRequestsLastPageResponse => {
          const pullRequestsTotalCount = (lastPage-1) * 30 + repoPullRequestsLastPageResponse.data.length;
          // console.log(pullRequestsTotalCount);
          return new Clan(
            repoResponse.data.id,
            repoResponse.data.stargazers_count,
            repoResponse.data.forks_count,
            repoResponse.data.open_issues_count - pullRequestsTotalCount,
            pullRequestsTotalCount
          );
        })
      })
    });
  }
}
