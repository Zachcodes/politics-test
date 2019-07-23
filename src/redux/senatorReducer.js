import { GET_SENATORS } from './actionTypes';

const initialState = {
  senators: [],
  loading: true,
  error: false
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case GET_SENATORS + '_PENDING':
      return { error: false, senators: [], loading: true };
    case GET_SENATORS + '_FULFILLED':
      return { error: false, senators: payload.results, loading: false };
    case GET_SENATORS + '_REJECTED':
      return { error: payload, senators: [], loading: false };
    default:
      return state;
  }
}
