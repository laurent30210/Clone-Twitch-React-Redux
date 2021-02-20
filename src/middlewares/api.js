import axios from 'axios';

import {
  GET_STREAM_FROM_API,
} from 'src/store/actions';

// here we take key authorization 
//  https://id.twitch.tv/oauth2/authorize?client_id=3672qpowsak0jc3gz1w7g3ltttf7o8&redirect_uri=https://127.0.0.1&response_type=code
//  https://127.0.0.1/?code=7u3oxlzn1taj7exsxah547rl1ktic5&scope=


const api = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_STREAM_FROM_API:
      axios.get('https://api.twitch.tv/helix/games/top', {
        headers: {
          'client-id': '3672qpowsak0jc3gz1w7g3ltttf7o8',
          Authorization: 'Bearer 6s61kf2bs9t1au876ecnst3qc1wvm7',
        }})
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log('error ', error);
        });
      break;
    default:
      next(action);
  }
};

export default api;
