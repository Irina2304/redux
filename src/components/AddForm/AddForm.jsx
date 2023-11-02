import { useDispatch } from 'react-redux';
import { addContact } from 'redux/store';
import { nanoid } from 'nanoid';

export const AddForm = () => {
  //   const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  //   const contacts = useSelector(state => state.contacts);

  const onSubmit = evt => {
    evt.preventDefault();
    const newContact = {
      id: nanoid(),
      name: evt.target.input.value,
      numer: 896,
    };
    dispatch(addContact(newContact));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="input" />
        <button>add</button>
      </form>
    </div>
  );
};
