import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { nameFilter } from "../../redux/filterSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filter);

  const id = useId();
  return (
    <div className={css.searchBox}>
      <label htmlFor={id}>Find contact by name</label>
      <input
        className={css.input}
        type="text"
        id={id}
        value={value.name}
        onChange={(evt) => dispatch(nameFilter(evt.target.value))}
      />
    </div>
  );
};

export default SearchBox;
