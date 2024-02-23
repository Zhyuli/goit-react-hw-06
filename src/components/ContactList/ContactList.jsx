import ContactListItem from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts, selectNameFilter } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filters.toLowerCase());
  });

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <li className={css.listItem} key={contact.id}>
          <ContactListItem contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
