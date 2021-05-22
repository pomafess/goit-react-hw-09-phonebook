import { useEffect } from 'react';
import { useDispatch,shallowEqual, useSelector } from 'react-redux';
import ContactForm from '../../components/contactForm';
import Filter from '../../components/filter';
import ContactList from '../../components/contactList';
import { fetchContact } from '../../redux/phonebook/phonebook-operations';
import s from './Phonebook.module.css';

const PhonebookPage = () => {
const isLoading = useSelector(state => state.phonebook.loading, shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchContact())
  }, [dispatch])


    return(
      <>
            <div className={s.container}>
                <section title="Phonebook" className={s.section}>
            <h1>Phonebook</h1>
            <ContactForm />
          </section>
          <section title="Contacts" className={s.section}>
            <h2>Contacts</h2>
            <Filter />
            {isLoading && <h1>Loading...</h1>}
            <ContactList /> 
          </section>
        </div>
      </>
    )
  }

export default PhonebookPage