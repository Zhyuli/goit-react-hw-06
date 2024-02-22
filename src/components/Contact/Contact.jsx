import { FiPhone, FiUser } from "react-icons/fi";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const ContactListItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.itemBox}>
      <div className={css.leftBox}>
        <p className={css.name}>
          <FiUser className={css.svg} />
          {name}
        </p>
        <p className={css.number}>
          {" "}
          <FiPhone className={css.svg} />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
};

export default ContactListItem;
