import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const initialState = {
  contacts: [
    { id: 0, name: 'Iryna', number: '123' },
    { id: 1, name: 'Yevhen', number: '456' },
    { id: 2, name: 'Kateryna', number: '789' },
    { id: 3, name: 'Artem', number: '147' },
    { id: 4, name: 'Natalia', number: '258' },
  ],
};

const rootReduser = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts / addContact':
      return {
        contacts: [...state.contacts, action.payload],
      };
  }
  return state;
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReduser, enhancer);

export const delContact = value => {
  return {
    type: 'contacts / delContact',
    payload: value,
  };
};

export const addContact = value => {
  return {
    type: 'contacts / addContact',
    payload: value,
  };
};
