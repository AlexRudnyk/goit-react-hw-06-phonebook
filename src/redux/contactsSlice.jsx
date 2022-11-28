import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addMyContact(state, action) {
      state.contacts.unshift(action.payload);
    },
    deleteMyContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    filterMyContact(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addMyContact, deleteMyContact, filterMyContact } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;
