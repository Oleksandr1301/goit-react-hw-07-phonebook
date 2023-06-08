import { useSelector } from 'react-redux';
import { selectContactsCount } from '../redux/contactSlice';

export const ContactsCounter = () => {
  const count = useSelector(selectContactsCount);


  return (
    <div>
      <h3>Number of contacts: {count}</h3>
    </div>
  );
};