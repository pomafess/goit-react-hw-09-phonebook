import { createSelector } from '@reduxjs/toolkit';

export const isLoading = state => state.phonebook.loading;

export const isError = state => state.phonebook.error;

export const getFilterContacts = state => state.phonebook.value;

export const getContacts = state => state.phonebook.contacts;

export const getfiltered = createSelector(
    [getContacts, getFilterContacts],
    (contacts, value) => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase()),
        );
    },
);