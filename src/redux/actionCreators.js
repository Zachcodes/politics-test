import axios from 'axios';

export function getPoliticianByState(state, endpoint, type) {
  let data = axios.get(`/${endpoint}/${state}`).then(res => res.data);
  return {
    type,
    payload: data
  };
}
