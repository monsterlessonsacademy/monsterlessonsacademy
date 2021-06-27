const initialState = {
  isLoading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "START_LOADING": {
      return {
        ...state,
        isLoading: true,
      };
    }
  }
};
