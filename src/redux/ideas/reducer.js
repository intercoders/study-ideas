const initialState = {
  data: [
    { title: 'Redux' },
    { title: 'React Native' },
  ],
};

const ideasReducer = (state = initialState, action = {}) => {
  switch (action) {
    default:
      return state;
  }
};

export default ideasReducer;
