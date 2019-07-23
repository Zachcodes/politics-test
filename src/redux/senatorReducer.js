const initialState = {
  senators: [],
  loading: true
};

export default function(state = initialState, { type, payload }) {
  console.log('type in senator', type);
  console.log('payload in senator', payload);
  switch (type) {
    default:
      return state;
  }
}
