import { useContext } from "react";

import Card from "../ui/Card";
import classes from "./MeetUpItem.module.css";
import FavouritesContext from "../../store/favourites-context";

function MeetUpItem(props) {
  const favouritesCtx = useContext(FavouritesContext);
  const isFavorite = favouritesCtx.isFavorite(props.id);
  console.log(isFavorite);

  function toogleFavouriteStatusHandler() {
    if (isFavorite) {
      favouritesCtx.removeFavorite(props.id);
    } else {
      favouritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.id} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toogleFavouriteStatusHandler}>
            {isFavorite ? "Remove from Favourites" : "To Favourites"}
          </button>
        </div>
      </Card>
    </li>
  );
}
export default MeetUpItem;
