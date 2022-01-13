import React, {useContext, useEffect} from 'react'
import ShowsContext from "../Contexts/Shows/showsContext";
import {useParams} from "react-router-dom";
import Loader from "../Components/Loader";

const Singlepage = () => {
  const {id} = useParams();
  const notfoundImage = "notfound.jpg"
  //context
  const context = useContext(ShowsContext)
  const {getSingleShow, singleShow, loading} = context;

  useEffect(() => {
    getSingleShow(id)
    //eslint-disable-next-line

  }, [id]);
  //remove html tags in the description
  const removeTags = (text) => {
    if (text === null || text === "") {
      return false
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "")
  }

  return (
    <>
      {loading ? <Loader/>:
        <div className="singleshow">
          <img src={(singleShow.image) ? (singleShow.image?.medium) : notfoundImage} alt={singleShow.name}/>
          <div className="singleshow__info">
            <h1>{singleShow.name}</h1>
            {singleShow.genres && singleShow.genres.map(genre => (
              <span key={genre} className="singleshow__genre">{genre}</span>
            ))}
            <p>
              <strong>Status: </strong>{singleShow.status && singleShow.status}
            </p>
            <p>
              <strong>Rating: </strong>{(singleShow.rating) ? (singleShow.rating?.average) : "No Rating"}
            </p><p>
            <strong>Official site: </strong>{(singleShow.officialSite) ? (
            <a href={singleShow.officialSite} target="_blank"
               rel="noreferrer">{singleShow.officialSite} </a>) : "No official Site"}
          </p>
            <p>{singleShow.summary && removeTags(singleShow.summary)} </p>
          </div>

        </div>
      }
    </>
  )
}

export default Singlepage;
