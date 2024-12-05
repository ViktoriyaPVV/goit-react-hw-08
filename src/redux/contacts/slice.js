import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addContactThunk,
  deleteContactThunk,
  fetchContacts,
} from "./operations";
import { logout } from "../auth/operations";

// import {
//   addContactThunk,
//   deleteContactThunk,
//   fetchContacts,
// } from "./contactsOps";
// import { selectFiltered } from "/";

const initialState = {
  items: [],
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  // reducers: {
  //   fetchContactsSuccess: (state, action) => {
  //     state.items = action.payload;
  //   },
  //   deleteContact: (state, action) => {
  //     state.items = state.items.filter((item) => item.id != action.payload);
  //   },
  //   addContact: (state, action) => {
  //     state.items.push(action.payload);
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id != action.payload);
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(logout.fulfilled, () => initialState)
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          deleteContactThunk.pending,
          addContactThunk.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          deleteContactThunk.fulfilled,
          addContactThunk.fulfilled
        ),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          deleteContactThunk.rejected,
          addContactThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.isError = action.payload;
        }
      );
  },
});

// export const selectContacts = (state) => state.contacts.items;

export const contactsReducer = slice.reducer;
export const { deleteContact, addContact, fetchContactsSuccess } =
  slice.actions;
