import { Form, FormLabel, FormInput, FormBtn } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, addMyContact } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.number.value;
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

    document.getElementById('form').reset();
  };

  return (
    <Form onSubmit={handleSubmit} id="form">
      <FormLabel>Name</FormLabel>
      <FormInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <FormLabel>Number</FormLabel>
      <FormInput
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <FormBtn type="submit">Add contact</FormBtn>
    </Form>
  );
}
