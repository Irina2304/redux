const contactsInitialState = {
  contacts: [
    { id: 0, name: 'Iryna', number: '123' },
    { id: 1, name: 'Yevhen', number: '456' },
    { id: 2, name: 'Kateryna', number: '789' },
    { id: 3, name: 'Artem', number: '147' },
    { id: 4, name: 'Natalia', number: '258' },
  ],
};

export const contactsReduser = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts / addContact':
      return {
        contacts: [...state.contacts, action.payload],
      };
    case 'contacts / delContact':
      return {
        contacts: state.contacts.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

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
