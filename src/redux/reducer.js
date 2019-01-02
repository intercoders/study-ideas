const initialState = {
  ideas: [
    { title: 'Redux' },
    { title: 'React Native' },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
