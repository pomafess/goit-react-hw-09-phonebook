import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import Button from '../../shared/components/Button'

export const ContactListItem = ({name, number, onClickRemove}) => {
    return (
        <li className={styles.contactListItem}>
            <p>{name}: {number}</p>
            <Button className={styles.contactsListButton} onClick={onClickRemove}>Delete</Button>
        </li>
    )
}

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClickRemove: PropTypes.func.isRequired,
}