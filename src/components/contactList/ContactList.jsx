import React from 'react';
import { useDispatch, shallowEqual, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {ContactListItem} from './ContactListItem'
import { deleteContact } from '../../redux/phonebook/phonebook-operations';
import { getfiltered } from '../../redux/phonebook/selectors';
import styles from './ContactList.module.css';

const ContactList = () => {
    const filteredContacts =  useSelector(state => getfiltered(state), shallowEqual)
    const dispatch = useDispatch();
    const onRemove = (id) => dispatch(deleteContact(id));

    const result = filteredContacts.map(({ id, name, number }) => (
        <ContactListItem key={id} name={name} number={number} onClickRemove={() => onRemove(id)} />
    ))
    
    return (
        filteredContacts.length > 0 && (
            <ul className={styles.contactsList}>
                {result}
            </ul>
        )
    )
}


ContactList.propTypes = {
    filteredContacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onRemove: PropTypes.func.isRequired,
}

export default ContactList;