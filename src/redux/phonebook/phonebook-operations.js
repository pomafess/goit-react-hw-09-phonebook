import axios from 'axios';
import {
    fetchRequest,
    fetchSuccess,
    fetchError,
    addRequest,
    addSuccess,
    addError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
} from './phonebook-actions';


axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContact = () => async dispatch => {
  dispatch(fetchRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(fetchSuccess(data));
  } catch (error) {
    dispatch(fetchError(error));
  }
};

export const addContact = ({ name, number }) => async dispatch => {
  const contact = { name, number };

  dispatch(addRequest())
  try {
    const { data } = await axios.post('/contacts', contact);
       
    dispatch(addSuccess(data));
  }
  catch (error) {
    dispatch(addError(error));
  }
};

export const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    await axios.delete(`/contacts/${id}`)
    dispatch(deleteContactSuccess(id));
  }
  catch (error) {
    dispatch(deleteContactError(error));
  }
}