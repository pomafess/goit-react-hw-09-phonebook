import { Component } from 'react';
import { connect } from 'react-redux';

import ContactForm from '../../components/contactForm';
import Filter from '../../components/filter';
import ContactList from '../../components/contactList';
import { fetchContact } from '../../redux/phonebook/phonebook-operations';
import { isLoading } from '../../redux/phonebook/selectors';
import s from './Phonebook.module.css';

class PhonebookPage extends Component {


  componentDidMount() {
    this.props.fetchContact();

}

  render() {
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
            {this.props.isLoading && <h1>Loading...</h1>}
            <ContactList /> 
          </section>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
 isLoading: isLoading(state)
});
const mapDispatchToProps = dispatch => ({
  fetchContact: () => dispatch(fetchContact())
})

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookPage)