import { useId } from "react";
import css from "./SearchBox.module.css";

export const SearchBox = ({ value, onChange }) => {
  const id = useId();
  return (
    <div className={css.searchBox}>
      <label htmlFor={id}>Find contact by name</label>
      <input
        className={css.input}
        type="text"
        id={id}
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
      />
    </div>
  );
};
