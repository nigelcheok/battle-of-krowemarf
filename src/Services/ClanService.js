import axios from 'axios';

const apiUrl = 'https://api.github.com';

// const axiosConfig = {
//     headers: {
//       // Authorization: 'Bearer ' + store.state.tokenPackage.accessToken
//     }
// };

export class ClanService {
  static getRepoStats(owner, repoName) {
    return axios.get(`${apiUrl}/repos/${owner}/${repoName}`);
  }

  // static getReactClan() {
  //   // return axios.get(apiUrl + '/repos/facebook/react');
  //   return this.getRepoStats('facebook', 'react');
  // }

  static getRepoPulls(owner, repoName) {
    return axios.get(`${apiUrl}/repos/${owner}/${repoName}/pulls`);
  }


}
