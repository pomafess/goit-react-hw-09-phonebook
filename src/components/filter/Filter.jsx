import React from 'react';
import { useDispatch, shallowEqual, useSelector} from 'react-redux';


import { changeFilter } from '../../redux/phonebook/phonebook-actions';

import styles from './Filter.module.css'

const Filter = () => {
    const value = useSelector(state => state.phonebook.value, shallowEqual)
    const dispatch = useDispatch();
    const onChangeFilter = e => dispatch(changeFilter(e.target.value));
    console.log(onChangeFilter)
    return (
        <div className={styles.filter}>
            <p>Find contacts by name</p>
            <input type="text" value={value} onChange={onChangeFilter}/>
        </div>
    )
}

export default Filter;