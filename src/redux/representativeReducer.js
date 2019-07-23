import { GET_REPRESENTATIVES } from './actionTypes';

const initialState = {
  representatives: [],
  loading: true,
  error: false
};

export default function(state = initialState, { type, payload }) {
  console.log('type in rep', type);
  console.log('payload in rep', payload);
  switch (type) {
    case GET_REPRESENTATIVES + '_PENDING':
      return { loading: true, representatives: [], error: false };
    case GET_REPRESENTATIVES + '_FULFILLED':
      return { loading: false, representatives: payload.results, error: false };
    case GET_REPRESENTATIVES + '_REJECTED':
      return { loading: false, representatives: [], error: payload };
    default:
      return state;
  }
}
