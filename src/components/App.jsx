import { AddForm } from './AddForm/AddForm';
import { ContactsList } from './ContactsList/ContactsList';

export const App = () => {
  return (
    <>
      <h1>Contacts</h1>
      <AddForm />
      <ContactsList />
    </>
  );
};
