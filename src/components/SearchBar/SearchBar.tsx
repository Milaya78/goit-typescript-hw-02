import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import { FiSearch } from "react-icons/fi";
import { FormEvent } from "react";

type Props = {
  reset: () => void;
  setQuery: (searchQuery: string) => void;
};

export default function SearchBar({ reset, setQuery }: Props) {
  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const query = (
      e.currentTarget.elements.namedItem("seachTerm") as HTMLInputElement
    ).value.trim();
    
    if (!query) {
      toast.error("Search query can`t be empty", { position: "top-right" });
    } else {
      reset();
      setQuery(query);
      e.currentTarget.reset();
    }
  }

  return (
    <header className={css.header}>
      <form onSubmit={submitHandler} className={css.form}>
        <input
          name="seachTerm"
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
