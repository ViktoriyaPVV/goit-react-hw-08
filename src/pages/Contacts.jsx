import { useDispatch } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <div
      //   className={s.container}
      >
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {/* {isLoading && <h2>Loading...</h2>}
        {isError && <h2>Error...</h2>} */}
        <ContactList />
      </div>
    </div>
  );
};

export default Contacts;
