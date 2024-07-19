import { Link } from "react-router-dom";
import "./favourites.css";

function Favourites() {
  return (
    <>
      <h1 className="fav-heading">Favourites</h1>
      <div className="links">
        <Link to="favourite/movies">Go to Favourite Movies</Link>
        <Link to="favourite/tv">Go to Favourite TV Shows</Link>
      </div>
    </>
  );
}

export default Favourites;
