import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { contactsSlice } from './contactSlice';
import { filterSlice } from './filterSlice';

export const store = configureStore({
  reducer: combineReducers({
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  }),
});
