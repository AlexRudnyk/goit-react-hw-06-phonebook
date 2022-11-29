import { ListItem, DeleteBtn } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter, deleteMyContact } from 'redux/contactsSlice';

const filterContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = filterContacts(contacts, filter);

  const deleteContact = contactId => dispatch(deleteMyContact(contactId));

  return (
    <ul>
      {visibleContacts.map(({ name, number, id }) => (
        <ListItem key={id}>
          {name}: {number}
          <DeleteBtn type="button" onClick={() => deleteContact(id)}>
            Delete
          </DeleteBtn>
        </ListItem>
      ))}
    </ul>
  );
};

export default ContactList;
