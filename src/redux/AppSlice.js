import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    filter: '',
  },
};

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    addFilter: (state, action) => {
      state.contacts.filter = action.payload.toLowerCase();
    },
  },
});

export const phonebookReducer = phonebookSlice.reducer;

export const { addFilter } = phonebookSlice.actions;

export const selectContactsFilter = state => state.phonebook.contacts.filter;