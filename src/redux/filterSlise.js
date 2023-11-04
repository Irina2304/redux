const filterInitialState = {
  filter: '',
};

export const filterReduser = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'filter / findName':
      return {
        filter: action.payload,
      };

    default:
      return state;
  }
};

export const findName = name => {
  return {
    type: 'filter / findName',
    payload: name,
  };
};
