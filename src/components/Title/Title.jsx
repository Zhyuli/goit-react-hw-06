import css from "./Title.module.css";

export const Title = () => {
  return (
    <div className={css.titleBox}>
      <h1 className={css.title}>Phonebook</h1>
    </div>
  );
};
