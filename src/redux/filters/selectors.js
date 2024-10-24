import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";
// import { selectContacts } from "../contacts/selectors";
export const selectFilter = (state) => state.filter.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) return contacts;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
