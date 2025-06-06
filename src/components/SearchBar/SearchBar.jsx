import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast("Введи текст для пошуку зображень");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          className={s.field}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
        <Toaster />
      </form>
    </header>
  );
};

export default SearchBar;
