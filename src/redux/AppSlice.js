import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

export const phonebookSlice = createSlice({
  name: "phonebook",
	initialState,
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    // deleteTask(state, action) {
    //   const index = state.findIndex(task => task.id === action.payload);
    //   state.splice(index, 1);
    // },
    addFilter: (state, action) => {
      state.contacts.filter = action.payload.toLowerCase();
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

export const persistedReducer = persistReducer(
  persistConfig,
  phonebookSlice.reducer
);

export const { addContact, addFilter} = phonebookSlice.actions;
 
// export const selectContactsItems = state => state.phonebook.contacts.items;
export const selectContactsFilter = state => state.phonebook.contacts.filter;