import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import { addContact } from '../../redux/phonebook/phonebook-operations';
import useForm from '../../shared/hooks/useForm';
import {fields} from './fields';
import FormField from '../../shared/components/FormField'
import Button from '../../shared/components/Button'

import s from './ContactForm.module.css';

const initialState = {
     name: '',
     number: '',
};
 
const ContactForm = () => {


    const dispatch = useDispatch();
    const onSubmit = useCallback((contact) => dispatch(addContact(contact)), [dispatch]);
    const [data, , handleChange, handleSubmit] = useForm({ initialState, onSubmit });

        return (
            <form onSubmit={handleSubmit} className={s.form}>
                <h3>Name</h3>
                 <FormField {...fields.name} value={data.name} onChange={handleChange} className={s.input} /><br />
                <h3>Number</h3>
                 <FormField {...fields.number} value={data.number} onChange={handleChange} className={s.input} /><br/>
                <Button type="submit">Add contact</Button>
            </form>
        )
    }

ContactForm.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
}


export default ContactForm;
