import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import PhoneForm from './phoneForm/phoneForm';
import ContactList from './contactList/contactList';
import { ContactsCounter } from 'components/contactsCounter';
import Filter from './contactFilter/contactFilter';
import { fetchContacts } from '../redux/contactSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsCounter />
      <PhoneForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;