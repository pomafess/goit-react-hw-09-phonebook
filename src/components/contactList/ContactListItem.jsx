import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

export const ContactListItem = ({name, number, onClickRemove}) => {
    return (
        <li className={styles.contactListItem}>
            <p>{name}: {number}</p>
            <button type="button" className={styles.contactsListButton} onClick={onClickRemove}>Delete</button>
        </li>
    )
}

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClickRemove: PropTypes.func.isRequired,
}