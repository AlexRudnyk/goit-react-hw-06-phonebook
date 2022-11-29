import ContactForm from './contactForm';
import ContactList from './contactList';
import Filter from './filter';
import { AppTitle, ListTitle, Container } from './App.styled';

export default function App() {
  return (
    <Container>
      <AppTitle>Phonebook</AppTitle>
      <ContactForm />
      <ListTitle>Contacts</ListTitle>
      <Filter />
      <ContactList />
    </Container>
  );
}
