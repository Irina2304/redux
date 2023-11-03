import { AddForm } from './AddForm/AddForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <>
      <h1>Contacts</h1>
      <AddForm />
      <Filter />
      <ContactsList />
    </>
  );
};
