import axios from 'axios';

const apiUrl = 'https://api.github.com';

// const axiosConfig = {
//     headers: {
//       // Authorization: 'Bearer ' + store.state.tokenPackage.accessToken
//     }
// };

export class ClanService {
  static getReactClan() {
    return axios.get(apiUrl + '/repos/facebook/react');
  }
}
