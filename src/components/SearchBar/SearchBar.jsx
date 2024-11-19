import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({ reset, setQuery }) {
  function submitHandler(e) {
    e.preventDefault();
    const query = e.target.elements.input.value.trim();
    if (!query) {
      toast.error("Search query can`t be empty", { position: "top-right" });
    } else {
      reset();
      setQuery(query);
      e.target.reset();
    }
  }

  return (
    <header className={css.header}>
      <form onSubmit={submitHandler} className={css.form}>
        <input
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.input}
        />
        <button type="submit" className={css.button}>
          <FiSearch />
          Search
        </button>
      </form>
    </header>
  );
}
