import { useSelector, useDispatch } from 'react-redux';
import { List, Item, DelButton } from './contactList.styled';
import {
  selectStatusFilter,
  selectContacts,
  selectIsLoading,
} from '../../redux/selectors';

import { deleteContact } from '../../redux/contactSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectStatusFilter);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const filteredContacts = contacts
    .filter(contact => {
      const nameMatch = contact.name
        ? contact.name.toLowerCase().includes(filter.toLowerCase())
        : false;
      const phoneMatch = contact.phone
        ? contact.phone.toLowerCase().includes(filter.toLowerCase())
        : false;
      return nameMatch || phoneMatch;
    })
    .sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
    });

  const handleDelete = idToDelete => {
    dispatch(deleteContact(idToDelete));
  };

  return isLoading ? (
    <p>List is Loading! Please wait.</p>
  ) : filteredContacts.length > 0 ? (
    <>
      <List>
        {filteredContacts.map(({ id, name, phone }) => {
          return (
            <Item key={id}>
              {name}: {phone}
              <DelButton type="submit" onClick={() => handleDelete(id)}>
                Delete
              </DelButton>
            </Item>
          );
        })}
      </List>
    </>
  ) : (
    <p>No contacts.</p>
  );
};

export default ContactList;