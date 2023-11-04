import { useDispatch, useSelector } from 'react-redux';
import { delContact } from 'redux/contactsSlice';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(state => state.contacts);
  console.log(contacts);

  const onClick = evt => {
    console.log(evt.currentTarget.name);
    dispatch(delContact(Number(evt.currentTarget.name)));
  };

  return (
    <div>
      <h2>Your contacts list:</h2>
      <ul>
        {contacts.map(item => (
          <li key={item.id}>
            <p>Name:{item.name}</p>
            <p>{item.number}</p>
            <button name={item.id} onClick={onClick}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
