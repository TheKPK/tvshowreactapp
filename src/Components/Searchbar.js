import { useState } from "react";
import Alert from "./Alert";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchHandler = (event) => {
      event.preventDefault();
      console.log('searchTerm--->', searchTerm);
  }

  return (
    <div className="searchbar">
        <Alert message="Please enter something" type="danger"/>
      <form action="" className="searchbar__form">
        <input
          type="text"
          placeholder="Search for Tv show"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-block" onClick={onSearchHandler}>
          Search{" "}
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
