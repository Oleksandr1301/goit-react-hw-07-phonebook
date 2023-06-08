import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactSlice';
import { selectContacts } from '../../redux/selectors';
import { FormField, Form, ButtonSubmit } from './phoneForm.styled';

 const PhoneForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleAddContact = e => {
    e.preventDefault();

    const form = e.target;
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const nameOnTheList = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    const newContact = {
      name: name,
      phone: phone,
    };

    if (!nameOnTheList) {
      dispatch(addContact(newContact));
      form.reset();
    } else {
      alert(`${name} is in use. Try another name.`);
    }
  };


  return (
    <Form action="submit" onSubmit={handleAddContact}>
      <FormField htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
         className = 'lable'
          required
        />
      </FormField>

      <FormField htmlFor="phone">
        Number
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          className="lable"
          required
        />
      </FormField>
      <ButtonSubmit type="submit">Add contact</ButtonSubmit>
    </Form>
  );
};

export default PhoneForm;