import React, {useContext} from 'react'
import Searchbar from '../Components/Searchbar'
import ShowsContext from "../Contexts/Shows/showsContext";
import ListItem from "../Components/ListItem";

const Homepage = () => {

  const context = useContext(ShowsContext);
  const {loading, shows} = context;
  const defaultImage = "notfound.jpg"
  return (
    <div className='homepage'>
      <Searchbar/>
      {loading ? (<h2>Loading...</h2>) : (
        <div className="homepage__list">
          {shows.map((item) => (<ListItem
            key={item.show?.id}
            id={item.show?.id}
            image={(item.show.image) ? (item.show?.image?.medium) : (defaultImage)}
            name={item.show.name}
            rating={(item.show.rating.average)? (item.show.rating.average):"No Rating"}

          />))}
        </div>)
      }
    </div>
  )
}

export default Homepage;
