import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import ContactForm from './contactForm';
import ContactList from './contactList';
import Filter from './filter';
import { AppTitle, ListTitle, Container } from './App.styled';
import { getContacts, getFilter } from 'redux/contactsSlice';
import {
  addMyContact,
  deleteMyContact,
  filterMyContact,
} from 'redux/contactsSlice';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const addContact = (name, number) => {
    const isExist = contacts.find(contact => contact.name === name);

    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addMyContact(contact));
  };

  const changeFilter = event => {
    dispatch(filterMyContact(event.currentTarget.value));
  };

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    dispatch(deleteMyContact(contactId));
  };

  return (
    <Container>
      <AppTitle>Phonebook</AppTitle>
      <ContactForm onSubmit={addContact} />
      <ListTitle>Contacts</ListTitle>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={filterContacts()}
        onDeleteContactHandle={deleteContact}
      />
    </Container>
  );
}
