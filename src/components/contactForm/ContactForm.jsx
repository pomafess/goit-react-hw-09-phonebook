import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import { addContact } from '../../redux/phonebook/phonebook-operations';
import useForm from '../../shared/hooks/useForm';

import styles from './ContactForm.module.css';



const ContactForm = () => {

   const initialState = {
        name: '',
        number: '',
    };

    const dispatch = useDispatch();
    const onSubmit = useCallback((contact) => dispatch(addContact(contact)), [dispatch]);
    const [data, , handleChange, handleSubmit] = useForm({ initialState, onSubmit });

        return (
            <form onSubmit={handleSubmit} className={styles.form}>
                <h3>Name</h3>
                <input type="text" name="name" value={data.name} onChange={handleChange} /><br />
                <h3>Number</h3>
                <input type="tel" name="number" value={data.number} onChange={handleChange} /><br/>
                <button type="submit" className={styles.buttonForm}>Add contact</button>
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

// handleChange = (type, e) => {
    //     const {contacts} = this.props;
    //     if (type==='name') {
    //       const contactInState = contacts.find(contact => contact.name.toLowerCase() === e.target.value.toLowerCase());
    //       if (contactInState) {
    //         alert(`${contactInState.name} is already in contacts!`);
    //       }
    //     }
    //     this.setState({[type]: e.target.value})
    // }

    // handleSubmit = e => {
    //     e.preventDefault();
    //     const {name, number} = this.state;
    //     const {contacts, onAddContact} = this.props;
    //     const contactInState = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    //     contactInState && alert(`${contactInState.name} is already in contacts!`);
    //     if (!contactInState && name && number) {
    //         onAddContact(name, number);
    //         this.setState(contacts);
    //         this.setState({ name: '', number: '' })
    //         return
    //     }
    // }