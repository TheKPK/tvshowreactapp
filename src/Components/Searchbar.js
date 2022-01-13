import {useContext, useState} from "react";
import Alert from "./Alert";

//context
import ShowsContext from "../Contexts/Shows/showsContext";
import AlertContext from "../Contexts/alerts/alertsContext";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  //show context
  const showsContext = useContext(ShowsContext);
  const {searchShows} = showsContext;

  //alert context
  const context = useContext(AlertContext);
  const {alert, setAlert} = context;

  const onSearchHandler = (event) => {
    event.preventDefault();

    if (searchTerm === "") {
      setAlert("Please Enter Something", "danger")
    } else {
      // console.log('searchTerm--->', searchTerm);
      searchShows(searchTerm);
    }
  }

  return (
    <div className="searchbar">
      {(alert) ? (<Alert message={alert.message} type={alert.type}/>) : null}

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
