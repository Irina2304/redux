import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { contactsReduser } from './contactsSlice';
import { filterReduser } from './filterSlise';

const rootReduser = combineReducers({
  contacts: contactsReduser,
  filter: filterReduser,
});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReduser, enhancer);
