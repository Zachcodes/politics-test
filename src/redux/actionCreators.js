import axios from 'axios';
import { GET_SENATORS, GET_REPRESENTATIVES } from './actionTypes';

export function getSenatorsByState(state) {
  let data = axios.get(`/senators/${state}`).then(res => res.data);
  return {
    type: GET_SENATORS,
    payload: data
  };
}

export function getRepsByState(state) {
  let data = axios.get(`/representatives/${state}`).then(res => res.data);
  return {
    type: GET_REPRESENTATIVES,
    payload: data
  };
}
