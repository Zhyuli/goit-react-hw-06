import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import css from "./App.module.css";

const App = () => {
  return (
    <>
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
};
export default App;

// const getContacts = () => {
//   const savedContacts = window.localStorage.getItem("saved-contacts");
//   if (savedContacts !== null) {
//     return JSON.parse(savedContacts);
//   }
//   return [
//     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//   ];
// };

// export const App = () => {
//   //ADD
//   const [contacts, setContacts] = useState(getContacts);
//   const addContact = (newContact) => {
//     setContacts((prevContacts) => {
//       return [...prevContacts, newContact];
//     });
//   };

//   //DELETE
//   const deleteContact = (id) => {
//     setContacts((prevContacts) => {
//       return prevContacts.filter((contact) => contact.id !== id);
//     });
//   };

//   useEffect(() => {
//     window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
//   }, [contacts]);

//   //FILTER
//   const [nameFilter, setNameFilter] = useState("");
//   const findContact = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(nameFilter.toLowerCase())
//   );

//   return (
//     <>
//       <div>
//         <Title />
//         <ContactForm onAdd={addContact} />
//         <SearchBox value={nameFilter} onChange={setNameFilter} />
//         <ContactList onDelete={deleteContact} contacts={findContact} />
//       </div>
//     </>
//   );
// };
